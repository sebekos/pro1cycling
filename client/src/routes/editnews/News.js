import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadNews, updateNews } from "reduxStore";
import { Input, GenericButton } from "components";
import { v4 } from "uuid";

// eslint-disable-next-line
import styles from "./styles.scss";

const EditSchedule = ({ news, errors, updateNews, loading, error_id }) => {
  const [form, setForm] = useState({
    id: news.id,
    date: news.date,
    title: news.title,
    text: news.text,
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = () => updateNews(form);

  const onDelete = () => updateNews({ ...form, deleted: 1 });

  const { id, date, title, text } = form;

  const isError = error_id === id;

  return (
    <div className="editnews-container">
      <div className="editnews">
        <div>
          {errors &&
            isError &&
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
            placeholder="Start Date"
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
          placeholder="Text"
          value={text}
          onChange={onChange}
          error={errors && errors.find((o) => o.param === "text")}
          rows="10"
        />
        <div style={{ marginTop: 10 }}>
          <GenericButton
            disabled={loading}
            label="Delete"
            onClick={onDelete}
            color="negative"
          />
          <GenericButton disabled={loading} label="Submit" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const Members = ({
  loadNews,
  loading,
  news,
  updateNews,
  refresh,
  errors,
  error_id,
}) => {
  useEffect(() => {
    loadNews();
    // eslint-disable-next-line
  }, [refresh]);

  const sortedNews = news.sort((a, b) => b.id - a.id);

  return (
    <div className="member-container">
      {sortedNews.map((o) => (
        <EditSchedule
          key={`editnews-${o.id}`}
          news={o}
          updateNews={updateNews}
          errors={errors}
          error_id={error_id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  loading: state.news.loading,
  refresh: state.news.refresh,
  errors: state.news.errors,
  error_id: state.news.error_id,
});

const mapDispatchToProps = {
  loadNews,
  updateNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
