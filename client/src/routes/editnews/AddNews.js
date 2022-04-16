import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input, GenericButton } from "components";
import { updateNews } from "reduxStore";
import { v4 } from "uuid";

// eslint-disable-next-line
import styles from "./styles.scss";

const AddMember = ({ errors, error_id, loading, updateNews, refresh }) => {
  const [form, setForm] = useState({
    date: "",
    title: "",
    text: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => updateNews(form);

  const { date, title, text } = form;

  useEffect(() => {
    setForm({
      date: "",
      title: "",
      text: "",
    });
  }, [refresh]);

  return (
    <div className="editnews-container">
      <div className="editnews">
        <div className="editnews-title">Add News</div>
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
        <div style={{ display: "flex" }}>
          <Input
            name="date"
            type="date"
            placeholder="Date"
            value={date}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "date")}
          />
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChange}
            error={errors && errors.find((o) => o.param === "title")}
          />
        </div>
        <textarea
          name="text"
          type="text"
          placeholder="Text"
          value={text}
          onChange={onChange}
          error={errors && errors.find((o) => o.param === "text")}
          rows="10"
          style={{ marginBottom: 10 }}
        />
        <GenericButton disabled={loading} label="Submit" onClick={onSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.news.loading,
  errors: state.news.errors,
  error_id: state.news.error_id,
  refresh: state.news.refresh,
});

const mapDispatchToProps = { updateNews };

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
