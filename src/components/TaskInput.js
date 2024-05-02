import React from "react";
// import "./Task.css"
import "../App.css"
import logo from "../images/icon.png";

export default function TaskInput(props) {
    const {inputValue, setInputValue, addTask} = props;
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
          <button className="btn btn-outline-dark px-5 py-2" onClick={addTask} style={{borderRadius: "9999px"}}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
