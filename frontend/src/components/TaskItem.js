import React from "react";
import api from "../services/api";

const TaskItem = ({ task, refreshTasks }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);
      refreshTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleCompleted = async () => {
    try {
      await api.put(`/tasks/${task._id}`, { completed: !task.completed });
      refreshTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed || false}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
