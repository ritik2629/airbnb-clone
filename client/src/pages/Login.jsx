import axios from "axios";
import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Login = () => {

  const navigate=useNavigate()
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const {setUser}=useContext(UserContext)

  const loginUser = async (e) => {
    e.preventDefault();
    try{
      const userInfo=await axios.post("/login", {
        email: state.email,
        password: state.password,
      });
      setUser(userInfo);
      alert('login succesfull')
      navigate('/')

      console.log(state);
    }catch(e){
      alert(e.message)
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center ">
      <div className="mb-64">
        <h1 className=" text-4xl text-center font-semibold">Login</h1>
        <form className=" max-w-md mx-auto mt-4" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            className="focus:border-primary outline-none"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="focus:border-primary outline-none"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <button className="primary">Login</button>
          <div className="text-center mt-2 text-gray-600">
            Dont'have a account?
            <Link
              to="/register"
              className=" font-semibold ml-1 text-black underline"
            >
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
