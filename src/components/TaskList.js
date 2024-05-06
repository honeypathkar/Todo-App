import React, { useState, useEffect } from "react";
import "../App.css";
// import "./Task.css"
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTask } from "../store/slices/TaskSlice";

export default function TaskList() {
  const [completeTask, setCompleteTask] = useState(0);
  const [remainingTask, setRemainingTask] = useState(0);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <div>
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
              <span
                className="pr-[100px]"
                onClick={() => handleToggle(task.id)}
              >
                &#10004;
              </span>
              <span className="pr-[53px]" onClick={() => handleRemove(task.id)}>
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
  );
}
