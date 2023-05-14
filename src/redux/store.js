
import {configureStore} from "@reduxjs/toolkit"
import boardSlice from "./reducer.js"
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
let persistConfig={
    key:"root",
    storage,
}
let rootReducer = combineReducers(
    {
        board:boardSlice,
        }
);
let persistedReducer=persistReducer(persistConfig,rootReducer)
const store =configureStore({
  reducer:persistedReducer
})

export default store;