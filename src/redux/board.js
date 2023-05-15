import { createSlice } from "@reduxjs/toolkit";

const initialState = ["rishi"];
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn(state, action) {
      const { title } = action.payload;
      state.push({
        title,

        cards: [],
      });
    },
    addCard(state, action) {
      const { columnInd, task } = action.payload;
      state[columnInd].cards.push({
        task,
        activity: [`Task created at the time : ${new Date()}`],
      });
    },
    delCard(state,action){
      const {columnInd,taskIndex}=action.payload
      state[columnInd].cards.splice(taskIndex,1)
    },
    delColumn(state,action){
     const{columnInd}=action.payload
     state.splice(columnInd,1)
    }
  },
});
export const { addColumn, addCard,delCard,delColumn } = boardSlice.actions;
export default boardSlice.reducer;
