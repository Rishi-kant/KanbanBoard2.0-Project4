
import {createSlice} from "@reduxjs/toolkit"

// const initialState=[]
const boardSlice=createSlice({
    name:"board",
    initialState:[],
    reducers: {
        addColumn(state,action){
            const{title}=action.payload
            state.push({title})
        }
    }
})
export const{addColumn}=boardSlice.actions
export default boardSlice.reducer
