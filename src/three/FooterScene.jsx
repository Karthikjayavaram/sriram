import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';

// An interactive particle wave component
const ParticleWave = () => {
  const pointsRef = useRef();

  // Grid configuration
  const count = 100; // grid size (100x100 = 10,000 particles)
  const sep = 2.5; // separation between particles

  // Memoize positions and colors to avoid recalculation on render
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const col = new Float32Array(count * count * 3);
    
    // Brand colors
    const colorPrimary = new THREE.Color('#3b82f6'); // blue
    const colorSecondary = new THREE.Color('#ff6b00'); // orange

    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        // Center the grid around origin
        const x = sep * (ix - count / 2);
        const y = 0; // Y will be animated in useFrame
        const z = sep * (iy - count / 2);

        pos[i] = x;
        pos[i + 1] = y;
        pos[i + 2] = z;

        // Mix colors based on position
        const mixedColor = colorPrimary.clone().lerp(colorSecondary, ix / count);
        col[i] = mixedColor.r;
        col[i + 1] = mixedColor.g;
        col[i + 2] = mixedColor.b;

        i += 3;
      }
    }

    return [pos, col];
  }, []);

  // Animate particles to form a flowing wave
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime() * 0.5;
    const posAttribute = pointsRef.current.geometry.attributes.position;
    const positionsArray = posAttribute.array;
    
    // Mouse interaction parameters
    // Normalize pointer from -5 to 5 roughly for influence
    const mouseX = state.pointer.x * 5;
    const mouseY = state.pointer.y * 5;

    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        const x = sep * (ix - count / 2);
        const z = sep * (iy - count / 2);
        
        // Complex sine wave based on time, position, and subtle mouse influence
        // We use Math.sin on the base coordinates plus time to simulate a rolling wave
        const waveX = Math.sin((ix * 0.1) + time) * 3;
        const waveZ = Math.sin((iy * 0.1) + time) * 3;
        
        // Add a subtle bump where the mouse is pointing (simulated by adding mouseX/Y influence)
        // Since pointer is normalized -1 to 1, we just skew the whole wave slightly
        const mouseInfluence = Math.sin(x * 0.05 + mouseX) * Math.sin(z * 0.05 + mouseY) * 2;
        
        positionsArray[i + 1] = waveX + waveZ + mouseInfluence - 10; // Drop it down a bit
        i += 3;
      }
    }

    // Flag update required
    posAttribute.needsUpdate = true;
    
    // Slowly rotate the entire system
    pointsRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Floating Abstract Geometry Component
const FloatingGeometries = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if(!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.z = time * 0.05;
    groupRef.current.position.y = Math.sin(time * 0.5) * 3 + 5;
  });

  return (
    <group ref={groupRef} position={[0, 5, -30]}>
      {/* Central glowing core */}
      <mesh>
        <icosahedronGeometry args={[6, 1]} />
        <meshBasicMaterial color="#ff6b00" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Outer rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12, 0.05, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[18, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

const FooterScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto opacity-60">
      <Canvas 
        camera={{ position: [0, 15, 40], fov: 60 }}
        dpr={[1, 2]} // Optimize for higher pixel density screens but cap at 2
        gl={{ alpha: true, antialias: false }} // alpha true allows CSS background to show through
      >
        <ParticleWave />
        <FloatingGeometries />
        
        {/* Control limitations so user can peek around slightly on drag without breaking composition */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.1} // Prevent looking directly under
          minPolarAngle={Math.PI / 3}   // Prevent looking from directly top
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FooterScene;
