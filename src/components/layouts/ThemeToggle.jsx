import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
    
    // Toggle Tailwind's dark mode class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300
                bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                flex items-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`absolute w-5 h-5 rounded-full bg-white dark:bg-gray-300 shadow-md transform transition-transform duration-300 ${
        theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === 'dark' ? (
            <FiMoon className="w-3.5 h-3.5 text-gray-800" />
          ) : (
            <FiSun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </div>
      </div>
      
      {/* Visual indicators */}
      <div className="flex w-full justify-between px-1.5 text-xs">
        <span className={`${theme === 'light' ? 'text-amber-500' : 'text-gray-400'}`}>
          <FiSun className="w-3.5 h-3.5" />
        </span>
        <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`}>
          <FiMoon className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
}
