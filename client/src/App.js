import React, { useEffect } from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { loadUser } from "./reduxStore/actions/auth";
import store from "./reduxStore/store/store";
import "./App.css";

// Routes
import { Menu, Footer } from "./components";

import { About, Team, Schedule, News, Partners, Contact } from "./routes";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/newsmedia" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Navigate to="/home" /> */}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
