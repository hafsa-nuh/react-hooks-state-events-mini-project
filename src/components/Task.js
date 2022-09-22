import React from "react";

function Task({text, category , removeTask }) {
  // console.log(text)
  const handleDelete = () => {
    removeTask(text);
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={ handleDelete }>Delete</button>
    </div>
  );
}

export default Task;
