
import {createSlice} from "@reduxjs/toolkit"
intitailState={}
const detailSlice=createSlice({
    name:"detail",
    intitailState,
    reducers:{
        addDetail(state,action){

        }
    }
})

export const {addDetail}=detailSlice.actions
export default detailSlice.reducer