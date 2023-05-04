import { useState } from "react"
import { NavLink } from "react-router-dom"
import { loginUser } from "../redux/user/user.action"
import { useDispatch } from "react-redux"

const Login = () => {
  const [userData, setUserData] = useState({email:"",password:""})
  const handleChange = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value})
  }
  const dispatch = useDispatch()
  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(loginUser(userData))
  }
  return (
    <div className="m-auto pt-6 md:w-[60%]">
      <h4 className="mb-10 text-center text-xl font-bold">Login Here:</h4>

      <form onSubmit={handleLogin} className="border-2 flex flex-col p-10 w-[80%] m-auto">
        <label className="border-[1px] border-gray-500 rounded-md my-2 p-2" htmlFor="email">Email
        <input required type="text" id="email" name="email" placeholder="user@example.com" className="mx-2 outline-none" value={userData.email} onChange={handleChange} />
        </label>
        <label className="border-[1px] border-gray-500 rounded-md my-2 p-2" htmlFor="password">Password
        <input required type="password" id="password" placeholder="password" className="mx-2 outline-none" name='password' value={userData.password} onChange={handleChange} />
        </label>
        <input type="submit" value={"Login"} className="border-[1px] mt-3 border-blue-400 w-fit px-4 rounded-md py-2 hover:text-white hover:bg-blue-400 cursor-pointer" />
      <p className="text-center"> Don&apos;t have Account? <span> <NavLink to="/signup" className={'text-blue-500 hover:underline mx-1'} >create-one</NavLink> </span> </p>
      </form>
    </div>
  )
}

export default Login