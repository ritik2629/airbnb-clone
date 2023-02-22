import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.withCredentials=true
export const App = () => {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<Account />} />
          <Route path="/account/:subpage/:action?" element={<Account />} />
          {/* <Route path="/account/bookings" element={<Account />} />
          <Route path="/account/places" element={<Account />} /> */}
        </Routes>
      </Router>
  );
};
