import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

export default function Home({ token }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div>
      <h2>Mes tâches</h2>
      <TaskForm token={token} refreshTasks={fetchTasks} />
      {tasks.map(task => <TaskItem key={task._id} task={task} />)}
    </div>
  );
}
