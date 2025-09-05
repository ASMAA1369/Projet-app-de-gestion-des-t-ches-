import React, { useEffect, useState } from "react";
import api from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks</h2>
      <TaskForm onTaskAdded={fetchTasks} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} refreshTasks={fetchTasks} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
