import React from "react";
import { Cover, Sponsors, Bar, Grid, List } from "components";
import TeamImg from "img/team.jpg";
import Avatar from "img/avatar.jpg";

const members = [
  {
    firstName: "Wojciech",
    lastName: "Kosela",
    title: "CEO",
    avatar_link: Avatar,
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

const cdata = [
  {
    title: "news media 1",
    text: "askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa",
    date: "2021-11-10",
  },
  {
    title: "news media 1",
    text: "askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa",
    date: "2021-11-10",
  },
  {
    title: "news media 1",
    text: "askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa",
    date: "2021-11-10",
  },
  {
    title: "news media 1",
    text: "askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa",
    date: "2021-11-10",
  },
  {
    title: "news media 1",
    text: "askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa askmk klmlkmkl klmckmsacsa lk;l; klckas;lkcascas csacc cs scs casa",
    date: "2021-11-10",
  },
];

const index = () => {
  return (
    <div>
      <Cover text="NEWS/MEDIA" src={TeamImg} />
      <Bar title="NEWS/MEDIA" />
      <List data={cdata} />
      <Grid data={members} />
      <Sponsors />
    </div>
  );
};

export default index;
