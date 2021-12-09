import React, { useEffect } from "react";
import { Table, Bar } from "components";
import { connect } from "react-redux";
import { loadSchedule } from "reduxStore";

const Schedule = ({ loadSchedule, schedule, firstLoad }) => {
  useEffect(() => {
    !firstLoad && loadSchedule();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="schedule-container">
      <Bar title="UPCOMING RACES" />
      <Table rows={schedule} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
  firstLoad: state.schedule.firstLoad,
});

const mapDispatchToProps = {
  loadSchedule,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
