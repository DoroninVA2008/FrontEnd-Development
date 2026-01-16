import React, { useState } from 'react';

export function AppInput({ value, onChange }) {

  const [min] = useState(-100);
  const [max] = useState(100);

  const handleInputChange = (e) => {
    let newChange = Number(e.target.value);

    if (isNaN(newChange)) {
        newChange = 0; 
    }

    if (newChange < min) newChange = min;
    if (newChange > max) newChange = max;

    onChange(newChange);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label>
        Шаг изменения:
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
    </div>
  );
}
