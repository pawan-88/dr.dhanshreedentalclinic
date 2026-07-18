"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SmileArc() {
  const group = useRef<THREE.Group>(null);
  const teeth = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => ({
        x: (index - 2) * 0.42,
        y: -0.95 + Math.abs(index - 2) * 0.08,
        z: -0.35 + Math.abs(index - 2) * 0.05,
        scale: index === 2 ? 0.22 : 0.17,
      })),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08;
    group.current.position.y = -0.15 + Math.sin(state.clock.elapsedTime * 0.9) * 0.04;
  });

  return (
    <group ref={group} position={[0, -0.55, 0.15]}>
      {teeth.map((tooth, index) => (
        <mesh key={index} position={[tooth.x, tooth.y, tooth.z]} scale={tooth.scale}>
          <capsuleGeometry args={[0.42, 0.55, 8, 16]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.16} clearcoat={0.7} clearcoatRoughness={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function ToothModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.28 + state.pointer.x * 0.18;
    group.current.rotation.x = -0.08 + state.pointer.y * 0.12;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
  });

  return (
    <group ref={group} scale={1.08}>
      <mesh castShadow receiveShadow position={[0, 0.35, 0]} scale={[0.92, 0.92, 0.72]}>
        <sphereGeometry args={[1, 56, 40]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.18}
          metalness={0}
          clearcoat={0.75}
          clearcoatRoughness={0.16}
          transmission={0.08}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.38, -0.62, 0.05]} scale={[0.34, 0.98, 0.31]}>
        <sphereGeometry args={[1, 40, 28]} />
        <meshPhysicalMaterial color="#f8fbff" roughness={0.22} clearcoat={0.55} />
      </mesh>
      <mesh castShadow receiveShadow position={[0.38, -0.62, 0.05]} scale={[0.34, 0.98, 0.31]}>
        <sphereGeometry args={[1, 40, 28]} />
        <meshPhysicalMaterial color="#f8fbff" roughness={0.22} clearcoat={0.55} />
      </mesh>
      <mesh position={[0, 0.96, 0.5]} scale={[0.48, 0.1, 0.08]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#dff7ff" roughness={0.2} transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, 0.1, 0.75]} rotation={[Math.PI / 2, 0, 0]} scale={[0.62, 0.2, 0.62]}>
        <torusGeometry args={[1, 0.025, 16, 80]} />
        <meshStandardMaterial color="#e7c873" emissive="#c9a24b" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function FloatingTool({
  position,
  rotation,
  color,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * speed) * 0.08;
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.12;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={0.82}>
      <mesh castShadow>
        <cylinderGeometry args={[0.045, 0.045, 1.15, 24]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.67, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.17, 0.016, 16, 42]} />
        <meshStandardMaterial color="#e0f2fe" metalness={0.35} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.68, 0]} scale={[0.08, 0.24, 0.08]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#93c5fd" emissive="#2563eb" emissiveIntensity={0.18} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 120;
    const buffer = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 2.1 + Math.random() * 2.4;
      const angle = Math.random() * Math.PI * 2;
      buffer[index * 3] = Math.cos(angle) * radius;
      buffer[index * 3 + 1] = (Math.random() - 0.5) * 3.6;
      buffer[index * 3 + 2] = Math.sin(angle) * radius;
    }

    return buffer;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.035;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.038} color="#e7c873" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  const rig = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!rig.current) return;
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, state.pointer.x * 0.12, 0.04);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -state.pointer.y * 0.08, 0.04);
  });

  return (
    <group ref={rig}>
      <ParticleField />
      <ToothModel />
      <SmileArc />
      <FloatingTool position={[-1.85, 0.45, -0.25]} rotation={[0.28, 0.1, -0.58]} color="#e7c873" speed={1.1} />
      <FloatingTool position={[1.88, -0.04, -0.35]} rotation={[-0.2, 0.1, 0.62]} color="#a5f3fc" speed={1.35} />
      <mesh position={[1.28, 1.28, -0.65]} rotation={[0.7, 0.3, 0.1]}>
        <torusKnotGeometry args={[0.16, 0.025, 90, 10]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.28} />
      </mesh>
      <mesh position={[-1.2, -1.22, -0.55]} rotation={[0.4, 0.2, -0.1]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#6366f1" emissiveIntensity={0.18} roughness={0.25} />
      </mesh>
    </group>
  );
}

export default function PremiumDentalScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.25]}
      camera={{ position: [0, 0.1, 5.1], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={2} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={2.2} color="#67e8f9" />
        <pointLight position={[2, -2, 3]} intensity={1.8} color="#e7c873" />
        <pointLight position={[0, 3, -2]} intensity={1.1} color="#a78bfa" />
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
