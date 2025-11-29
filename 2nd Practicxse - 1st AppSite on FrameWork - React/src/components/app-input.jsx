import React from 'react';

export function AppInput({ step, onStepChange }) {
  const handleStepChange = (e) => {
    const newStep = Number(e.target.value);
    onStepChange(newStep);
  };
  return (
    <div style={{ marginBottom: '15px' }}>
      <label>
        Шаг изменения:
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          min="-100"
          max="100"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
    </div>
  );
}
