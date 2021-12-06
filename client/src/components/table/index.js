import React from "react";
import { uuid } from "utils";

// eslint-disable-next-line
import styles from "./styles.scss";

const index = ({ rows, max }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Dates</th>
            <th>Race</th>
            <th>Location</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((o) => (
            <tr key={uuid()}>
              <td>
                {o.startDate} - {o.endDate}
              </td>
              <td>{o.name}</td>
              <td>{o.location}</td>
              <td>{o.results}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
