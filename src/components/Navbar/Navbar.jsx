import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const logoutSubimit = () => {
    try {
      localStorage.removeItem("auth")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-between align-middle p-4 items-center">
      <div className="flex justify-between gap-10 align-middle items-center">
        Image Logo
        <p className="text-[#9a031e]">SGTBIMIT</p>
      </div>
      <button className="button-7" onClick={() => logoutSubimit()}>Logout</button>
    </div>
  );
};

export default Navbar;
