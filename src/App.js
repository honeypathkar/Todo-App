import "./App.css";
import React, { useEffect, useState } from "react";
import logo from "./images/icon.png";

function App() {
  //Making state for task
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //state for complete task
  const [completeTask, setCompleteTask] = useState(0);
  //state for remain task
  const [remainingTask, setRemainingTask] = useState(0);

  useEffect(() => {
    showData();
  }, []); // Load tasks from localStorage on component mount

  //Getting the length of complete task
  useEffect(() => {
    const count = tasks.filter((task) => task.completed).length;
    setCompleteTask(count);
  }, [tasks]);

  //Getting the length of remain task
  useEffect(() => {
    const remain = tasks.filter((task) => !task.completed).length;
    setRemainingTask(remain);
  }, [tasks]);

  //Function for adding task
  const addTask = () => {
    //if value is empty return alert
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      const newTasks = [...tasks, { text: inputValue, completed: false }]; //else adding task
      setTasks(newTasks);
      saveData([...newTasks]);
    }
    setInputValue("");
  };

  //Toggle task function for check task as completed
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    saveData([...newTasks]);
  };

  //Remove task function for removing task
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveData([...newTasks]);
  };

  //Save task in local storage
  const saveData = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //Showing task from local storage after the page reload
  const showData = () => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      setTasks(JSON.parse(storedData));
    }
  };

  return (
    <>
      <div>
        <div className="todo-container">
          <div className="flex">
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
              className="taskbox"
            />
            <button className=" btn" onClick={addTask}>
              Add
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.completed ? "completed" : ""}
                // changing style of task if task is completed
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "",
                }}
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
          <hr />
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
