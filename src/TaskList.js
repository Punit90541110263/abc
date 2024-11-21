import React, { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "./firestoreService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleToggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    window.location.reload();
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.name}
          </span>
          <button onClick={() => handleToggleComplete(task.id, task.completed)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
