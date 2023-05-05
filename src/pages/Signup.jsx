import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser, resetData } from "../redux/auth/auth.action";

const Signup = () => {
  const [userData, setUserData] = useState({email:"",name:"",password:""})
  const {isAuth,signup_success} =  useSelector(val=>val.auth)
  const dispatch = useDispatch()
  let nav = useNavigate()
  useEffect(()=>{
    if(isAuth){
      nav("/")
    }
    if(signup_success){
      alert("signup Successful. Login Now")
      nav("/login")
    }
    return ()=>{
      dispatch(resetData())
    }
  },[isAuth,nav,signup_success,dispatch])
  const handleChange = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value});
  }
  const handleRegister = (e)=>{
    e.preventDefault()
    dispatch(registerUser(userData))
  }
  return (
      <div className="m-auto pt-6 md:w-[60%]">
        <h4 className="mb-10 text-center text-xl font-bold">Register Here:</h4>
        <form className="border-2 flex flex-col p-10 w-[80%] m-auto" onSubmit={handleRegister}>
          <label
            className="border-[1px] border-gray-500 rounded-md my-2 p-2"
            htmlFor="name"
          >
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="mx-2 outline-none"
              onChange={handleChange}
              value={userData.name}
            />
          </label>
          <label
            className="border-[1px] border-gray-500 rounded-md my-2 p-2"
            htmlFor="email"
          >
            Email
            <input
              type="text"
              id="email"
              name="email"
              placeholder="user@example.com"
              className="mx-2 outline-none"
              onChange={handleChange}
              value={userData.email}
            />
          </label>
          <label
            className="border-[1px] border-gray-500 rounded-md my-2 p-2"
            htmlFor="password"
          >
            Password
            <input
              type="password"
              id="password"
              placeholder="Create password"
              className="mx-2 outline-none"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
          <input
            type="submit"
            value={"Register"}
            className="border-[1px] border-blue-400 w-fit px-4 rounded-md py-2 mt-3 hover:text-white hover:bg-blue-400 cursor-pointer"
          />
          <p className="text-center">Already a user?
            <span><NavLink to="/login" className={"text-blue-500 hover:underline mx-1"}>login here</NavLink>
            </span>
          </p>
        </form>
      </div>
  );
};

export default Signup;
