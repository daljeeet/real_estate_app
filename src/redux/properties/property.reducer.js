import {GET_ALL_PROPERTIES_LOADING,
    GET_ALL_PROPERTIES_ERROR,
    GET_ALL_PROPERTIES_SUCCESS,
    GET_SINGLE_PROPERTY_LOADING,
    GET_SINGLE_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_ERROR} from './property.action.type'


    const initialState = {
        get_loading:false,
        get_error:false,
        properties:[],
        propertyData:null,
    }

    export const propertyReducer = (state=initialState,{type,payload})=>{
        switch (type) {
            case GET_ALL_PROPERTIES_LOADING:{
                return {...state,get_loading:true,get_error:false}
            }
            case GET_ALL_PROPERTIES_SUCCESS:{
                return {...state, get_loading:false, get_error:false, properties:payload}
            }
            case GET_ALL_PROPERTIES_ERROR:{
                return {...state, get_loading:false, get_error:true}
            }
            case GET_SINGLE_PROPERTY_LOADING:{
                return {...state,get_loading:true,get_error:false}
            }
            case GET_SINGLE_PROPERTY_SUCCESS:{
                return {...state,get_loading:false,get_error:false,propertyData:payload}
            }
            case GET_SINGLE_PROPERTY_ERROR:{
                return{...state,get_loading:false,get_error:true}
            }
            default:{
                return {...state};
            }
        }
    }