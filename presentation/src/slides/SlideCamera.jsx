import Earth from "../components/Earth";
import { useState, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";
import EarthCloud from "../components/EarthClouds";
import Lamp from "../components/Lamp";
import GoPro from "../components/GoPro";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

export default function SlideCamera(props) {
  const code = `
  // In Three.js
  const orthographicCamera = new THREE.OrthographicCamera()
  const perspectiveCamera = new THREE.PerspectiveCamera()
  const stereoCamera = new THREE.StereoCamera()

  // In React Three Fiber
  <orthographicCamera />
  <perspectiveCamera />
  <stereoCamera />
  `;
  return (
    <section className="Slide SlideCamera">
      <header>
        <h1>ADD A CAMERA</h1>

        {/* <CopyBlock text={code} language={"JS"} showLineNumbers={false} wrapLines /> */}
        <SyntaxHighlighter language="js" style={a11yDark}>
          {code}
        </SyntaxHighlighter>
      </header>
      <div>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 11] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Earth position={[0, 0, 0]} scale={0.1} /> */}
          {/* <EarthCloud position={[0, 0, 0]} scale={0.1} /> */}
          <GoPro position={[0, 0, 0]} scale={1} />

          {/* <Lamp position={[0, 10, 0]} scale={2} rotation={[-Math.PI, Math.PI / 2, 0]} /> */}

          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}
