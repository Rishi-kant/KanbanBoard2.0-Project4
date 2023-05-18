 
 import {createSlice} from "@reduxjs/toolkit"
  let initialState="https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  
 const bgSlice=createSlice({
    name:"background",
    initialState,
    reducers:{
        changeBg(state,action){

        }
    }
 })
 export const {changeBg} =bgSlice.actions
 export default bgSlice.reducer