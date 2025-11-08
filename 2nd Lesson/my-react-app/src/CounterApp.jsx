import React, { useState } from 'react';

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prevCount => Math.min(prevCount + step, 1000));
  };

  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - step, -1000));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Счётчик: {count}</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          Шаг изменения: 
          <input 
            type="number" 
            value={step} 
            onChange={(e) => setStep(Number(e.target.value))}
            min="1"
            max="100"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={decrement} 
          disabled={count <= -1000}
          style={{ padding: '10px 15px' }}
        >
          -{step}
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '10px 15px' }}
        >
          Сбросить
        </button>
        
        <button 
          onClick={increment} 
          disabled={count >= 1000}
          style={{ padding: '10px 15px' }}
        >
          +{step}
        </button>
      </div>
    </div>
  );
};

export default CounterWithStep;
