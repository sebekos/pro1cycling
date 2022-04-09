import React, { useEffect } from "react";
import { Table, Bar } from "components";
import { connect } from "react-redux";
import { loadSchedule } from "reduxStore";
import moment from "moment";

const Schedule = ({ loadSchedule, schedule, firstLoad, loading }) => {
  useEffect(() => {
    !firstLoad && loadSchedule();
    // eslint-disable-next-line
  }, []);

  var cSchedule = schedule.filter((o) =>
    moment(o.endDate, "YYYY-MM-DD").isSameOrAfter(moment(), "day")
  );

  return (
    <div className="schedule-container">
      <Bar title="UPCOMING RACES" />
      <Table rows={cSchedule} loading={loading} maxCols={3} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
  firstLoad: state.schedule.firstLoad,
  loading: state.schedule.loading,
});

const mapDispatchToProps = {
  loadSchedule,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
