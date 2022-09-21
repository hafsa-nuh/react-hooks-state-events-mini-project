import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      <Task
        key={tasks.text}
        text={tasks.text}
        category={tasks.category}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskList;
