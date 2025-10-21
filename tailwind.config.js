module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme (AMOLED)
        amoled: '#000000',
        darkGray: '#1a1a1a',
        crimson: '#DC143C',
        blood: '#8B0000',
        scarlet: '#DC143C',
        
        // Light Theme
        lightBg: '#FFFFFF',
        lightGray: '#F5F5F5',
        darkText: '#1a1a1a',
        
        // Dynamic theme colors (use CSS variables in components instead)
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
      },
      fontFamily: {
        cyber: ['Orbitron', 'monospace'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-red': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(220, 20, 60, 0.7)',
          },
          '50%': { 
            boxShadow: '0 0 0 15px rgba(220, 20, 60, 0)',
          },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
