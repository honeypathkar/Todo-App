import React from "react";
import "../App.css";
// import "./Task.css"

export default function TaskList(props) {
  const { tasks, completeTask, remainingTask, toggleTask, removeTask } = props;
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
  );
}
