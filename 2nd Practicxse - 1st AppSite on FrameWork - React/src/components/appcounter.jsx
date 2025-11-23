import React from 'react';

function CounterComponent({count}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
      <h2>Счётчик: {count}</h2>
    </div>
  );
}

export default CounterComponent;

