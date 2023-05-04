// import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProperties } from "../redux/properties/property.action"
import Card from "../components/Card"

const Home = () => {
 const {get_loading, get_error, properties} =  useSelector(val=>val.property)
//  console.log(properties)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProperties()) 
  },[dispatch])
  return (
    <div className="mt-10">
      <h3 className="text-center text-xl font-bold">All Available Properties:</h3>
      <h4 className="text-xl text-center font-bold">{get_loading&&"Loading...."}</h4>
      <h4 className="text-xl text-red-500 text-center font-bold">{get_error&&"Something Went Wrong !"}</h4>
      <div className="grid md:grid-cols-4 gap-5">
      {properties.map((el)=><Card key={el.id} data={el} />)}
      </div>
    </div>
  )
}

export default Home