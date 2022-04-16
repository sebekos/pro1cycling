import React from "react";
import AddSchedule from "./AddSchedule";
import Schedule from "./Schedule";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const index = ({ isAuth }) => {
  if (!isAuth) return <Navigate to="/login" />;
  return (
    <div style={{ paddingTop: 100 }}>
      <AddSchedule />
      <Schedule />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(index);
