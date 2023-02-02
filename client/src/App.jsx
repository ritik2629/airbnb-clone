import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

axios.defaults.baseURL='http://localhost:8080'
export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};
