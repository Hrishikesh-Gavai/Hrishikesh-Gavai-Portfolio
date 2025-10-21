import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // dark/light
  const [colorTheme, setColorTheme] = useState('purple'); // Changed from 'red' to 'purple'

  // Load saved themes from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColorTheme = localStorage.getItem('colorTheme') || 'purple'; // Changed default
    setTheme(savedTheme);
    setColorTheme(savedColorTheme);
    document.body.className = savedTheme;
    document.documentElement.setAttribute('data-color-theme', savedColorTheme);
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  // Change color theme
  const changeColorTheme = (newColorTheme) => {
    setColorTheme(newColorTheme);
    document.documentElement.setAttribute('data-color-theme', newColorTheme);
    localStorage.setItem('colorTheme', newColorTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorTheme, changeColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
