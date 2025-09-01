export default function TaskItem({ task }) {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small>{task.dueDate}</small>
    </div>
  );
}
