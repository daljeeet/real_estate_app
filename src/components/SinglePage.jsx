// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProperty } from "../redux/properties/property.action";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const SinglePage = () => {
 const [isLiked, setIsLiked] = useState(false);
 const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    dispatch(getSingleProperty(id));
  }, [id, dispatch]);
  const PropData = useSelector((val) => val?.property?.propertyData);
  useEffect(()=>{
    if(PropData){
        setData(PropData[0])
    }
  },[PropData])
  return (
    <>
      <div className="flex justify-between items-center w-11/12 m-auto">
        <div className="">
          <img src={data?.image} alt="Property image" />
        </div>
        <div className="w-1/3 px-4">
            <div className="flex justify-between items-center w-1/2">
          <h4 className="font-semibold my-2 text-2xl">{data?.title}</h4>    
         {isLiked?<AiFillHeart className="text-3xl cursor-pointer text-blue-400" onClick={()=>setIsLiked(false)} />:<AiOutlineHeart className="text-3xl cursor-pointer" onClick={()=>setIsLiked(true)} />}
        </div>
            <div className="py-2">
          <p className="text-xl">
            Address: <span className="font-semibold">{data?.address}</span>
          </p>
          <p> City: <span className="font-semibold">{data?.location}</span></p>
          <h3>
            Price: <span className="font-semibold">₹{data?.price}</span>
          </h3>
          <p className="my-2">
            Type: <span className="font-semibold">{data?.type}</span>
          </p>
          <p className="my-2">
            By: <span className="font-semibold">{data?.author}</span>
          </p>
          <div className="flex justify-between items-center w-3/4">
            <button className="border-2 border-blue-300 px-4 py-1 rounded-md my-2 hover:bg-blue-400 hover:text-white">Book Now</button>
            <button className="border-2 border-blue-300 px-4 py-1 rounded-md my-2 hover:bg-blue-400 hover:text-white">Contect Seller</button>
          </div>
          </div>
        </div>
      </div>
      <div className="my-6 w-11/12 m-auto">
        <p className="font-semibold">About Property:</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default SinglePage;
