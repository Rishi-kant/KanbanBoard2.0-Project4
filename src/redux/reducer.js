import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
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
    }
  },
});
export const { addColumn, addCard,delCard } = boardSlice.actions;
export default boardSlice.reducer;
