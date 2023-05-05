import { legacy_createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { combineReducers } from 'redux';
import { propertyReducer } from './properties/property.reducer';
import { authReducer } from './auth/auth.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({
    property:propertyReducer,
    auth:authReducer,
    user:userReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

