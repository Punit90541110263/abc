import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        <TaskItem task="Task 1" />
        <TaskItem task="Task 2" />
        <TaskItem task="Task 3" />
        <TaskItem task="Task 4" />
        <TaskItem task="Task 5" />
      </ul>
    </div>
  );
};

export default TaskList;
