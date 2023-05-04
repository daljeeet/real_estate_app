import {LOGIN_USER_LOADING,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    SIGNUP_USER_LOADING,
    SIGNUP_USER_ERROR,
    SIGNUP_USER_SUCCESS,
    LOGOUT_USER_LOADING,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCESS} from './user.action.type'


    const initialState = {
        login_loading:false,
        login_error:false,
        userData:null,
        signup_loading:false,
        signup_error:false,
        isAuth:false
    }

export const userReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN_USER_LOADING:{
            return{...state,login_loading:true,login_error:false}
        }
        case LOGIN_USER_ERROR:{
            return{...state,login_loading:false,login_error:true}
        }
        case LOGIN_USER_SUCCESS:{
            console.log(payload)
            return{...state, login_loading:false,login_error:false,isAuth:true,userData:payload}
        }
        case SIGNUP_USER_LOADING:{
            return{...state,signup_loading:false,signup_error:false}
        }
        case SIGNUP_USER_ERROR:{
            return{...state,signup_loading:false,signup_error:true}
        }
        case SIGNUP_USER_SUCCESS:{
            console.log(payload)
            return{...state,signup_loading:false,signup_error:false,userData:payload}
        }
        case LOGOUT_USER_LOADING:{
            return{...state}
        }
        case LOGOUT_USER_SUCCESS:{
            return {...state,isAuth:false}
        }
        case LOGOUT_USER_ERROR:{
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}