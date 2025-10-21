import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './context/ThemeContext';
import Loading from './components/Loading';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const bgMusicRef = useRef(null);
  const audioInitialized = useRef(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Initialize background music ONCE on mount
  useEffect(() => {
    if (!audioInitialized.current) {
      bgMusicRef.current = new Audio('/assets/sounds/TheKillingMoon.mp3');
      bgMusicRef.current.volume = 0.3;
      bgMusicRef.current.loop = true;
      audioInitialized.current = true;

      // Try autoplay
      const attemptPlay = () => {
        bgMusicRef.current.play().catch(err => {
          console.log('Autoplay blocked, waiting for interaction:', err);
        });
      };

      attemptPlay();

      // Fallback: play on first interaction
      const playOnInteraction = () => {
        if (bgMusicRef.current && bgMusicRef.current.paused && !isMuted) {
          bgMusicRef.current.play().catch(err => console.log('Play failed:', err));
        }
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
      };

      document.addEventListener('click', playOnInteraction);
      document.addEventListener('keydown', playOnInteraction);
    }

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
        audioInitialized.current = false;
      }
    };
  }, []);

  // Handle mute/unmute with proper state management
  useEffect(() => {
    if (bgMusicRef.current && audioInitialized.current) {
      if (isMuted) {
        bgMusicRef.current.pause();
      } else {
        // Only play if paused
        if (bgMusicRef.current.paused) {
          bgMusicRef.current.play().catch(err => {
            console.log('Resume music failed:', err);
          });
        }
      }
    }
  }, [isMuted]);

  // Custom cursor effect with dynamic color
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 rounded-full pointer-events-none z-[10000] mix-blend-difference';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Update cursor color based on theme
    const updateCursorColor = () => {
      const style = getComputedStyle(document.documentElement);
      const color = style.getPropertyValue('--primary-color').trim();
      if (color) {
        cursor.style.background = color;
      } else {
        cursor.style.background = theme === 'dark' ? '#DC143C' : '#8B0000';
      }
    };

    updateCursorColor();

    // Listen for color theme changes
    const observer = new MutationObserver(updateCursorColor);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-color-theme'] 
    });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', moveCursor);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, [theme]);

  // Global click sound for all buttons (with mute check)
  useEffect(() => {
    const playClickSound = (e) => {
      const target = e.target.closest('button, a.red-button, .red-button, .theme-toggle');
      
      if (target && !isMuted) {
        const audio = new Audio('/assets/sounds/click.mp3');
        audio.volume = 0.3;
        audio.play().catch(err => {
          console.log('Click sound prevented:', err);
        });
      }
    };

    document.addEventListener('click', playClickSound);

    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, [isMuted]);

  // Content protection (text + images)
  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent copy/select shortcuts
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
      }
    };

    // Prevent image drag
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Prevent image context menu (extra protection)
    const handleImageContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  if (isLoading) {
    return <Loading onLoadingComplete={() => setIsLoading(false)} isMuted={isMuted} setIsMuted={setIsMuted} />;
  }

  return (
    <div className="App relative">
      <div className="grid-bg"></div>
      <Header isMuted={isMuted} setIsMuted={setIsMuted} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
