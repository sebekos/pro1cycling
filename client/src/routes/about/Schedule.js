import React from "react";
import { Table } from "components";

const cdata = [
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
  {
    name: "Tour of Southern Highlands",
    startDate: "2021-10-10",
    endDate: "2021-10-12",
    results: "Results...",
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-title">UPCOMING RACES</div>
      <div className="schedule">
        <Table rows={cdata} />
      </div>
    </div>
  );
};

export default Schedule;
