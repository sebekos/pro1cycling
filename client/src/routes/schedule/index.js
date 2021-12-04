import React from "react";
import { Cover, Sponsors, Table, Bar } from "components";
import TeamImg from "img/team.jpg";

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

const index = () => {
  return (
    <div>
      <Cover text="TEAM" src={TeamImg} />
      <Bar title="RACE SCHEDULE" />
      <Table rows={cdata} />
      <Sponsors />
    </div>
  );
};

export default index;
