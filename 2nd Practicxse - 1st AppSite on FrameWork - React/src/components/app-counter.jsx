import React from 'react';

export function AppCounter({count}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
      <h2>Счётчик: {count}</h2>
    </div>
  );
}