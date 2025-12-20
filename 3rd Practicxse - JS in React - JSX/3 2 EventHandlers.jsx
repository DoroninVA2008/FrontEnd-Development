// EventHandlers.jsx - Добавить кнопку для обращения текста.
import { useState } from 'react';

export const EventHandlers = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => {
    setCounter(counter + 1);
  };
  
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleEnterText = () => {
    const enterText = text.split('').reverse().join('');
    setText(enterText); 
  };
  
  const handleReset = () => {
    setText('');
    setCounter(0);
  };
  
  return (
    <div>
      <h2>Обработчики событий</h2>
      
      <div>
        <input 
          type="text" 
          value={text}
          onChange={handleInputChange}
          placeholder="Введите текст..."
        />
        <p>Вы ввели: {text}</p>
        <p>Длина: {text.length}</p>
      </div>
      
      <div>
        <button onClick={handleClick}>
          Нажато: {counter} раз
        </button>
        <button onClick={handleReset}>
          Сбросить
        </button>
        <button onClick={handleEnterText}>
          Обращение текста
        </button>
      </div>
    </div>
  );
};