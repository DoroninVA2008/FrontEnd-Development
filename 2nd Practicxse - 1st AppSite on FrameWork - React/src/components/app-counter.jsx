import React from 'react';

export function AppCounter({count}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
      <h2>Реактивный Счётчик: {count}</h2>
    </div>
  );
}