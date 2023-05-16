
import {createSlice} from "@reduxjs/toolkit"
 let initialState={
   
 }
const detailSlice=createSlice({
    name:"detail",
    initialState,
    reducers:{
        addDetail:(state,action)=>{
        const{boardName,name}=action.payload
        state.boardName=boardName
        state.name=name
        }
    }
})

export const {addDetail}=detailSlice.actions
export default detailSlice.reducer