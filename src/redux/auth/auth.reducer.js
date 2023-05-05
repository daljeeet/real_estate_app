import {
  LOGIN_USER_LOADING,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
  LOGOUT_USER_LOADING,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  RESET_DATA} from "./auth.action.type";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  login_loading: false,
  login_error: false,
  userData: user,
  signup_loading: false,
  signup_error: false,
  isAuth: user ? true : false,
  signup_success: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_LOADING: {
      return { ...state, login_loading: true, login_error: false };
    }
    case LOGIN_USER_ERROR: {
      return { ...state, login_loading: false, login_error: true };
    }
    case LOGIN_USER_SUCCESS: {
      let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      let userExists = allUsers.filter((el) => {
        if (el.email === payload.email && el.password === payload.password) {
          return true;
        } else {
          return false;
        }
      });
      if (userExists.length > 0) {
        localStorage.setItem("user", JSON.stringify(userExists[0]));
        return {
          ...state,
          login_loading: false,
          login_error: false,
          isAuth: true,
          userData: userExists[0],
        };
      } else {
        return {
          ...state,
          login_loading: false,
          login_error: true,
          isAuth: false,
          userData: null,
        };
      }
    }
    case SIGNUP_USER_LOADING: {
      return {
        ...state,
        signup_loading: false,
        signup_error: false,
        signup_success: false,
      };
    }
    case SIGNUP_USER_ERROR: {
      return {
        ...state,
        signup_loading: false,
        signup_error: true,
        signup_success: false,
      };
    }
    case SIGNUP_USER_SUCCESS: {
      let id = Date.now();
      let data = { ...payload, id };
      let allUsers =
        JSON.parse(localStorage.getItem("allUsers", JSON.stringify(data))) ||
        [];
      allUsers.push(data);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
      return {
        ...state,
        signup_loading: false,
        signup_error: false,
        signup_success: true,
      };
    }
    case LOGOUT_USER_LOADING: {
      return { ...state };
    }
    case LOGOUT_USER_SUCCESS: {
      localStorage.removeItem("user");
      return { ...state, isAuth: false, userData: null };
    }
    case LOGOUT_USER_ERROR: {
      return { ...state };
    }

    case RESET_DATA: {
      return {
        ...state,
        login_loading: false,
        login_error: false,
        signup_loading: false,
        signup_error: false,
        signup_success: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
