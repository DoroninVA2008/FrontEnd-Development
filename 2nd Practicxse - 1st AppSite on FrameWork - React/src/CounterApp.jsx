import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, increment, decrement, setValue } from './counter/counter.js';

const CounterWithStep = () => {
  const [step, setStep] = useState(1);
  const count = useSelector(state => state.counter.value); 
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const next = Math.min(1000, count + step);
    dispatch(setValue(next));
  };

  const handleDecrement = () => {
    const next = Math.max(-1000, count - step);
    dispatch(setValue(next));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  // Определяем, какая кнопка должна быть заблокирована
  const isIncrementDisabled = step >= 0 ? count >= 1000 : count <= -1000;
  const isDecrementDisabled = step >= 0 ? count <= -1000 : count >= 1000;

  // Определяем порядок кнопок в зависимости от знака шага
  const buttons = [
    {
      onClick: step >= 0 ? handleDecrement : handleIncrement,
      disabled: step >= 0 ? isDecrementDisabled : isIncrementDisabled,
      label: step >= 0 ? `-${Math.abs(step)}` : `+${Math.abs(step)}`,
      key: 'first'
    },
    {
      onClick: handleReset,
      disabled: false,
      label: 'Сбросить',
      key: 'reset'
    },
    {
      onClick: step >= 0 ? handleIncrement : handleDecrement,
      disabled: step >= 0 ? isIncrementDisabled : isDecrementDisabled,
      label: step >= 0 ? `+${Math.abs(step)}` : `-${Math.abs(step)}`,
      key: 'second'
    }
  ];

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
            min="-100"
            max="+100"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

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
    </div>
  );
};

export default CounterWithStep;
