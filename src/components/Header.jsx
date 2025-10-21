import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Home, User, Briefcase, Award, Mail, Volume2, VolumeX, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = ({ isMuted, setIsMuted }) => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, colorTheme, changeColorTheme } = useTheme();

  const navItems = [
    { name: 'HOME', path: '/', icon: Home },
    { name: 'ABOUT', path: '/about', icon: User },
    { name: 'PROJECTS', path: '/projects', icon: Briefcase },
    { name: 'CERTIFICATIONS', path: '/certifications', icon: Award },
    { name: 'CONTACT', path: '/contact', icon: Mail },
  ];

  const colorThemes = [
    { name: 'Red', value: 'red', color: '#DC143C' },
    { name: 'Purple', value: 'purple', color: '#9C27B0' },
    { name: 'Yellow', value: 'yellow', color: '#FFC107' },
    { name: 'Cyan', value: 'cyan', color: '#00BCD4' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b-2 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-amoled bg-opacity-90'
          : 'bg-lightBg bg-opacity-90'
      }`}
      style={{
        boxShadow:
          theme === 'dark'
            ? `0 0 20px rgba(var(--primary-color-rgb), 0.3)`
            : `0 2px 10px rgba(var(--primary-color-rgb), 0.2)`,
        borderColor: `var(--primary-color)`,
      }}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-5 max-w-7xl mx-auto">
        {/* Logo - Responsive */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <Terminal
            className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:animate-pulse"
            style={{ color: `var(--primary-color)` }}
          />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-cyber font-bold tracking-wider neon-text">
            <span className="hidden sm:inline">HRISHIKESH - </span>N.E.R.V
          </span>
        </Link>

        {/* 4 buttons - Icons always visible, text hidden on mobile */}
        <div className="flex items-center space-x-2 relative">
          {/* Color Theme Picker */}
          <div className="relative">
            <button
              onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
              className="red-button flex items-center space-x-1 px-2 sm:px-3 py-2 text-xs"
              aria-label="Change color theme"
            >
              <Palette size={18} />
              <span className="hidden md:inline">THEME</span>
            </button>

            {/* Theme Dropdown (FORCE EXPLICIT SIZE) */}
            {isColorMenuOpen && (
              <div
                className="absolute top-full right-0 mt-4 backdrop-blur-lg shadow-xl rounded border-2"
                style={{ 
                  borderColor: `var(--primary-color)`,
                  backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.95)',
                  width: '128px',
                  minWidth: '128px',
                  height: '128px',
                  minHeight: '128px',
                  padding: '12px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 48px)',
                  gridTemplateRows: 'repeat(2, 48px)',
                  gap: '8px'
                }}>
                  {colorThemes.map((ct) => (
                    <button
                      key={ct.value}
                      onClick={() => {
                        changeColorTheme(ct.value);
                        setIsColorMenuOpen(false);
                      }}
                      className={`color-square${colorTheme === ct.value ? ' active' : ''}`}
                      style={{ backgroundColor: ct.color }}
                      aria-label={`Switch to ${ct.name} theme`}
                      title={ct.name}
                    ></button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="red-button flex items-center space-x-1 px-2 sm:px-3 py-2 text-xs"
            aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            <span className="hidden md:inline">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Menu Toggle */}
          <button
            className="red-button flex items-center space-x-1 px-2 sm:px-3 py-2 text-xs"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden md:inline">MENU</span>
          </button>

          {/* Navigation Dropdown */}
          {isMenuOpen && (
            <div
              className={`absolute top-full right-0 mt-4 w-64 border-2 backdrop-blur-lg shadow-xl ${
                theme === 'dark'
                  ? 'bg-amoled bg-opacity-95'
                  : 'bg-lightBg bg-opacity-95'
              }`}
              style={{ borderColor: `var(--primary-color)` }}
            >
              <ul className="py-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 px-5 py-3 transition-all duration-300 font-cyber font-bold text-sm"
                        style={{
                          color: location.pathname === item.path 
                            ? `var(--primary-color)` 
                            : (theme === 'dark' ? '#fff' : '#1a1a1a'),
                          backgroundColor: location.pathname === item.path 
                            ? `rgba(var(--primary-color-rgb), 0.1)` 
                            : 'transparent',
                        }}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
