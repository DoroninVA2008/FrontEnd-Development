function FormInput() {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(null);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    
    if (value.length > 0 && value.length < 3) {
      setError('Минимум 3 символа');
    } else if (/[@#$%]/.test(value)) {
      setError('Запрещенные символы: @ # $ %');
    } else {
      setError(null);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && text.length >= 3) {
      alert(`Отправлено: ${text}`);
      setText('');
    }
  };
  
  const handleClear = () => {
    setText('');
    setError(null);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст (минимум 3 символа)"
      />
      <button type="submit">Отправить</button>
      <button type="button" onClick={handleClear}>Очистить</button>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!error && text.length >= 3 && <div style={{ color: 'green' }}>✓ Можно отправлять</div>}
    </form>
  );
}