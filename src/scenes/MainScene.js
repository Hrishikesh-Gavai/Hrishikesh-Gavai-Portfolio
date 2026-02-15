import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

// Starfield Background
function Starfield() {
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
      // 3D rotation for depth perception
      starsRef.current.rotation.x += 0.0003;
      starsRef.current.rotation.y += 0.0008;
      starsRef.current.rotation.z += 0.0002;
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

// Dynamic Color Particles
function DynamicParticles() {
  //const { theme } = useTheme();
  const particlesRef = useRef();
  const particleCount = 800;
  const [particleColor, setParticleColor] = useState('#9C27B0'); // Purple default

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
    // Listen for color theme changes
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-color-theme'] });

    return () => observer.disconnect();
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
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

const MainScene = () => {
  const { theme } = useTheme();
  const [lightColor, setLightColor] = useState('#9C27B0'); // Purple default

  // Update light color based on theme
  useEffect(() => {
    const updateColor = () => {
      const style = getComputedStyle(document.documentElement);
      const color = style.getPropertyValue('--primary-color').trim();
      setLightColor(color || '#9C27B0');
    };

    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-color-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="absolute inset-0 z-5" 
      style={{ backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF' }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color={new THREE.Color(lightColor)} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={new THREE.Color(lightColor)} />
        
        {/* Starfield + Dynamic Particles */}
        <Starfield />
        <DynamicParticles />
        
        {/* OrbitControls with manual + auto rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default MainScene;
