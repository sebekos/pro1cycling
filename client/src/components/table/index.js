import React from "react";

// eslint-disable-next-line
import styles from "./styles.scss";

const index = ({ rows, max }) => {
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <th>Dates</th>
          <th>Race</th>
          <th>Location</th>
          <th>Results</th>
        </tr>
        {rows.map((o) => (
          <tr>
            <td>
              {o.startDate} - {o.endDate}
            </td>
            <td>{o.name}</td>
            <td>{o.location}</td>
            <td>{o.results}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default index;
