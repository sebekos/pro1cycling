import React from "react";
import { Cover, Sponsors, Bar } from "components";
import TeamImg from "img/team.jpg";

const index = () => {
  return (
    <div>
      <Cover text="PARTNERS" src={TeamImg} />
      <Bar title="PARTNERS" />
      <Sponsors />
    </div>
  );
};

export default index;
