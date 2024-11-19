import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', priority: 'High', completed: false },
    { id: 2, name: 'Task 2', priority: 'Medium', completed: true },
    { id: 3, name: 'Task 3', priority: 'Low', completed: false },
  ]);

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
