import React, { useState } from "react";
import { addTask } from "./firestoreService";

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    await addTask(taskName);
    setTaskName("");
    window.location.reload(); // Reload to fetch updated tasks
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
