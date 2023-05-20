import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./board.js";
import detailSlice from "./details.js";

import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
let persistConfig = {
  versions: 1,
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  board: boardSlice,
  detail: detailSlice,
});
let persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

