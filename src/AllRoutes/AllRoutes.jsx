// import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import Dashbord from '../pages/Dashbord'
import SinglePage from '../components/SinglePage'
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[70px] w-11/12 m-auto '>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashbord" element={<Dashbord/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/property/:id" element={<SinglePage/>}/>
    </Routes>
      </div>
    </div>
  )
}

export default AllRoutes