import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import conatctsReducer from "./Contacts/contacts-slice";
import filterReducer from "./Filter/filter-slice";
import authReducer from "./auth/auth-slice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
    auth: persistedReducer,
    contacts: conatctsReducer,
    filter: filterReducer,
})

export default rootReducer;