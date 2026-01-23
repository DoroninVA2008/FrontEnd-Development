import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  const isMin = count === 0;
  const isMax = count === 10;

  return (
    <div>
      <h3 style={{ color: isMax ? 'red' : 'black' }}>
        Счетчик: {count}
      </h3>
      <button onClick={increment} disabled={isMax}>+</button>
      <button onClick={decrement} disabled={isMin}>-</button>
      <button onClick={reset}>Сброс</button>
      {isMax && <p>Достигнут максимум!</p>}
    </div>
  );
}

export default Counter;