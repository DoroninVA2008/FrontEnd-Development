function DataFetcher({ userId }) {
  const [state, setState] = React.useState('idle');
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  const fetchData = async () => {
    setState('loading');
    setError(null);
    
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) throw new Error('Ошибка загрузки');
      
      const result = await response.json();
      setData(result);
      setState('success');
    } catch (err) {
      setError(err);
      setState('error');
    }
  };
  
  React.useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);
  
  if (state === 'idle') return <div>Введите ID пользователя</div>;
  if (state === 'loading') return <div>Загрузка...</div>;
  if (state === 'error') return (
    <div>
      <div style={{ color: 'red' }}>Ошибка: {error?.message}</div>
      <button onClick={fetchData}>Повторить</button>
    </div>
  );
  
  return (
    <div>
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <button onClick={fetchData}>Обновить</button>
    </div>
  );
}