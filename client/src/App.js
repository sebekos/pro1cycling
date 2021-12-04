import React, { useEffect } from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { loadUser } from "./reduxStore/actions/auth";
import store from "./reduxStore/store/store";
import "./App.css";

// Routes
import { Menu, Footer } from "./components";

import { Team, Schedule } from "./routes";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Team />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        {/* <Navigate to="/home" /> */}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
