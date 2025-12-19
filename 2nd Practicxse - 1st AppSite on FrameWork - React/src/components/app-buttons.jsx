import React from 'react';

export function AppButtons({ buttons }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {buttons.map(({ key, onClick, disabled, label }) => (
        <button
          key={key}
          onClick={onClick}
          disabled={disabled}
          style={{ padding: '10px 15px' }}
        >
          {typeof label === 'function' ? label() : label}
        </button>
      ))}
    </div>
  );
}