import { configureStore } from "@reduxjs/toolkit";
import  taskSlice  from "./slices/TaskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default store;
