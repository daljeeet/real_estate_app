// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProperty } from "../redux/properties/property.action";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { addtoWishlist, contactSeller, removeFromWishlist } from "../redux/user/user.action";


const SinglePage = () => {
 const [isLiked, setIsLiked] = useState(false); 
 const {userData} =  useSelector(val=>val.auth)
 const {wishlistArr,sellerHistory} = useSelector(val=>val.user)
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    dispatch(getSingleProperty(id));
  }, [id]);
  const {propertyData} = useSelector((val) => val?.property);
  useEffect(()=>{
    if(propertyData){
        setData(propertyData[0])
    }
  },[propertyData])

  useEffect(()=>{
    wishlistArr.forEach((el)=>{
        if(el.id==id){
          setIsLiked(true)
        }
      })
  },[wishlistArr.length])

  const handleContactSeller = (data)=>{
    let authorData = {user_id:userData.id ,seller:data.author, seller_email:data.email,id:Date.now()};
    let userExists = sellerHistory.filter(el=>{
      if(el.email==authorData.email){
        return true
      }else{
        return false
      }
    })
    if(userExists.length===0){
      dispatch(contactSeller(authorData))
    }
  let url = `https://mail.google.com/mail/?view=cm&to=${data.email}`
  window.open(url,"_blank")
  }
  const addWishList = (data)=>{
    setIsLiked(true)
    dispatch(addtoWishlist({...data, user_id:userData.id}))
  }
  const removeWishList = (data)=>{
    setIsLiked(false)
    dispatch(removeFromWishlist(data.id))
  }
  return ( 
    <>
      <div className="flex justify-between items-center w-11/12 m-auto">
        <div className="">
          <img src={data?.image} alt="Property image" />
        </div>
        <div className="w-1/3 px-4">
            <div className="flex justify-between items-center w-1/2">
          <h4 className="font-semibold my-2 text-2xl">{data?.title}</h4>    
         {isLiked?<AiFillHeart className="text-3xl cursor-pointer text-blue-400" onClick={()=>removeWishList(data)} />:<AiOutlineHeart className="text-3xl cursor-pointer" onClick={()=>addWishList(data)} />}
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
            <button onClick={()=>handleContactSeller(data)} className="border-2 border-blue-300 px-4 py-1 rounded-md my-2 hover:bg-blue-400 hover:text-white">Contect Seller</button>
          </div>
          </div>
        </div>
      </div>
      <div className="my-6 w-11/12 m-auto">
        <p className="font-semibold">Property Details:</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default SinglePage;
