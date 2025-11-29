import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, setValue } from './counter/counter.js';
import { AppCounter } from './components/app-counter.jsx';
import { AppInput } from './components/app-input.jsx';
import { AppButtons } from './components/app-buttons.jsx';

function CounterWithStep() {
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

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const isIncrementDisabled = step >= 0 ? count >= 1000 : count <= -1000;
  const isDecrementDisabled = step >= 0 ? count <= -1000 : count >= 1000;

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
      <AppCounter count={count} />
      <AppInput step={step} onStepChange={handleStepChange} />
      <AppButtons buttons={buttons} />
    </div>
  );
}

export default CounterWithStep;
