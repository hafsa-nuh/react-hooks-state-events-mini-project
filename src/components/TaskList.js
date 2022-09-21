import React, {useState} from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTask] = useState("");

  const handleDelete = (event) => {
    setTask(event.target.parentNode.remove());
    
  }
  return (
    <div className="tasks">
      {tasks.map(task => <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />)}
    </div>
  );
}
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task
//           key={task.text}
//           text={task.text}
//           category={task.category}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// }

// function TaskList() {
//   const [task, setTask] = useState();
//   return (
//     <div className="tasks">
//       {task.map((task) => (
//         <Task
//           key={task.text}
//           text={task.text}
//           category={task.category}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// }

export default TaskList;
