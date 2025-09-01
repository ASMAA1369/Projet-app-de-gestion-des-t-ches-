import { useState } from 'react';
import { createTask } from '../services/api';

export default function TaskForm({ token, refreshTasks }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(token, { title });
    setTitle('');
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Nouvelle tâche" required />
      <button type="submit">Ajouter</button>
    </form>
  );
}
