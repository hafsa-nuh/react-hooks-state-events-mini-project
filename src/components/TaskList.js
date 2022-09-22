import React, {useState} from "react";
import { TASKS } from "../data";
import Task from "./Task";


function TaskList() {
  const [tasks, setTask] = useState(TASKS);
  // console.log(tasks)

  const handleDelete = (event,removeTask) => {
    // console.log('how')
    removeTask = event.target.parentNode;
    setTask(removeTask.remove());
  };

  const taskList = tasks.map((task) => {
    // console.log()
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        // removeTask = {removeTask}
        handleDelete={handleDelete}
      />
    );
  });

  // console.log(taskList);
  return <div className="tasks">{taskList}</div>;
}
export default TaskList;
