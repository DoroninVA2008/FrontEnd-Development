import { useState, JSX, ChangeEvent, FormEvent } from "react";

function FormInput(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setText(value);

    if (value.length === 0) {
      setError(null);
    } else if (value.length < 3) {
      setError('Минимум 3 символа');
    } else if (/[@#$%]/.test(value)) {
      setError('Запрещенные символы: @ # $ %');
    } else {
      setError(null);
    }
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!error && text.length >= 3) {
      alert(`Отправлено: ${text}`);
      setText('');
      setError(null);
    } else{
        if (text.length < 3) {
      setError('После должно содержать минимум 3 символа.');
    } else if (error) {
        alert('Пожалуйста, исправьте ошибки перед отправкой.');
        }
    }
  };
  
  const handleClear = (): void => {
    setText('');
    setError(null);
  };

  const canSubmit = !error && text.length >= 3;
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст (минимум 3 символа)"
      />
      <button type="submit" disabled={!canSubmit}>Отправить</button>
      <button type="button" onClick={handleClear}>Очистить</button>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!error && text.length >= 3 && <div style={{ color: 'green' }}>✓ Можно отправлять</div>}
    </form>
  );
}