import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Addtask } from "../Js/TodoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Math.random(),
    title: '',
    description: '',
    isDone: false, // Set the initial value of isDone to false
  });

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => { setTask({ ...task, title: e.target.value }); }}
      />

      <input
        type="text"
        placeholder="Enter Description"
        onChange={(e) => { setTask({ ...task, description: e.target.value }); }}
      />

      <select
        onChange={(e) => { setTask({ ...task, isDone: e.target.value === "done" }); }}
      >
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>

      <button onClick={() => dispatch(Addtask(task))}>Add New Task</button>
    </div>
  );
}

export default AddTodo;
