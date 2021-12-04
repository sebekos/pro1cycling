import React from "react";

const cdata = [
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-title">UPCOMING RACES</div>
      <div className="schedule">
        {cdata.map((o) => (
          <div className="schedule-item-container">
            <div>{o.name}</div>
            <div>{o.startDate}</div>
            <div>{o.endDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
