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