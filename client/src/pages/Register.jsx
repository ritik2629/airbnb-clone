import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    // axios.get('/test')
    try {
      await axios.post("/register", {
        name: state.name,
        email: state.email,
        password: state.password,
      });
      console.log(state);
      alert("Registration successfull you can login now");
    } catch (e) {
      alert("Registration failed", e);
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center ">
      <div className="mb-64">
        <h1 className=" text-4xl text-center font-semibold">Register</h1>
        <form className=" max-w-md mx-auto mt-4" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Ritik Raj"
            className="focus:border-primary outline-none"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            // value={name}
            // onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="focus:border-primary outline-none"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            // value={email}
            // onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="focus:border-primary outline-none"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="primary">Create Account</button>
        </form>
        <div className="text-center mt-2 text-gray-600">
          Already a memeber ?
          <Link
            to="/login"
            className=" font-semibold ml-1 text-black underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
