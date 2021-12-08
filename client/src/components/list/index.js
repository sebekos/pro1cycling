import React from "react";
import { uuid } from "utils";
import moment from "moment";
import { Loader } from "components";

// eslint-disable-next-line
import styles from "./styles.scss";

const index = ({ data, loading }) => {
  return (
    <div className="list-container">
      <div className="list">
        {loading ? (
          <Loader />
        ) : (
          data.map((o) => (
            <div key={uuid()} className="listitem">
              <div className="list-title">{o.title}</div>
              <div className="list-text">{o.text}</div>
              <div className="list-date">
                {moment(o.date, "YYYY-MM-DD").format("l")}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default index;
