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

const initialState = {
  user_action_laoding: false,
  user_aciton_error: false,
  sellerHistory: [],
  wishlistArr: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTACT_SELLER_LOADING: {
      return { ...state, user_action_laoding: false, user_aciton_error: false };
    }
    case CONTACT_SELLER_ERROR: {
      return { ...state, user_action_laoding: false, user_aciton_error: true };
    }
    case CONTACT_SELLER_SUCCESS: {
        return { ...state, user_action_laoding: false, user_aciton_error: false, sellerHistory:[...state.sellerHistory,payload] };
    }
    case REMOVE_SELLER_LOADING:{
      return {...state}
    }
case REMOVE_SELLER_ERROR:{
  return {...state}
}
case REMOVE_SELLER_SUCCESS:{
  let data = state.sellerHistory.filter((el)=>{
    if(el.id===payload){
      return false;
    }else{
      return true
    }
  })
  return {...state, sellerHistory:data}
}
    case ADD_WISHLIST_LOADING: {
      return { ...state };
    }
    case ADD_WISHLIST_ERROR: {
      return { ...state };
    }
    case ADD_WISHLIST_SUCCESS: {
      console.log(payload)
      return { ...state,wishlistArr:[payload,...state.wishlistArr] };
    }
    case REMOVE_WISHLIST_LOADING: {
      return { ...state }; 
    }
    case REMOVE_WISHLIST_ERROR: {
      return { ...state };
    }
    case REMOVE_WISHLIST_SUCCESS: {
      let data = state.wishlistArr.filter((el)=>{
        if(el.id===payload){
          return false;
        }else{
          return true;
        }
      })
      return { ...state, user_action_laoding: false,
        user_aciton_error: false,wishlistArr:data };
    }
    case GET_SELLER_LOADING: {
      return { ...state, user_action_laoding: true,
        user_aciton_error: false};
    }
    case GET_SELLER_ERROR: {
      return { ...state, user_action_laoding: false,
        user_aciton_error:true};
    }
    case GET_SELLER_SUCCESS: {
      return { ...state,sellerHistory:payload, user_action_laoding: false,
        user_aciton_error: false };
    }
    case GET_WISHLIST_LOADING: {
      return { ...state, user_action_laoding: true,
        user_aciton_error: false };
    }
    case GET_WISHLIST_ERROR: {
      return { ...state, user_action_laoding: false,
        user_aciton_error: true};
    }
    case GET_WISHLIST_SUCCESS: {
      return { ...state,wishlistArr:payload, user_action_laoding: false,
        user_aciton_error: false, };
    }
    default: {
      return { ...state };
    }
  }
};
