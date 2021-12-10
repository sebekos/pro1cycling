import React, { useEffect } from "react";
import { Cover, Sponsors, Bar, Grid } from "components";
import { connect } from "react-redux";
import { loadTeam } from "reduxStore";
import TeamImg from "img/team.jpg";

const Team = ({ loadTeam, team, loading, firstLoad }) => {
  useEffect(() => {
    !firstLoad && loadTeam();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Cover text="TEAM" src={TeamImg} />
      <Bar
        title="TEAM"
        // text={`Stage wins in the Tour of Utah and Tour of Normandie, overall wins at
        // Cascade Cycling Classic, Redlands, and the grueling Tour de Beauce.
        // Multiple wins at Speed Week and a clean sweep at the Tour of Southern
        // Highlands. Whether we’re in the U.S. or Europe, stage races or crits, we
        // show up.`}
      />
      <Grid data={team} loading={loading} />
      <Sponsors />
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.team.team,
  loading: state.team.loading,
  firstLoad: state.team.firstLoad,
});

const mapDispatchToProps = {
  loadTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
