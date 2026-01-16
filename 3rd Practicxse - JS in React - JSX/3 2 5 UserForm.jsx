// UserForm.jsx Формы и управление состоянием
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