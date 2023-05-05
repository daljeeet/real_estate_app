import React from 'react'
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeSeller } from "../redux/user/user.action";

const SellerCard = ({data}) => {
    const dispatch = useDispatch();
    const deleteSeller = (id)=>{
      dispatch(removeSeller(id))
    }
  return (
    <div className='p-4 relative my-4'>
    <AiOutlineClose className='absolute right-[5%] top-[10%] cursor-pointer' onClick={()=>deleteSeller(data.id)}/>
  <p>Name: <span>{data.seller}</span> </p>
  <p>Email: <span>{data.seller_email}</span> </p>
  </div>
  )
}

export default SellerCard