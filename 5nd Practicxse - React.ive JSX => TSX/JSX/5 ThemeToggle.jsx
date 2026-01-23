type Theme = 'light' | 'dark' | 'auto';

function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light');
  
  const nextTheme = (): void => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('auto');
    else setTheme('light');
  };
  
  const getThemeIcon = (): string => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '⚙️';
  };
  
  const getThemeDescription = (): string => {
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