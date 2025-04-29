import React, { useState } from 'react'
import './todo.css'
function Todo() {
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);

    function handleInputChange(value){
        setInputValue(value)
    }
    function handleFormSubmit(event){
        event.preventDefault();
        if(!inputValue) return;
        
        if(task.includes(inputValue)){
            setInputValue("")
            return;
        }

        setTask((prevTask)=>[...prevTask,inputValue]);
        setInputValue("")
    
    }
  return (

    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-5 text-light">Todo List</h1>
      </header>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <form onSubmit={handleFormSubmit} className="d-flex gap-2">
            <input
              type="text"
              className="form-control rounded-pill shadow-sm"
              placeholder="Enter a task"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
            <button type="submit" className="btn btn-primary rounded-pill px-4">
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {task.map((curTask, index) => (
              <li
                key={index}
                className="list-group-item rounded-pill mb-2 shadow-sm "
              >
                {curTask}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>




    // 
    
  )
}

export default Todo
