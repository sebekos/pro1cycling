import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTeam } from "reduxStore";
import { uuid } from "utils";

// eslint-disable-next-line
import styles from "./styles.scss";

const Members = ({ loadTeam, loading, team }) => {
  useEffect(() => {
    loadTeam();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="member-container">
      {team.map((o) => (
        <div className="member">
          <div className="member-info">
            <div>
              {o.firstName} {o.lastName}
            </div>
            <div>{o.title}</div>
            <div>{o.info}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.team.team,
  loading: state.team.loading,
});

const mapDispatchToProps = {
  loadTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
