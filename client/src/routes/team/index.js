import React from "react";
import { Cover, Sponsors, Bar, Grid } from "components";
import TeamImg from "img/team.jpg";
import Avatar from "img/avatar.jpg";

const members = [
  {
    firstName: "Wojciech",
    lastName: "Kosela",
    title: "CEO",
    avatar_link: Avatar,
    hoverInfo:
      "This guy runs the company. He got a real estate business. House in poland.",
  },
  {
    firstName: "Andzje",
    lastName: "Something",
    title: "Coach",
    avatar_link: Avatar,
  },
  {
    firstName: "David",
    lastName: "Kosela",
    title: "Junior 17-18",
    avatar_link: Avatar,
    hoverInfo:
      "This dudes smashes beeches. Kid can squat ur gramma on 3 pl8. You need tren, this guy is a pharmacy, yoyo",
  },
  {
    firstName: "David",
    lastName: "Kosela",
    title: "Junior 17-18",
    avatar_link: Avatar,
  },
  {
    firstName: "David",
    lastName: "Kosela",
    title: "Junior 17-18",
    avatar_link: Avatar,
  },
  {
    firstName: "David",
    lastName: "Kosela",
    title: "Junior 17-18",
    avatar_link: Avatar,
  },
];

const index = () => {
  return (
    <div>
      <Cover text="TEAM" src={TeamImg} />
      <Bar
        title="TEAM"
        text={`Stage wins in the Tour of Utah and Tour of Normandie, overall wins at
        Cascade Cycling Classic, Redlands, and the grueling Tour de Beauce.
        Multiple wins at Speed Week and a clean sweep at the Tour of Southern
        Highlands. Whether we’re in the U.S. or Europe, stage races or crits, we
        show up.`}
      />
      <Grid data={members} />
      <Sponsors />
    </div>
  );
};

export default index;
