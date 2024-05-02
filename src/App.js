import "./App.css";
import React, { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

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
      <div className="todo-container">
        <TaskInput
          addTask={addTask}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          removeTask={removeTask}
          completeTask={completeTask}
          remainingTask={remainingTask}
        />
      </div>
    </>
  );
}
export default App;
