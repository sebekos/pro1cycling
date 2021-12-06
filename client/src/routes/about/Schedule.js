import React from "react";
import { Table, Bar } from "components";

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
      <Bar title="UPCOMING RACES" />
      <Table rows={cdata} />
    </div>
  );
};

export default Schedule;
