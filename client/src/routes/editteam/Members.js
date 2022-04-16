import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadTeam, updateTeam } from "reduxStore";
import { Input, GenericButton, ImageCropper } from "components";
import { v4 } from "uuid";

// eslint-disable-next-line
import styles from "./styles.scss";

const EditMember = ({ member, errors, updateTeam, error_id }) => {
  const [form, setForm] = useState({
    id: member.id,
    firstName: member.firstName,
    lastName: member.lastName,
    title: member.title,
    info: member.info,
  });

  const [cAvatar, setCAvatar] = useState(member.avatar_link);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => updateTeam(form);

  const onDelete = () => updateTeam({ ...form, deleted: 1 });

  const { id, firstName, lastName, title, info } = form;

  useEffect(() => {
    setCAvatar(member.avatar_link);
  }, [member.avatar_link]);

  return (
    <div className="editteam-list">
      <div className="editteam">
        <div>
          {cAvatar ? (
            <img onClick={() => setCAvatar(false)} alt="img" src={cAvatar} />
          ) : (
            <ImageCropper memberId={form.id} avatar_link={form.avatar_link} />
          )}
        </div>
        <div className="editteam-inputs-container">
          <div>
            {errors &&
              error_id === id &&
              errors.length > 0 &&
              errors.map((o) => (
                <div key={v4()} style={{ color: "red" }}>
                  {o.msg}
                </div>
              ))}
          </div>
          <Input
            name="firstName"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "firstName")}
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "lastName")}
          />
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "title")}
          />
          <Input
            name="info"
            type="text"
            placeholder="Info"
            value={info}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "info")}
          />
          <div>
            <GenericButton label="Delete" onClick={onDelete} color="negative" />
            <GenericButton label="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = ({
  loadTeam,
  loading,
  team,
  updateTeam,
  refresh,
  errors,
  error_id,
}) => {
  useEffect(() => {
    loadTeam();
    // eslint-disable-next-line
  }, [refresh]);

  const orderedTeam = team.sort((a, b) => b.id - a.id);

  return (
    <div className="member-container">
      {orderedTeam.map((o) => (
        <EditMember
          key={`editmember-${o.id}`}
          member={o}
          updateTeam={updateTeam}
          errors={errors}
          error_id={error_id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.team.team,
  loading: state.team.loading,
  refresh: state.team.refresh,
  errors: state.team.errors,
  error_id: state.team.error_id,
});

const mapDispatchToProps = {
  loadTeam,
  updateTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
