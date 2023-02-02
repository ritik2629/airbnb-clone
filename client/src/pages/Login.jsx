import React from "react";

export const Login = () => {
  return (
    <div className="p-4 mt-2">
        <h1 className=" text-4xl text-center">Login</h1>
      <form className=" max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
          />
          <input
            type="password"
            placeholder="enter your password"
          />
          <button>Login</button>
      </form>
    </div>
  );
};
