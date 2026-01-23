import React from 'react';

interface Data {
    name: string;
    description: string;
}
interface DataFetcherProps {
    userId: number | null;
}
function DataFetcher({ userId }: DataFetcherProps) {
  const [state, setState] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [data, setData] = React.useState<Data | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  
  const fetchData = async () => {
    setState('loading');
    setError(null);
    
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) throw new Error('Ошибка загрузки');
      
      const result = await response.json() as Data;
      setData(result);
      setState('success');
    } catch (err) {
      setError(err as Error);
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