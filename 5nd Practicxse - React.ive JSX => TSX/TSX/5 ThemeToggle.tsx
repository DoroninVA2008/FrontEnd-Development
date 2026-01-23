import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState<string>('light');
  
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