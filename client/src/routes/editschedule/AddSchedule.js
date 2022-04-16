import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input, GenericButton } from "components";
import { updateSchedule } from "reduxStore";
import { v4 } from "uuid";

// eslint-disable-next-line
import styles from "./styles.scss";

const AddMember = ({ errors, error_id, loading, updateSchedule, refresh }) => {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    race: "",
    location: "",
    results: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => updateSchedule(form);

  const { startDate, endDate, race, location, results } = form;

  useEffect(() => {
    setForm({
      startDate: "",
      endDate: "",
      race: "",
      location: "",
      results: "",
    });
  }, [refresh]);

  return (
    <div className="add-editschedule-container">
      <div className="add-editschedule">
        <div className="add-editschedule-title">Add Race</div>
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
        <div className="add-editschedule-inputs">
          <Input
            name="startDate"
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "startDate")}
          />
          <Input
            name="endDate"
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "endDate")}
          />
          <Input
            name="race"
            type="text"
            placeholder="Race"
            value={race}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "race")}
          />
          <Input
            name="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "location")}
          />
          <Input
            name="results"
            type="text"
            placeholder="Results"
            value={results}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "results")}
          />
        </div>
        <div>
          <GenericButton label="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.schedule.loading,
  errors: state.schedule.errors,
  error_id: state.schedule.error_id,
  refresh: state.schedule.refresh,
});

const mapDispatchToProps = { updateSchedule };

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
