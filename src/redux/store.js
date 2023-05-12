
import {configureStore} from "@reduxjs/toolkit"
import boardSlice from "./reducer.js"
const store =configureStore({
    reducer:{
    board:boardSlice,
    }
})

export default store;