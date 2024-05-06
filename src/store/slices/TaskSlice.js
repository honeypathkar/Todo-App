import { createSlice } from "@reduxjs/toolkit";

let nextTaskId = 1;

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: nextTaskId++,
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    removeTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleTask(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

console.log(taskSlice.actions);
export default taskSlice.reducer;
export const { addTask, removeTask, toggleTask } = taskSlice.actions;
