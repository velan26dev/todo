import React, { useState } from 'react'

const AddTask = ({toggle,save}) => {
    let [task, setTask] = useState({
        title: "",
        desc: ""
    })
    let { title, desc } = task
    let handleChange = (e) => {
        let { name, value } = e.target
        setTask({
            ...task,[name]:value
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        save(task)
        toggle()
    }
  return (
      <>
        <div id='popup'>
            <section id='form_container'>
              <form>
                  <div className='task_form'>
                      <input type="text" name='title' value={title} onChange={handleChange} placeholder='Task Title' required/>
                  </div>
                  <div className='task_form'>
                      <textarea name="desc" value={desc} onChange={handleChange} placeholder='Description' required></textarea>
                  </div>
                  <div className='task_form'>
                    <button onClick={handleSubmit}>Add Task</button>
                    <button onClick={toggle}>Cancel</button>
                  </div>  
              </form>
            </section>
        </div>
      </>
  )
}

export default AddTask