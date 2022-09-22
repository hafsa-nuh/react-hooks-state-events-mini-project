import React, {useState} from "react";
import { TASKS } from "../data";
import Task from "./Task";


function TaskList({ removeTask }) {
  const [tasks, setTask] = useState(TASKS);
  // console.log(tasks)

  // const handleDelete = (event) => {
  //   // console.log('how')
  //   setTask(event.target.parentNode.remove());
  // };

  const taskList = tasks.map((task) => {
    // console.log()
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        removeTask = {removeTask}
        // handleDelete={handleDelete}
      />
    );
  });

  // console.log(taskList);
  return <div className="tasks">{taskList}</div>;
}
export default TaskList;
