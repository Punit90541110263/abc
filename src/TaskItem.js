import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <strong>{task.name}</strong> - {task.priority} -{' '}
      {task.completed ? 'Completed' : 'Pending'}
    </li>
  );
};

export default TaskItem;
