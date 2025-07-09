import React from 'react';

export default function Wrapper({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '20px 0',
      borderRadius: '6px',
      background: '#f9f9f9'
    }}>
      {children}
    </div>
  );
}
