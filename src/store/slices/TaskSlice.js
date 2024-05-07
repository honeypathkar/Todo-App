import { createSlice } from "@reduxjs/toolkit";

const todo =
  localStorage.getItem("tasks") !== null
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

let nextTaskId = 1;

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: todo,
  },
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: nextTaskId++,
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask(state, action) {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

console.log(taskSlice.actions);
export default taskSlice.reducer;
export const { addTask, removeTask, toggleTask } = taskSlice.actions;
