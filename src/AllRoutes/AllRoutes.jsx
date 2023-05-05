// import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import Dashbord from '../pages/Dashbord'
import SinglePage from '../pages/SinglePage'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[80px] w-11/12 m-auto '>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashbord" element={ <PrivateRoute><Dashbord/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/property/:id" element={ <PrivateRoute><SinglePage/></PrivateRoute>}/>
        <Route path="dashbord/property/:id" element={ <PrivateRoute><SinglePage/></PrivateRoute>}/>
    </Routes>
      </div>
    </div>
  )
}

export default AllRoutes