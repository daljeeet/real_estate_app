import {GET_ALL_PROPERTIES_LOADING,
    GET_ALL_PROPERTIES_ERROR,
    GET_ALL_PROPERTIES_SUCCESS,
    GET_SINGLE_PROPERTY_LOADING,
    GET_SINGLE_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_ERROR} from './property.action.type'
import { getPropertiesApi,getSinglePropertyApi } from './property.api'

export const getProperties = ()=>async(dispatch)=>{
    dispatch({type:GET_ALL_PROPERTIES_LOADING})
    try{
        let res = await getPropertiesApi()
        dispatch({type:GET_ALL_PROPERTIES_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_ALL_PROPERTIES_ERROR})
    }
}

export const getSingleProperty = (id)=>async(dispatch)=>{
    dispatch({type:GET_SINGLE_PROPERTY_LOADING})
    try{
        let res = await getSinglePropertyApi(id);
        dispatch({type:GET_SINGLE_PROPERTY_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_SINGLE_PROPERTY_ERROR})
    }
}