
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
        },
        updateBoardName(state,action){
         const {newName}=action.payload
         state.boardName=newName
        }
    }
})

export const {addDetail,updateBoardName}=detailSlice.actions
export default detailSlice.reducer