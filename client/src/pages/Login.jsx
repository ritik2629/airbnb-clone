import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center min-h-screen justify-center ">
      <div className="mb-64">
        <h1 className=" text-4xl text-center font-semibold">Login</h1>
        <form className=" max-w-md mx-auto mt-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="focus:border-primary outline-none"
          />
          <input
            type="password"
            placeholder="enter your password"
            className="focus:border-primary outline-none"
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
