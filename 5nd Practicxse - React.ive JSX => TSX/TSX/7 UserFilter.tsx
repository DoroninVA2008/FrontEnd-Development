import React from 'react';

interface user {
    firstName: string;
    lastName: string;
    id: string | number;
    email: string;
    age: number;
}

interface UsersProps {
    users: user[];
}
function UserFilter({ users }: UsersProps) {
  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('name');
  
  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase()) || 
           user.email.toLowerCase().includes(search.toLowerCase());
  });
  
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'name') {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
    }
    if (sortBy === 'age') return a.age - b.age;
    if (sortBy === 'email') return a.email.localeCompare(b.email);
    return 0;
  });
  
  const handleReset = () => {
    setSearch('');
    setSortBy('name');
  };
  
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Поиск пользователей..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">По имени</option>
          <option value="age">По возрасту</option>
          <option value="email">По email</option>
        </select>
        
        <button onClick={handleReset}>Сбросить</button>
      </div>
      
      <p>Найдено: {sortedUsers.length} пользователей</p>
      
      <ul>
        {sortedUsers.map(user => (
          <li key={user.id}>
            <strong>{user.firstName} {user.lastName}</strong>
            <div>Email: {user.email}</div>
            <div>Возраст: {user.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}