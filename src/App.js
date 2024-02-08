import "./App.css";
import React, {useEffect, useState } from "react";
import logo from "./images/icon.png"

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completeTask, setCompleteTask] = useState(0);
  const [remainingTask, setRemainingTask] = useState(0);

  // useEffect(() => {
  //  showData();
  // }, []); // Load tasks from localStorage on component mount

useEffect(() => {
  const count = tasks.filter(task => task.completed).length;
  setCompleteTask(count);
}, [tasks]);

useEffect(() => {
  const remain = tasks.filter(task => !task.completed).length;
  setRemainingTask(remain);
}, [tasks]);

  const addTask = title => {
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      
      const newTasks = [...tasks, {text: inputValue, completed: false}];
      setTasks(newTasks);
      saveData();
    }
    setInputValue("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    //saveData();
    
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    //saveData();
  };


  const saveData = () => {
    localStorage.setItem('data', JSON.stringify(tasks));
  };

  // const showData = () => {
  //  const storedData = localStorage.getItem('data');
  //  if (storedData) {
  //    setTasks(JSON.parse(storedData));
  //  }
  // };

  return (
    <>
    <div>
    <div className="todo-container">
        <div className="flex">
          <h1>To-Do List</h1>
          <img src={logo} alt="Logo" className="w-16 px-2" />
        </div>
        <br />
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add your task"
            className="taskbox"
          />
          <button
            className=" btn"
            onClick={addTask}
          >
            Add
          </button>
          </div>
          <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? "completed" : ""}
              style={{textDecoration: task.completed ? "line-through": "none", color: task.completed ? "gray": ""}}
            >
              {task.text}
              <span className="pr-[100px]" onClick={() => toggleTask(index)}>
                &#10004;
              </span>
              <span className="pr-[53px]" onClick={() => removeTask(index)}>
                &#10060;
              </span>
            </li>
          ))}
        </ul>
        <hr/>
        <div className="flex remain">
          <p>Remaining Task : {remainingTask}</p>
          <p>Completed Task : {completeTask}</p>
        </div>
        
    </div>
    
    </div>
    </>
  );
}
export default App;
