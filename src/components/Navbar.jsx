// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../redux/auth/auth.action";
import { useEffect, useState } from "react";
import { getSellers, getWishlist } from "../redux/user/user.action";
import { AiOutlineSearch } from "react-icons/ai";
import { getSearchedData } from "../redux/properties/property.action";

const Navbar = () => {
 const {isAuth,userData} =  useSelector(val=>val.auth)
 const {wishlistArr,sellerHistory} = useSelector(val=>val.user);
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState({srchText:"",srchtype:""})
  useEffect(()=>{
    if(isAuth){
      dispatch(getWishlist())
      dispatch(getSellers(userData?.id))
    }
  },[isAuth,wishlistArr.length,sellerHistory.length])
  const handleChange = (e)=>{
    setSearchData({...searchData, [e.target.name]:e.target.value})
  }
  const searchProperty = ()=>{
    dispatch(getSearchedData(searchData))
  }
  return (
    <div className="shadow-md py-4 fixed top-0 left-0 right-0 bg-white font-semibold h-[65px]">
      <div className="w-5/6 m-auto flex justify-between" >
        <div className="w-1/3 flex justify-around" >
          <NavLink to={'/'} >Home</NavLink >
          <NavLink to={'/dashbord'}>Dashbord</NavLink >
        </div>
        {/* Search Functionality */}
        <div className="w-full text-gray-600">
      <label htmlFor="search" className="border-2 w-1/2 m-auto border-gray-500 py-2 rounded-full px-2 flex justify-around items-center p-4">
      <input value={searchData.srchText} name="srchText" onChange={handleChange} type="search" id="search" placeholder="Search" className="outline-none"/>
      <select className="px-4 outline-none" name="srchtype" onChange={handleChange}>
        <option value="location">Location</option>
        <option value="type">Type</option>
        <option value="price">Price</option>
      </select>
      <AiOutlineSearch onClick={searchProperty} className="cursor-pointer text-xl"/>
      </label>
    </div>
        {!isAuth?<div className="w-1/4 flex items-center justify-around">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signup"}>Signup</NavLink>
        </div>:<div className="w-1/4 flex items-center justify-around">
          <p className="font-normal"> hello, <span className="font-semibold">{userData.name}</span> </p>
          <button onClick={()=>dispatch(logoutUser())} >Logout</button>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
