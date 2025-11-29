import React from 'react';

export function AppInput({ step: onStepChange }) {
  const { value, onChange } = onStepChange;
  const handleInputChange = (e) => {
    const newStep = Number(e.target.value);
    onChange(newStep);
  };
  return (
    <div style={{ marginBottom: '15px' }}>
      <label>
        Шаг изменения:
        <input
          type="number"
          value={value}
          onChange={handleInputChange} 
          min="-100"
          max="100"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
    </div>
  );
}
