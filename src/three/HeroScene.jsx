import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, Center, useMatcapTexture } from '@react-three/drei';
import * as THREE from 'three';

// An abstract Book component
const Book = ({ position, rotation, color }) => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position} rotation={rotation}>
      <group>
        {/* Pages */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.2, 2]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.5} />
        </mesh>
        {/* Cover */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.6, 0.25, 2.1]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

// Abstract graduation cap
const GradCap = ({ position, rotation }) => {
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5} position={position} rotation={rotation}>
      <group>
        <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 4]} />
          <meshStandardMaterial color="#0a2540" roughness={0.2} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[1.5, 0.05, 1.5]} />
          <meshStandardMaterial color="#0a2540" roughness={0.2} metalness={0.5} />
        </mesh>
        <mesh position={[0.6, 0.2, 0.6]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshStandardMaterial color="#ff6b00" />
        </mesh>
      </group>
    </Float>
  );
};

// Floating achievement spheres/particles
const Particles = () => {
  const particlesRef = useRef();
  
  useFrame(({ clock }) => {
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={particlesRef}>
      {[...Array(20)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.05 + Math.random() * 0.1, 16, 16]} />
          <meshStandardMaterial 
            color={Math.random() > 0.5 ? '#ff6b00' : '#3b82f6'} 
            emissive={Math.random() > 0.5 ? '#ff6b00' : '#3b82f6'} 
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Abstract structure representing pillars of success / institution
const Pillars = () => {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    groupRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, -2, -2]}>
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 4, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 4, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.3} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 4, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.3} />
      </mesh>
    </group>
  );
}

const HeroSceneContext = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
      <pointLight position={[10, -5, 10]} intensity={1} color="#ff6b00" />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Book position={[-2, 1, 0]} rotation={[0.4, 0.5, -0.2]} color="#0a2540" />
      <Book position={[2, -1, 1]} rotation={[-0.2, -0.6, 0.3]} color="#3b82f6" />
      <Book position={[0, 2, -2]} rotation={[0.5, 0, 0.1]} color="#ff6b00" />
      
      <GradCap position={[0, 0, 1.5]} rotation={[0.2, 0.4, -0.1]} />
      
      <Pillars />
      <Particles />

      {/* Central glowing orb - representing focus/knowledge */}
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#3b82f6" 
          emissiveIntensity={0.5} 
          roughness={0.2} 
          metalness={0.8}
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Remove OrbitControls to let the scene be ambient, or restrict it */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate={true} 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 2 + 0.2} 
        minPolarAngle={Math.PI / 2 - 0.2}
      />
    </>
  );
};

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-80" style={{ pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <HeroSceneContext />
      </Canvas>
    </div>
  );
}
