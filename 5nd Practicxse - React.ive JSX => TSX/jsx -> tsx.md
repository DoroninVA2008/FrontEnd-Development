# Детальные задания для перевода JSX → TSX

## 1. **ProfileCard** - Базовые интерфейсы

**Задание:**
Создайте типизированный компонент для отображения карточки пользователя.

**Описание задания:**
Компонент получает информацию о пользователе и отображает её в структурированном виде. Нужно создать интерфейс для объекта пользователя и типизировать пропсы компонента.

**Требования:**
- Создать интерфейс `User` с обязательными полями: `id`, `name`, `age`
- Добавить опциональное поле `city` (строка)
- Добавить поле `isActive` (логическое значение) со значением по умолчанию `true`
- Компонент должен принимать объект `user` типа `User`
- Для не указанного города показывать "Город не указан"
- Для неактивных пользователей добавлять CSS-класс `inactive`

**Что практикуем:**
- Создание базовых интерфейсов в TypeScript
- Опциональные свойства (через `?`)
- Значения по умолчанию для пропсов
- Условный рендеринг с проверкой типов
- Деструктуризацию пропсов с аннотацией типов

```jsx
function ProfileCard({ user }) {
  return (
    <div className={`card ${!user.isActive ? 'inactive' : ''}`}>
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city || 'Город не указан'}</p>
      <p>Статус: {user.isActive ? 'Активен' : 'Неактивен'}</p>
    </div>
  );
}
```

## 2. **Counter** - Типизация хуков состояния

**Задание:**
Реализуйте типизированный счетчик с кнопками увеличения, уменьшения и сброса.

**Описание задания:**
Компонент счетчика с внутренним состоянием, которое нужно явно типизировать. Добавить ограничения на минимальное и максимальное значение.

**Требования:**
- Использовать `useState` с явным указанием типа `number`
- Счетчик не может быть меньше 0 и больше 10
- Добавить кнопки: +1, -1, Сброс
- Добавить отображение достижения лимитов (цветом или текстом)
- Типизировать все callback-функции

**Что практикуем:**
- Generic типы в хуках (`useState<number>`)
- Типизацию функций-обработчиков
- Union types для статусов (например, `'normal' | 'min' | 'max'`)
- Обработку событий с типом `React.MouseEvent`
- Условные типы для вычисляемых значений

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const reset = () => setCount(0);
  
  const isMin = count === 0;
  const isMax = count === 10;
  
  return (
    <div>
      <h3 style={{ color: isMax ? 'red' : 'black' }}>
        Счетчик: {count}
      </h3>
      <button onClick={increment} disabled={isMax}>+</button>
      <button onClick={decrement} disabled={isMin}>-</button>
      <button onClick={reset}>Сброс</button>
      {isMax && <p>Достигнут максимум!</p>}
    </div>
  );
}
```

## 3. **ProductList** - Типизация массивов и объектов

**Задание:**
Создайте типизированный список товаров с фильтрацией и расчетом статистики.

**Описание задания:**
Компонент получает массив товаров, фильтрует их по наличию на складе и рассчитывает общую стоимость.

**Требования:**
- Создать интерфейс `Product` с полями: `id`, `name`, `price`, `inStock` (логическое)
- Принимать пропс `products` типа массив `Product[]`
- Рассчитывать общую стоимость только товаров в наличии
- Показывать количество товаров в наличии и всего
- Добавить возможность переключения: показывать все товары или только в наличии
- Использовать `useState` для хранения состояния фильтра

**Что практикуем:**
- Типизацию массивов объектов (`Product[]`)
- Методы массивов с TypeScript (`filter`, `reduce`, `map`)
- Union types для фильтров (`'all' | 'inStock'`)
- Вычисляемые значения с проверкой типов
- Работу с вложенными интерфейсами

```jsx
function ProductList({ products }) {
  const [filter, setFilter] = React.useState('all');
  
  const filteredProducts = filter === 'inStock' 
    ? products.filter(p => p.inStock)
    : products;
  
  const totalPrice = filteredProducts
    .filter(p => p.inStock)
    .reduce((sum, product) => sum + product.price, 0);
  
  const inStockCount = products.filter(p => p.inStock).length;
  
  return (
    <div>
      <h2>Список товаров</h2>
      
      <div>
        <button onClick={() => setFilter('all')}>Все ({products.length})</button>
        <button onClick={() => setFilter('inStock')}>В наличии ({inStockCount})</button>
      </div>
      
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ color: product.inStock ? 'black' : 'gray' }}>
            {product.name} - {product.price} руб.
            {!product.inStock && ' (нет в наличии)'}
          </li>
        ))}
      </ul>
      
      <p><strong>Общая стоимость товаров в наличии:</strong> {totalPrice} руб.</p>
    </div>
  );
}
```

## 4. **FormInput** - Типизация событий и форм

**Задание:**
Создайте типизированную форму ввода с валидацией и состоянием ошибки.

**Описание задания:**
Компонент формы с полем ввода, валидацией и обработкой submit. Нужно типизировать события и состояния.

**Требования:**
- Использовать `useState` для `text` (строка) и `error` (строка или null)
- Типизировать `handleChange` с `React.ChangeEvent<HTMLInputElement>`
- Типизировать `handleSubmit` с `React.FormEvent`
- Добавить валидацию: минимальная длина 3 символа, запрещенные символы
- Добавить кнопку очистки
- Показывать ошибку под полем ввода

**Что практикуем:**
- Типизацию событий React
- Generic события (`ChangeEvent<HTMLInputElement>`)
- Union types для ошибок (`string | null`)
- Обработку форм с TypeScript
- Условный рендеринг на основе типов

```jsx
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
```

## 5. **ThemeToggle** - Union types и сложные состояния

**Задание:**
Создайте переключатель тем с использованием union types для ограничения возможных значений.

**Описание задания:**
Компонент переключает тему между светлой, темной и автоматической. Значение темы должно быть строго ограничено.

**Требования:**
- Использовать union type для темы: `'light' | 'dark' | 'auto'`
- Хранить тему в состоянии с явной типизацией
- Добавить вычисляемое значение для текущей фактической темы
- Реализовать циклическое переключение (light → dark → auto → light)
- Показывать иконку или текст текущей темы

**Что практикуем:**
- Union types для ограничения значений
- Вычисляемые значения на основе union types
- Циклические перечисления значений
- Типизацию сложных состояний
- Работу с CSS-классами на основе типов

```jsx
function ThemeToggle() {
  const [theme, setTheme] = React.useState('light');
  
  const nextTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('auto');
    else setTheme('light');
  };
  
  const getThemeIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '⚙️';
  };
  
  const getThemeDescription = () => {
    if (theme === 'light') return 'Светлая тема';
    if (theme === 'dark') return 'Темная тема';
    return 'Автоматически';
  };
  
  return (
    <div className={`theme-wrapper ${theme}`}>
      <button onClick={nextTheme}>
        {getThemeIcon()} Переключить тему
      </button>
      <p>Текущая тема: {getThemeDescription()}</p>
    </div>
  );
}
```

## 6. **TodoItem** - Вложенные интерфейсы и callback

**Задание:**
Создайте типизированный компонент задачи (todo item) с callback-функциями.

**Описание задания:**
Компонент отображает задачу с чекбоксом и текстом. Принимает объект задачи и callback для изменения статуса.

**Требования:**
- Создать интерфейс `Todo` с полями: `id`, `text`, `completed`, `createdAt` (дата)
- Принимать пропсы: `todo` (тип `Todo`) и `onToggle` (функция)
- Типизировать `onToggle` как `(id: string | number) => void`
- Добавить отображение даты создания
- Добавить возможность удаления задачи (второй callback)

**Что практикуем:**
- Вложенные интерфейсы
- Типизацию callback-функций в пропсах
- Работу с датами в TypeScript
- Optional chaining для безопасного доступа
- Обработку событий с передачей параметров

```jsx
function TodoItem({ todo, onToggle, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };
  
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)}
      />
      
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1
      }}>
        {todo.text}
      </span>
      
      {todo.createdAt && (
        <small>Создано: {formatDate(todo.createdAt)}</small>
      )}
      
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </div>
  );
}
```

## 7. **UserFilter** - Типизация сложных операций с массивами

**Задание:**
Создайте фильтр пользователей с поиском и сортировкой.

**Описание задания:**
Компонент получает массив пользователей, позволяет фильтровать по имени и сортировать по разным критериям.

**Требования:**
- Создать интерфейс `User` с полями: `id`, `firstName`, `lastName`, `email`, `age`
- Реализовать поиск по имени и фамилии
- Добавить сортировку: по имени, по возрасту, по email
- Использовать union type для критерия сортировки
- Показывать количество найденных пользователей
- Добавить сброс фильтров

**Что практикуем:**
- Сложные операции с массивами в TypeScript
- Generic типы для сортировки
- Union types для критериев
- Мемоизацию вычислений с useMemo
- Работу с составными строками (имя + фамилия)

```jsx
function UserFilter({ users }) {
  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('name');
  
  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase()) || 
           user.email.toLowerCase().includes(search.toLowerCase());
  });
  
  const sortedUsers = filteredUsers.sort((a, b) => {
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
```

## 8. **DataFetcher** - Типизация асинхронных операций

**Задание:**
Создайте компонент для загрузки данных с типизированными состояниями загрузки.

**Описание задания:**
Компонент загружает данные по ID, обрабатывает состояния загрузки, успеха и ошибки.

**Требования:**
- Создать интерфейс `ApiData` для ожидаемых данных
- Использовать union type для состояния: `'idle' | 'loading' | 'success' | 'error'`
- Типизировать данные как `ApiData | null`
- Типизировать ошибку как `Error | null`
- Добавить кнопку повторной загрузки
- Показывать разные UI для каждого состояния

**Что практикуем:**
- Union types для статусов загрузки
- Типизацию асинхронных функций
- Обработку ошибок с TypeScript
- Условный рендеринг на основе union type
- Generic типы для данных API

```jsx
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
```

## 9. **Cart** - Сложные типы и вложенные состояния

**Задание:**
Создайте типизированную корзину товаров с расчетом скидок и налогов.

**Описание задания:**
Компонент управляет корзиной покупок с товарами, скидками и расчетом итоговой суммы.

**Требования:**
- Создать интерфейсы: `CartItem` (товар в корзине) и `Cart` (состояние корзины)
- В `Cart` включить: `items`, `discountCode`, `taxRate`
- Добавить методы: `addItem`, `removeItem`, `applyDiscount`
- Рассчитывать: сумму, скидку, налог, итого
- Добавить валидацию скидочного кода

**Что практикуем:**
- Сложные вложенные интерфейсы
- Типизацию методов изменения состояния
- Вычисляемые значения с учетом всех параметров
- Валидацию на уровне типов
- Работу с числами и форматированием

```jsx
function Cart() {
  const [cart, setCart] = React.useState({
    items: [],
    discountCode: '',
    taxRate: 20
  });
  
  const addItem = (product) => {
    setCart(prev => ({
      ...prev,
      items: [...prev.items, { ...product, quantity: 1 }]
    }));
  };
  
  const removeItem = (itemId) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };
  
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }
    
    setCart(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };
  
  const applyDiscount = (code) => {
    const validCodes = ['SUMMER10', 'WINTER20'];
    const discount = validCodes.includes(code) ? 
      (code === 'SUMMER10' ? 10 : 20) : 0;
    
    setCart(prev => ({ ...prev, discountCode: code }));
    return discount;
  };
  
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cart.discountCode === 'SUMMER10' ? 10 : 
                   cart.discountCode === 'WINTER20' ? 20 : 0;
  const discountAmount = subtotal * (discount / 100);
  const taxAmount = (subtotal - discountAmount) * (cart.taxRate / 100);
  const total = subtotal - discountAmount + taxAmount;
  
  return (
    <div>
      <h2>Корзина покупок</h2>
      
      <div>
        <input
          placeholder="Введите промокод"
          value={cart.discountCode}
          onChange={(e) => applyDiscount(e.target.value)}
        />
      </div>
      
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} руб. × {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      
      <div>
        <p>Товары: {subtotal.toFixed(2)} руб.</p>
        <p>Скидка ({discount}%): -{discountAmount.toFixed(2)} руб.</p>
        <p>Налог ({cart.taxRate}%): {taxAmount.toFixed(2)} руб.</p>
        <h3>Итого: {total.toFixed(2)} руб.</h3>
      </div>
    </div>
  );
}
```

## 10. **MultiStepForm** - Расширенные типы и управление состоянием

**Задание:**
Создайте многошаговую форму с типизированными шагами и сложной валидацией.

**Описание задания:**
Форма состоит из нескольких шагов с разными наборами полей. Каждый шаг имеет свою структуру данных и валидацию.

**Требования:**
- Создать union type для шагов: `'personal' | 'contact' | 'confirmation'`
- Создать интерфейсы для данных каждого шага
- Реализовать навигацию между шагами с валидацией
- Сохранять данные каждого шага в общем состоянии
- Добавить прогресс-бар
- Реализовать отправку всех данных

**Что практикуем:**
- Сложные union types
- Разделенные интерфейсы для разных шагов
- Композицию типов
- Управление сложным состоянием формы
- Валидацию на основе типов
- Работу с перечислениями (enum)

```jsx
function MultiStepForm({ onSubmit }) {
  const [step, setStep] = React.useState('personal');
  const [formData, setFormData] = React.useState({
    personal: { firstName: '', lastName: '', age: '' },
    contact: { email: '', phone: '', city: '' },
    confirmation: { accepted: false }
  });
  
  const [errors, setErrors] = React.useState({});
  
  const validateStep = () => {
    const newErrors = {};
    
    if (step === 'personal') {
      if (!formData.personal.firstName) newErrors.firstName = 'Имя обязательно';
      if (!formData.personal.lastName) newErrors.lastName = 'Фамилия обязательна';
      if (!formData.personal.age || formData.personal.age < 18) newErrors.age = 'Возраст от 18 лет';
    }
    
    if (step === 'contact') {
      if (!formData.contact.email.includes('@')) newErrors.email = 'Некорректный email';
      if (!formData.contact.phone.match(/^\+?[0-9\s\-()]+$/)) newErrors.phone = 'Некорректный телефон';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      if (step === 'personal') setStep('contact');
      else if (step === 'contact') setStep('confirmation');
    }
  };
  
  const prevStep = () => {
    if (step === 'contact') setStep('personal');
    else if (step === 'confirmation') setStep('contact');
  };
  
  const handleSubmit = () => {
    if (formData.confirmation.accepted) {
      onSubmit(formData);
    }
  };
  
  const updateField = (stepName, field, value) => {
    setFormData(prev => ({
      ...prev,
      [stepName]: { ...prev[stepName], [field]: value }
    }));
  };
  
  const steps = ['personal', 'contact', 'confirmation'];
  const currentStepIndex = steps.indexOf(step);
  
  return (
    <div className="multi-step-form">
      <div className="progress-bar">
        {steps.map((s, index) => (
          <div 
            key={s}
            className={`step ${index === currentStepIndex ? 'active' : ''} ${index < currentStepIndex ? 'completed' : ''}`}
          >
            {index + 1}. {s}
          </div>
        ))}
      </div>
      
      <h2>Шаг: {step}</h2>
      
      {step === 'personal' && (
        <div>
          <input
            placeholder="Имя"
            value={formData.personal.firstName}
            onChange={(e) => updateField('personal', 'firstName', e.target.value)}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
          
          <input
            placeholder="Фамилия"
            value={formData.personal.lastName}
            onChange={(e) => updateField('personal', 'lastName', e.target.value)}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
          
          <input
            type="number"
            placeholder="Возраст"
            value={formData.personal.age}
            onChange={(e) => updateField('personal', 'age', e.target.value)}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
      )}
      
      {step === 'contact' && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.contact.email}
            onChange={(e) => updateField('contact', 'email', e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          
          <input
            placeholder="Телефон"
            value={formData.contact.phone}
            onChange={(e) => updateField('contact', 'phone', e.target.value)}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
      )}
      
      {step === 'confirmation' && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.confirmation.accepted}
              onChange={(e) => updateField('confirmation', 'accepted', e.target.checked)}
            />
            Я подтверждаю правильность данных
          </label>
          
          <div className="summary">
            <h3>Проверьте данные:</h3>
            <p>Имя: {formData.personal.firstName} {formData.personal.lastName}</p>
            <p>Email: {formData.contact.email}</p>
          </div>
        </div>
      )}
      
      <div className="form-controls">
        {step !== 'personal' && (
          <button onClick={prevStep}>Назад</button>
        )}
        
        {step !== 'confirmation' ? (
          <button onClick={nextStep}>Далее</button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={!formData.confirmation.accepted}
          >
            Отправить
          </button>
        )}
      </div>
    </div>
  );
}
```