import {LOGIN_USER_LOADING,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    SIGNUP_USER_LOADING,
    SIGNUP_USER_ERROR,
    SIGNUP_USER_SUCCESS,
    LOGOUT_USER_LOADING,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCESS} from './user.action.type'

    export const loginUser = (data)=>async(dispatch)=>{
        dispatch({type:LOGIN_USER_LOADING})
        try{
            dispatch({type:LOGIN_USER_SUCCESS,payload:data})
        }catch(err){
            dispatch({type:LOGIN_USER_ERROR})
        }
    }

    export const registerUser = (data)=>async(dispatch)=>{
        dispatch({type:SIGNUP_USER_LOADING})
        try{
            dispatch({type:SIGNUP_USER_SUCCESS,payload:data})
        }catch(err){
            dispatch({type:SIGNUP_USER_ERROR})
        }

    }

    export const logoutUser = ()=>async(dispatch)=>{
        dispatch({type:LOGOUT_USER_LOADING})
        try{
            dispatch({type:LOGOUT_USER_SUCCESS})
        }catch(err){
            dispatch({type:LOGOUT_USER_ERROR})
        }
    }