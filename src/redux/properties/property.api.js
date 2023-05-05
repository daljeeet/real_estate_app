/* eslint-disable no-useless-catch */
import axios from 'axios'
const baseUrl = "http://localhost:5000"
export const getPropertiesApi = async()=>{
    try{
        let res = await axios.get(`${baseUrl}/property`)
        return res
    }catch(err){
        throw err
    }
}

export const getSinglePropertyApi = async(id)=>{
    try{
        let res = await axios.get(`${baseUrl}/property?id=${id}`)
        return res
    }catch(err){
        throw err
    }
}

export const getSearchedDataApi = async(data)=>{
    try{
        let res = await axios.get(`${baseUrl}/property?${data.srchtype}=${data.srchText}`)
        return res
    }catch(err){
        throw err
    }
}