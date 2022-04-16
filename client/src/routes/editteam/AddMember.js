import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, GenericButton } from "components";
import { updateTeam } from "reduxStore";
import { v4 } from "uuid";

// eslint-disable-next-line
import styles from "./styles.scss";

const AddMember = ({ errors, loading, updateTeam, error_id }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    info: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => updateTeam(form);

  const { firstName, lastName, title, info } = form;

  return (
    <div className="editteam-container">
      <div className="add-editteam">
        <div className="editteam-title">Add Member</div>
        <div style={{ textAlign: "center" }}>
          {errors &&
            !error_id &&
            errors.length > 0 &&
            errors.map((o) => (
              <div key={v4()} style={{ color: "red" }}>
                {o.msg}
              </div>
            ))}
        </div>
        <div className="add-editteam-inputs">
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
        </div>
        <div style={{ textAlign: "center" }}>
          <GenericButton label="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.team.loading,
  errors: state.team.errors,
  error_id: state.team.error_id,
});

const mapDispatchToProps = { updateTeam };

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
