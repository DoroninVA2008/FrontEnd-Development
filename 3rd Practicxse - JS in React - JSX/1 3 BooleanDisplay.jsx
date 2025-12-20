// BooleanDisplay.jsx - Добавить проверку времени суток и менять приветствие.
export const BooleanDisplay = () => {
  const isLoggedIn = true;
  const hasPermission = false;
  const score = 85;

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 11) {
    greeting = "ое утро";
  } else if (currentHour >= 11 && currentHour < 17) {
    greeting = "ый день";
  } else if (currentHour >= 17 && currentHour < 23) {
    greeting = "ого вечера";
  } else {
    greeting = "ой ночи";
  }
  
  return (
    <div>
      <h2>Статусы</h2>
      <h3>Добр{greeting}!</h3>
      <p>Вход выполнен: {isLoggedIn ? "✅ Да" : "❌ Нет"}</p>
      <p>Есть доступ: {hasPermission && "🔓 Разрешено"}</p>
      <p>Оценка: {score > 90 ? "Отлично" : score > 60 ? "Хорошо" : "Плохо"}</p>
    </div>
  );
};