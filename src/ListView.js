import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const ListView = () => {
  const {
    currentList,
    setCurrentList,
    lists,
    addItem,
    deleteItem,
    toggleItemCompletion,
  } = useContext(TaskContext);

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddItem = () => {
    if (newTask.trim() && priority) {
      addItem(currentList.name, newTask, priority);
      setNewTask("");
      setPriority("");
    }
  };

  return (
    <div>
      <h2>List View</h2>
      <select
        value={currentList ? currentList.name : ""}
        onChange={(e) =>
          setCurrentList(lists.find((list) => list.name === e.target.value))
        }
      >
        <option value="" disabled>
          Select a list
        </option>
        {lists.map((list, index) => (
          <option key={index} value={list.name}>
            {list.name}
          </option>
        ))}
      </select>

      {currentList && (
        <div>
          <h3>{currentList.name}</h3>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="" disabled>
              Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleAddItem}>Add Item</button>

          <ul>
            {currentList.items
              .sort((a, b) => a.priority.localeCompare(b.priority))
              .map((item, index) => (
                <li key={index}>
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.task} ({item.priority})
                  </span>
                  <button onClick={() => toggleItemCompletion(currentList.name, item.task)}>
                    {item.completed ? "Undo" : "Complete"}
                  </button>
                  <button onClick={() => deleteItem(currentList.name, item.task)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListView;
