/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({data}) => {
    const [isAvl, setIsAvl] = useState(false);
    useEffect(()=>{
        if(data?.booked_by){
            setIsAvl(false)
        }else{
            setIsAvl(true)
        }
    },[data?.booked_by])
    const nav = useNavigate()
    const handleDetails = (data)=>{
    if(isAvl){
        nav(`property/${data.id}`)
    }
    }
  return (
    <div onClick={()=>handleDetails(data)} className={`shadow-md p-4 ${isAvl?"hover:shadow-lg cursor-pointer":"cursor-default"} rounded-md text-center`}>
        <h4 className='font-semibold my-2'>{data?.title}</h4>
        <img src={data?.image} alt="image" />
        <p >Address: <span className='font-semibold'>{data.address}</span></p>
        <p>({data.location})</p>
        <h3>Price: <span className='font-semibold'>₹{data.price}</span> </h3>
        <p className='my-2' >Type: <span className='font-semibold'>{data.type}</span> </p>
        <p className={`${isAvl?"text-green-800":"text-red-500"} font-semibold`} >{isAvl?"Available":"Not-Available"}</p>
    </div>
  )
}

export default Card