import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Account = () => {

  const { user ,setUser} = useContext(UserContext);
  let { subpage } = useParams();
  const navigate=useNavigate()
  //   console.log(subpage);
  if (subpage === undefined) {
    subpage = "profile";
  }

  function isActive(type = null) {
    let classes = " py-2 px-6 ";
    if (type == subpage) {
      classes += " rounded-full bg-primary text-white";
    }
    return classes;
  }

  async function logout(){
   await axios.post('/logout')
   navigate('/')
   setUser(null)
  }

  return (
    <div>
      <nav className=" flex justify-center w-full mt-4 gap-3 mb-8">
        <Link to="/account" className={isActive("profile")}>
          My Profile
        </Link>
        <Link to="/account/bookings" className={isActive("bookings")}>
          My Bookings
        </Link>
        <Link to="/account/places" className={isActive("places")}>
          My accomodation
        </Link>
      </nav>
      {subpage === "profile" ? (
        <div className=" text-center max-w-lg mx-auto">
          Logged in as {user.data.name} ({user.data.email})<br/>
          <button onClick={logout} className="primary mt-3 max-w-sm">Logout</button>
        </div>
      ) : null}
    </div>
  );
};
