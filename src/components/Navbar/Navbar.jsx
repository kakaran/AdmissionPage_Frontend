import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/image.svg";
const Navbar = () => {
  const navigate = useNavigate();

  const logoutSubimit = () => {
    try {
      localStorage.removeItem("auth");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between align-middle p-4 max-w-screen items-center">
      <div className="flex justify-between gap-5 align-middle items-center">
        <img src={image} alt="" width="50px" height="50px" />
        <p className="text-[#9a031e]">SGTBIMIT</p>
      </div>
      <button className="button-7" onClick={() => logoutSubimit()}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
