import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import gsap from 'gsap';
import anime from 'animejs';
import MainScene from '../scenes/MainScene';

const HomePage = () => {
  const { theme } = useTheme();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, rotationX: -45 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: 'power4.out' }
    );

    anime({
      targets: subtitleRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutExpo',
      delay: 800,
    });

    gsap.fromTo(
      ctaRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1.2,
      }
    );

    // Disable text selection on homepage
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden no-select">
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 pb-16">
        {/* 3D Scene - Full visibility */}
        <div className="absolute inset-0 z-0">
          <MainScene />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto">
          {/* Centered Single Column */}
          <div className="text-center space-y-6 animate-slide-in">
            {/* Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 text-xs sm:text-sm font-mono uppercase tracking-wider neon-border neon-text animate-pulse">
                <Terminal className="w-4 h-4 mr-2" />
                Full Stack Developer
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cyber font-black leading-none glitch-text"
              data-text="HRISHIKESH GAVAI"
            >
              <span className="block neon-text">HRISHIKESH</span>
              <span className="block neon-text mt-2">GAVAI</span>
            </h1>

            {/* Subtitle */}
            <div ref={subtitleRef}>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono leading-relaxed max-w-4xl mx-auto"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}
              >
                <span className="neon-text font-bold">Computer Engineering</span> undergrad{' '}
                <span className="neon-text font-bold">(CSE '27)</span>
                <br />
                Crafting intelligent systems & immersive digital experiences
              </p>
            </div>

            {/* CTA Buttons - Equal width on all screens */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch pt-2 w-full max-w-md mx-auto sm:max-w-none">
              <Link 
                to="/projects" 
                className="red-button inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg flex-1 sm:flex-initial sm:min-w-[240px]"
              >
                <span className="inline-block">VIEW PROJECTS</span>
                <ChevronRight className="w-5 h-5 inline-block ml-2" style={{ verticalAlign: 'middle' }} />
              </Link>
              <Link 
                to="/contact" 
                className="red-button inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg flex-1 sm:flex-initial sm:min-w-[240px]"
              >
                <span className="inline-block">GET IN TOUCH</span>
                <Sparkles className="w-5 h-5 inline-block ml-2" style={{ verticalAlign: 'middle' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
