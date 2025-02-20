import React, { useState } from "react";
import "./style.css";

const App = () => {
  let [task, setTask] = useState({
    title: "Task",
    content: "To crate a TODO App",
  });
  let { title, content } = task;
  return (
    <>
      <div id="container">
        <nav id="navbar">
          <h1>TODO</h1>
          <ul>
            <li>New Task</li>
            <li>Filter</li>
            <li>Login</li>
          </ul>
        </nav>
        <section id="list">
          <div className="tasks">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <div className="tasks">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </section>
        <div>
          <button id="new_task" title="New Task">+</button>
        </div>
      </div>
    </>
  );
};

export default App;
