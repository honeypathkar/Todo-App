import React, { useState } from "react";
// import "./Task.css"
import "../App.css";
import logo from "../images/icon.png";
import { useDispatch} from "react-redux";
import { addTask } from "../store/slices/TaskSlice";

export default function TaskInput() {
  // const {inputValue, setInputValue, addTask} = props;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleTask = () => {
    if (inputValue) {
      dispatch(addTask(inputValue));
    }
    setInputValue("");
  };

  return (
    <div>
      <div>
        <div className="todoInput">
          <h1>To-Do List</h1>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <br />
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add your task"
            className="taskbox px-5 py-2"
          />
          <button
            className="btn btn-outline-dark px-3 py-2"
            onClick={handleTask}
            style={{ borderRadius: "9999px" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
