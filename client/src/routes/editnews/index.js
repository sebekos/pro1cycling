import React from "react";
import AddNews from "./AddNews";
import News from "./News";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const index = ({ isAuth }) => {
  if (!isAuth) return <Navigate to="/login" />;
  return (
    <div style={{ paddingTop: 100 }}>
      <AddNews />
      <News />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(index);
