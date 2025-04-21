import React, { useState } from 'react'
import AddTask from './AddTask'

const Home = () => {
  let [popup, setPopup] = useState(false)
  let [taskList,setTaskList]=useState([])
  let toggle = () => {
    setPopup(!popup)
  }
  let saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    setTaskList(tempList)
    console.log(taskObj);
  }
  return (
    <>
      <div id="container">
        <nav id="navbar">
          <h1>TODO</h1>
          <ul>
            <li onClick={toggle}>New Task</li>
            <li>Filter</li>
            <li>Login</li>
          </ul>
        </nav>
        <section id="list">
          {taskList.map((obj) => 
            <div className="tasks">
              <h1>{obj.title}</h1>
              <p>{obj.desc}</p>
            </div>
          )}
        </section>
        <div>
          <button id="new_task" title="New Task" onClick={toggle}>
            +
          </button>
        </div>
      </div>
      {popup ? <AddTask toggle={toggle} save={saveTask} /> : <></>}
    </>
  );
}

export default Home