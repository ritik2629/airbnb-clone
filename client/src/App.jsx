import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};
