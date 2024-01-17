import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import register from "./register";

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    register
})

export default reducer