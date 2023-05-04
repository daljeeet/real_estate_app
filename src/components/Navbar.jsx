// import React from 'react'

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md py-4 fixed top-0 left-0 right-0 bg-white font-semibold h-[65px]">
      <div className="w-5/6 m-auto flex justify-between" >
        <div className="w-1/3 flex justify-around" >
          <NavLink to={'/'} >Home</NavLink >
          <NavLink to={'/dashbord'} >Dashbord</NavLink >
        </div>
        <div className="w-1/4 flex items-center justify-around">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signup"}>Signup</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
