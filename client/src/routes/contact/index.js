import React from "react";
import { Cover, Sponsors, Bar } from "components";
import TeamImg from "img/team.jpg";

const index = () => {
  return (
    <div>
      <Cover text="CONTACT" src={TeamImg} />
      <Bar title="CONTACT" />
      <Sponsors />
    </div>
  );
};

export default index;
