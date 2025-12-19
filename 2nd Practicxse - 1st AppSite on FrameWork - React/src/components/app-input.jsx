import React, { useState } from 'react';

export function AppInput() {
  const [value, onChange] = useState(1);
  const [min] = useState(-100);
  const [max] = useState(100);
  
  const handleInputChange = (e) => {
    let newChange = Number(e.target.value);
    
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