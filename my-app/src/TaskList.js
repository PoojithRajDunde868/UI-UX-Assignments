import React from 'react';

export default function TaskList() {
  const tasks = [
    { id: 1, title: 'Buy groceries', completed: true },
    { id: 2, title: 'Walk the dog', completed: false },
    { id: 3, title: 'Read a book', completed: true },
  ];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title} — {task.completed ? 'Done' : 'Pending'}
        </li>
      ))}
    </ul>
  );
}
