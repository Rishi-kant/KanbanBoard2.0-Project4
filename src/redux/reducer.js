
import {createSlice} from "@reduxjs/toolkit"

const initialState=[]
const boardSlice=createSlice({
    name:"board",
    initialState,
    reducers: {
        addColumn(state,action){
            state.unshift(action.payload)
        }
    }
})
export const{addColumn}=boardSlice.actions
export default boardSlice.reducer
