Отлично! Вот практические задания для освоения JavaScript в контексте React, от простого к сложному:

### Уровень 1: Базовые компоненты с данными

#### **Задание 1.1: Вывод простых данных**
```jsx
// StringDisplay.jsx
export const StringDisplay = () => {
  const greeting = "Привет, React!";
  const userName = "Иван";
  
  return (
    <div>
      <h1>{greeting}</h1>
      <p>Пользователь: {userName}</p>
      <p>Длина имени: {userName.length} символов</p>
    </div>
  );
};
```
**Задача:** Добавить переменную `userEmail` и вывести ее в нижнем регистре.

---

#### **Задание 1.2: Работа с числами и операциями**
```jsx
// Calculator.jsx
export const Calculator = () => {
  const a = 15;
  const b = 7;
  
  return (
    <div>
      <h2>Калькулятор</h2>
      <p>{a} + {b} = {a + b}</p>
      <p>{a} * {b} = {a * b}</p>
      <p>Среднее: {(a + b) / 2}</p>
      <p>Остаток от деления: {a % b}</p>
      <p>Случайное число: {Math.random()}</p>
    </div>
  );
};
```
**Задача:** Добавить операции: степень, округление, минимальное/максимальное значение.

---

#### **Задание 1.3: Булевы значения и условия**
```jsx
// BooleanDisplay.jsx
export const BooleanDisplay = () => {
  const isLoggedIn = true;
  const hasPermission = false;
  const score = 85;
  
  return (
    <div>
      <h2>Статусы</h2>
      <p>Вход выполнен: {isLoggedIn ? "✅ Да" : "❌ Нет"}</p>
      <p>Есть доступ: {hasPermission && "🔓 Разрешено"}</p>
      <p>Оценка: {score > 90 ? "Отлично" : score > 60 ? "Хорошо" : "Плохо"}</p>
    </div>
  );
};
```
**Задача:** Добавить проверку времени суток и менять приветствие.

---

### Уровень 2: Работа с массивами и объектами

#### **Задание 2.1: Списки из массива**
```jsx
// UserList.jsx
export const UserList = () => {
  const users = ["Анна", "Борис", "Виктор", "Дарья"];
  const numbers = [1, 2, 3, 4, 5];
  
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
    </div>
  );
};
```
**Задача:** Добавить вывод суммы чисел массива `numbers`.

---

#### **Задание 2.2: Объекты и деструктуризация**
```jsx
// StudentCard.jsx
export const StudentCard = () => {
  const student = {
    name: "Мария",
    age: 20,
    group: "ПИ-202",
    subjects: ["Математика", "Программирование", "Физика"],
    address: {
      city: "Москва",
      street: "Ленина"
    }
  };
  
  // Деструктуризация
  const { name, age, group } = student;
  const [mainSubject, ...otherSubjects] = student.subjects;
  
  return (
    <div>
      <h2>Карточка студента</h2>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Группа: {group}</p>
      <p>Город: {student.address.city}</p>
      <p>Основной предмет: {mainSubject}</p>
      <p>Другие предметы: {otherSubjects.join(', ')}</p>
    </div>
  );
};
```
**Задача:** Добавить вложенную деструктуризацию для адреса.

---

### Уровень 3: Функции и события

#### **Задание 3.1: Простые функции**
```jsx
// FunctionDemo.jsx
export const FunctionDemo = () => {
  // Функция внутри компонента
  const formatDate = () => {
    return new Date().toLocaleDateString();
  };
  
  const calculateDiscount = (price, percent) => {
    return price - (price * percent / 100);
  };
  
  return (
    <div>
      <h2>Демо функций</h2>
      <p>Сегодня: {formatDate()}</p>
      <p>Скидка на 1000 руб: {calculateDiscount(1000, 15)} руб</p>
    </div>
  );
};
```
**Задача:** Создать функцию для форматирования имени (первая буква заглавная).

---

#### **Задание 3.2: Обработчики событий**
```jsx
// EventHandlers.jsx
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
      </div>
    </div>
  );
};
```
**Задача:** Добавить кнопку для обращения текста.

---

#### **Задание 3.3: Формы и управление состоянием**
```jsx
// UserForm.jsx
import { useState } from 'react';

export const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    subscribe: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    alert(`Привет, ${formData.username}!`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      
      <div>
        <label>
          Имя:
          <input 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          Email:
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Подписаться на новости:
          <input 
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <button type="submit">Отправить</button>
    </form>
  );
};
```

---

### Уровень 4: Работа с модулями

#### **Задание 4.1: Создание утилит**
```jsx
// utils/format.js
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
};

export const calculateAverage = (numbers) => {
  if (!numbers.length) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};
```

```jsx
// UsingUtils.jsx
import { capitalize, formatPhone, calculateAverage } from './utils/format';

export const UsingUtils = () => {
  const name = "иван иванов";
  const phone = "79123456789";
  const grades = [4, 5, 3, 4, 5];
  
  return (
    <div>
      <h2>Использование утилит</h2>
      <p>Имя: {capitalize(name)}</p>
      <p>Телефон: {formatPhone(phone)}</p>
      <p>Средний балл: {calculateAverage(grades).toFixed(2)}</p>
    </div>
  );
};
```

---

#### **Задание 4.2: API сервис**
```jsx
// services/userService.js
export const UserService = {
  getAll: async () => {
    // Имитация API запроса
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Анна', role: 'admin' },
          { id: 2, name: 'Борис', role: 'user' },
          { id: 3, name: 'Виктор', role: 'user' }
        ]);
      }, 1000);
    });
  },
  
  getById: async (id) => {
    // Имитация получения по ID
    return { id, name: 'Пользователь', email: 'test@mail.ru' };
  }
};
```

```jsx
// UserServiceDemo.jsx
import { useState, useEffect } from 'react';
import { UserService } from './services/userService';

export const UserServiceDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserService.getAll();
        setUsers(data);
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Загрузка...</div>;
  
  return (
    <div>
      <h2>Список пользователей (из сервиса)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

---

### Уровень 5: Комбинированные задания

#### **Задание 5.1: Todo List (мини-проект)**
```jsx
// TodoApp.jsx
import { useState } from 'react';

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить React', completed: true },
    { id: 2, text: 'Написать проект', completed: false },
    { id: 3, text: 'Сдать экзамен', completed: false }
  ]);
  
  const [inputText, setInputText] = useState('');
  
  const addTodo = () => {
    if (!inputText.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputText('');
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const completedCount = todos.filter(t => t.completed).length;
  
  return (
    <div>
      <h2>Список задач</h2>
      
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Новая задача..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      
      <p>Выполнено: {completedCount} из {todos.length}</p>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```