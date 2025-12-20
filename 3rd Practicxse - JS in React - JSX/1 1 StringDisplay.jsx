// StringDisplay.jsx - Добавить переменную `userEmail` и вывести ее в нижнем регистре.
export const StringDisplay = () => {
  const greeting = "Привет, React!";
  const userName = "Иван";
  const userEmail = "IvanReact1488@mail.ru";
  
  return (
    <div>
      <h1>{greeting}</h1>
      <p>Пользователь: {userName}</p>
      <p>Длина имени: {userName.length} символов</p>
      <p>Почта пользователя: {userEmail}</p>
    </div>
  );
};