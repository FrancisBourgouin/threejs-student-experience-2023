import { useRef, useState } from "react";
import "./App.css";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

// Moon is 4 times smaller than earth
// Moon is 384000km away

function Space() {
  const three = useThree();
  const texture = useTexture("/nebula_hdr.png");
  three.scene.background = texture;

  return null;
}

// 360deg / 2Pi rad

function Earth() {
  const mesh = useRef();
  const texture = useTexture("/8k_earth_daymap.jpg");
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 4;
  });

  return (
    <mesh rotation={[0, 0, 0]} ref={mesh}>
      <sphereGeometry args={[10, 32, 16]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
}

function Moon() {
  const mesh = useRef();
  const texture = useTexture("/8k_moon_true.jpg");
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 4;

    mesh.current.position.x = Math.cos(state.clock.elapsedTime / 2) * 60;
    mesh.current.position.z = Math.sin(state.clock.elapsedTime / 2) * 60;
  });

  return (
    <mesh rotation={[0, 0, 0]} ref={mesh} position={[60, 0, 0]}>
      <sphereGeometry args={[2.5, 32, 16]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
          {/* <ambientLight /> */}
          <pointLight position={[-500, 0, 0]} />

          <Space />
          <Earth />
          <Moon />

          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
