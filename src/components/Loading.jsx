import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';
import { Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

// Helper function to get current color theme
const getColorThemeRGB = () => {
  const colorTheme = document.documentElement.getAttribute('data-color-theme') || 'purple';
  const colorMap = {
    red: { primary: [220, 20, 60], secondary: [139, 0, 0] },
    purple: { primary: [156, 39, 176], secondary: [106, 27, 154] },
    yellow: { primary: [255, 193, 7], secondary: [245, 124, 0] },
    cyan: { primary: [0, 188, 212], secondary: [0, 131, 143] },
  };
  return colorMap[colorTheme] || colorMap.purple;
};

// Interactive Starfield that follows cursor + auto-rotates
function InteractiveStarfield({ mousePosition }) {
  const { theme } = useTheme();
  const starsRef = useRef();
  const starCount = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.001;
      starsRef.current.rotation.y += 0.002;
      starsRef.current.rotation.z += 0.0008;

      if (mousePosition.current) {
        starsRef.current.rotation.y += mousePosition.current.x * 0.01;
        starsRef.current.rotation.x += mousePosition.current.y * 0.01;
      }
    }
  });

  return (
    <points ref={starsRef} geometry={starGeometry}>
      <pointsMaterial
        size={0.15}
        color={new THREE.Color(theme === 'dark' ? '#ffffff' : '#000000')}
        transparent={false}
        opacity={1.0}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Dynamic color particles with auto-rotation + cursor
function DynamicParticles({ mousePosition }) {
  //const { theme } = useTheme();
  const particlesRef = useRef();
  const particleCount = 800;
  const [particleColor, setParticleColor] = useState('#9C27B0');

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  // Update particle color based on theme
  useEffect(() => {
    const updateColor = () => {
      const style = getComputedStyle(document.documentElement);
      const color = style.getPropertyValue('--primary-color').trim();
      setParticleColor(color || '#9C27B0');
    };

    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-color-theme'] });

    return () => observer.disconnect();
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.003;

      if (mousePosition.current) {
        particlesRef.current.rotation.y += mousePosition.current.x * 0.02;
        particlesRef.current.rotation.x += mousePosition.current.y * 0.02;
      }
    }
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.02}
        color={new THREE.Color(particleColor)}
        transparent={false}
        opacity={1.0}
        sizeAttenuation={true}
      />
    </points>
  );
}

const Loading = ({ onLoadingComplete, isMuted, setIsMuted }) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => {
          if (onLoadingComplete) onLoadingComplete();
        },
      });
    }
  }, [progress, onLoadingComplete]);

  const colors = getColorThemeRGB();
  const primaryRGB = colors.primary;
  const secondaryRGB = colors.secondary;

  return (
    <div className="loading-screen fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Mute button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-8 right-8 z-[10001] transition-all duration-300 hover:scale-110"
        style={{ color: `var(--primary-color)` }}
        aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
      >
        {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
      </button>

      {/* Interactive Starfield Background - NO OrbitControls */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF' }}
      >
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight 
            position={[10, 10, 10]} 
            intensity={1} 
            color={new THREE.Color(`rgb(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]})`)} 
          />
          
          <InteractiveStarfield mousePosition={mousePosition} />
          <DynamicParticles mousePosition={mousePosition} />
          
          {/* REMOVED OrbitControls - this was causing the error */}
        </Canvas>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center px-4">
        {/* NERV Logo */}
        <div className="mb-16">
          <h1 
            className="text-7xl sm:text-9xl font-cyber font-black tracking-widest"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: `rgb(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]})`,
              textShadow: theme === 'dark' 
                ? `0 0 30px rgba(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]}, 0.5)`
                : `0 0 20px rgba(${secondaryRGB[0]}, ${secondaryRGB[1]}, ${secondaryRGB[2]}, 0.3)`,
            }}
          >
            N.E.R.V
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-lg mx-auto">
          <div 
            className="h-1 rounded-full overflow-hidden"
            style={{
              background: theme === 'dark' 
                ? `rgba(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]}, 0.1)` 
                : `rgba(${secondaryRGB[0]}, ${secondaryRGB[1]}, ${secondaryRGB[2]}, 0.1)`,
            }}
          >
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                background: theme === 'dark' 
                  ? `rgb(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]})` 
                  : `rgb(${secondaryRGB[0]}, ${secondaryRGB[1]}, ${secondaryRGB[2]})`,
              }}
            ></div>
          </div>
          
          {/* Progress Percentage */}
          <p 
            className={`font-mono text-sm mt-6 tracking-wider ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}
          >
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
