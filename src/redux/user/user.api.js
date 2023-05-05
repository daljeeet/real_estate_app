import axios from "axios"

const baseUrl = "http://localhost:5000"
export const getSellersApi = async(id)=>{
    try{
        let res = await axios.get(`${baseUrl}/contacted_sellers?user_id=${id}`);
        return res
    }catch(err){
        throw err
    }
}

export const contactSellerApi = async(data)=>{
    try{
        let res = await axios.post(`${baseUrl}/contacted_sellers`,data);
        return res
    }catch(err){
        throw err
    }
}
export const getWishlistApi = async()=>{
    try{
        let res = await axios.get(`${baseUrl}/wishlist`);
        return res
    }catch(err){
        throw err
    }
} 


export const addtoWishlistApi = async(data)=>{
    try{
        let res = await axios.post(`${baseUrl}/wishlist`,data)
        return res
    }catch(err){
        throw err
    }}


export const removeFromWishlistApi = async(id)=>{
    try{
        let res = await axios.delete(`${baseUrl}/wishlist/${id}`)
        return res
    }catch(err){
        throw err
    }
}

export const removeSellerApi = async(id)=>{
    try{
        let res = await axios.delete(`${baseUrl}/contacted_sellers/${id}`)
        return res
    }catch(err){
        throw err
    }
}