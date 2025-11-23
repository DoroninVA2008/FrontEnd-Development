import React from 'react';

function InputComponent({step, onStepChange}) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label>
        Шаг изменения:
        <input
          type="number"
          value={step}
          onChange={onStepChange}
          min="-100"
          max="+100"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
    </div>
  );
}

export default InputComponent;

