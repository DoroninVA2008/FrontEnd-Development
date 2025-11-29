import React from 'react';

export function AppButtons({buttons}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {buttons.map(button => (
        <button
          key={button.key}
          onClick={button.onClick}
          disabled={button.disabled}
          style={{ padding: '10px 15px' }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}