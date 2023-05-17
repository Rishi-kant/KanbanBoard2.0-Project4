import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [];
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn(state, action) {
      const { title } = action.payload;
      state.push({
        title,
        id:uuid(),
        cards: [],
      });

    },
    addCard(state, action) {
      const { columnInd, task } = action.payload;
      state[columnInd].cards.push({
        task,
        id:uuid(),
        activity: [`Task created at the time : ${new Date()}`],
      });
    },
    delCard(state, action) {
      const { columnInd, taskIndex } = action.payload;
      state[columnInd].cards.splice(taskIndex, 1);
    },
    editCard(state, action) {
      const { columnInd, taskIndex, cardName } = action.payload;

      state[columnInd].cards[taskIndex].task = cardName;
    },

    delColumn(state, action) {
      const { columnInd } = action.payload;
      state.splice(columnInd, 1);
     
    },
    editColumnTitle(state, action) {
      const { columnInd, newName } = action.payload;
      state[columnInd].title = newName;
    },
    moveCard(state, action) {
      const {
        sourceColumnId,
        draggableId,
        sourceIndex,
        destIndex,
      } = action.payload;
         const sourceColumn = state.find((column) => column.id === sourceColumnId);
      const destinationColumn = state.find((column) => column.id === draggableId);
      const card = sourceColumn.card[sourceIndex];
      sourceColumn.card.splice(sourceIndex, 1);
      destinationColumn.card.splice(destIndex, 0, card);     
    },
  },
});
export const {
  addColumn,
  addCard,
  delCard,
  delColumn,
  editCard,
  editColumnTitle,
  moveCard,
} = boardSlice.actions;

export default boardSlice.reducer;