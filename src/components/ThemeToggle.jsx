import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="red-button flex items-center space-x-1 px-2 sm:px-3 py-2 text-xs"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={18} />
          <span className="hidden md:inline">LIGHT</span>
        </>
      ) : (
        <>
          <Moon size={18} />
          <span className="hidden md:inline">DARK</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
