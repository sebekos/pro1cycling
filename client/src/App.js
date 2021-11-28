import React, { useEffect } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { loadUser } from "./reduxStore/actions/auth";
import store from "./reduxStore/store/store";
import "./App.css";

// Routes
import { Menu } from "./components";

import { Team, Schedule } from "./routes";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={Team} />
          <Route exact path="/schedule" element={Schedule} />
        </Routes>
        {/* <Navigate to="/home" /> */}
      </Router>
    </Provider>
  );
};

export default App;
