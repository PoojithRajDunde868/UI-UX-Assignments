import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hiddenEmails, setHiddenEmails] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          <strong>{user.name}</strong> — {hiddenEmails[user.id] ? 'Email hidden' : user.email}
          <button onClick={() =>
            setHiddenEmails(prev => ({
              ...prev,
              [user.id]: !prev[user.id]
            }))
          } style={{ marginLeft: '10px' }}>
            {hiddenEmails[user.id] ? 'Show Email' : 'Hide Email'}
          </button>
        </li>
      ))}
    </ul>
  );
}
