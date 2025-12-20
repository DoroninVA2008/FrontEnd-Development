// FunctionDemo.jsx - Создать функцию для форматирования имени (первая буква заглавная).
export const FunctionDemo = () => {
  // Функция внутри компонента
  const formatDate = () => {
    return new Date().toLocaleDateString();
  };
  
  const calculateDiscount = (price, percent) => {
    return price - (price * percent / 100);
  };

  const formatName = (name) => {
    if (!name) {
      return ''; 
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  return (
    <div>
      <h2>Демо функций</h2>
      <p>Сегодня: {formatDate()}</p>
      <p>Скидка на 1000 руб: {calculateDiscount(1000, 15)} руб</p>
      <p>Формативное Имя: {formatName("иван")}</p>
      <p>Пустое Имя "": {formatName("")}</p>
      <p>Форматированное Имя: {formatName("владимир")}</p>
    </div>
  );
};