import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, increment, decrement, setValue } from './counter/counter.js';

const CounterWithStep = () => {
  // const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const count = useSelector(state => state.counter.value); 
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setValue(count));  
  // }, [count, dispatch]);

  const handleIncrement = () => {
    dispatch(increment(step));
  };

  const handleDecrement = () => {
    dispatch(decrement(step));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
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
            onChange={handleStepChange}
            min="1"
            max="100"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={handleDecrement}
          disabled={count <= -1000}
          style={{ padding: '10px 15px' }}
        >
          -{step}
        </button>

        <button
          onClick={handleReset}
          style={{ padding: '10px 15px' }}
        >
          Сбросить
        </button>

        <button
          onClick={handleIncrement}
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
