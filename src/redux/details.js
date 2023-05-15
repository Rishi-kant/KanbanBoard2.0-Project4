
import {createSlice} from "@reduxjs/toolkit"
 let initialState={}
const detailSlice=createSlice({
    name:"detail",
    initialState,
    reducers:{
        addDetail:(state,action)=>{
        return state
        }
    }
})

export const {addDetail}=detailSlice.actions
export default detailSlice.reducer