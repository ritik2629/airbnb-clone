import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { UserContextProvider } from "./context/userContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.withCredentials=true
export const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};
