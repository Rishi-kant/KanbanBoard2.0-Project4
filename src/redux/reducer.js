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
  },
});
export const { addColumn, addCard } = boardSlice.actions;
export default boardSlice.reducer;
