import {
    CONTACT_SELLER_LOADING,
    CONTACT_SELLER_ERROR,
    CONTACT_SELLER_SUCCESS,
    ADD_WISHLIST_LOADING,
    ADD_WISHLIST_ERROR,
    ADD_WISHLIST_SUCCESS,
    REMOVE_WISHLIST_LOADING,
    REMOVE_WISHLIST_ERROR,
    REMOVE_WISHLIST_SUCCESS,
    GET_SELLER_LOADING,
    GET_SELLER_ERROR,
    GET_SELLER_SUCCESS,
    GET_WISHLIST_LOADING,
    GET_WISHLIST_ERROR,
    GET_WISHLIST_SUCCESS,
    REMOVE_SELLER_LOADING,
REMOVE_SELLER_ERROR,
REMOVE_SELLER_SUCCESS,
  } from "./user.action.type";
import { addtoWishlistApi, contactSellerApi, getSellersApi, getWishlistApi, removeFromWishlistApi, removeSellerApi } from './user.api'

export const addtoWishlist = (data)=>async(dispatch)=>{
    dispatch({type:ADD_WISHLIST_LOADING})
    try{
        await addtoWishlistApi(data);
        dispatch({type:ADD_WISHLIST_SUCCESS,payload:data})
    }catch(err){
        dispatch({type:ADD_WISHLIST_ERROR,payload:err.message})
    }
    
}
export const removeFromWishlist = (id)=>async(dispatch)=>{
    dispatch({type:REMOVE_WISHLIST_LOADING})
    try{
        await removeFromWishlistApi(id)
        dispatch({type:REMOVE_WISHLIST_SUCCESS,payload:id})
    }catch(err){
        dispatch({type:REMOVE_WISHLIST_ERROR,payload:err.message})
    }    
}

export const contactSeller = (data)=>async(dispatch)=>{
    dispatch({type:CONTACT_SELLER_LOADING})
    try{
        let res = await contactSellerApi(data)
        dispatch({type:CONTACT_SELLER_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:CONTACT_SELLER_ERROR})
    }
}

export const removeSeller = (id)=>async(dispatch)=>{
    dispatch({type:REMOVE_SELLER_LOADING})
    try{
        removeSellerApi(id)
        dispatch({type:REMOVE_SELLER_SUCCESS,payload:id})
    }catch(err){
        dispatch({type:REMOVE_SELLER_ERROR})
    }
}

export const  getSellers = (id)=>async(dispatch)=>{
    dispatch({type:GET_SELLER_LOADING})
    try{
        let res = await getSellersApi(id)
        dispatch({type:GET_SELLER_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_SELLER_ERROR})
    }
}

export const getWishlist = (id)=>async(dispatch)=>{
    dispatch({type:GET_WISHLIST_LOADING})
    try{
        let res = await getWishlistApi(id)
        dispatch({type:GET_WISHLIST_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_WISHLIST_ERROR})
    }
}