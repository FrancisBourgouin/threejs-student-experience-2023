import Earth from "../components/Earth";
import { useState, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";
import EarthCloud from "../components/EarthClouds";
import Lamp from "../components/Lamp";
import GoPro from "../components/GoPro";

export default function SlideBuild(props) {
  return (
    <section className="Slide SlideBuild">
      <header>
        <h1>LET'S BUILD SOMETHING</h1>
      </header>
      <div>
        <Canvas camera={{ fov: 75, near: 3, far: 10000, position: [0, 0, 100] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <EarthCloud position={[0, 0, 0]} scale={0.1} />

          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}
