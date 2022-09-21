import React from "react";

function Task({text, category , deleteTask }) {
  const handleDelete = () =>{
    deleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">{handleDelete}</button>
    </div>
  );
}

export default Task;
