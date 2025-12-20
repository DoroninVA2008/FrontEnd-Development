// UserList.jsx - Добавить вывод суммы чисел массива `numbers`.
export const UserList = () => {
  const users = ["Анна", "Борис", "Виктор", "Дарья"];
  const numbers = [1, 2, 3, 4, 5];
  const sumNumbers = numbers.reduce((sum, num) => sum + num, 0);
  
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user} - индекс {index}</li>
        ))}
      </ul>
      
      <h3>Фильтрованный список (буква А)</h3>
      <ul>
        {users.filter(user => user.includes('А')).map(user => (
          <li>{user}</li>
        ))}
      </ul>
      <p>Сумма чисел в массиве numbers: {sumNumbers}</p>
    </div>
  );
};