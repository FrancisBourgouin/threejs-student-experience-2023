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
import IcosahedronElement from "../components/IcosahedronElement";

export default function SlideObjects(props) {
  const code = `
  // In Three.js
  const cylinderGeo = new THREE.CylinderGeometry();
  const icosahedronGeo = new THREE.IcosahedronGeometry();

  const basicMaterial = new THREE.MeshBasicMaterial();
  const phongMaterial = new THREE.MeshPhongMaterial();

  const cylinder = new THREE.Mesh( cylinderGeo, basicMaterial );
  scene.add(cylinder)

  // In React Three Fiber
  <mesh>
    <icosahedronGeometry args={[10,0]} />
    <meshPhongMaterial color={"hotpink"} />
  </mesh>
  `;
  return (
    <section className="Slide SlideObjects">
      <header>
        <h1>FINALLY, SOME OBJECTS</h1>

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
          {/* <GoPro position={[0, 0, 0]} scale={1} /> */}

          {/* <Lamp position={[0, 10, 0]} scale={2} rotation={[-Math.PI, Math.PI / 2, 0]} /> */}
          <IcosahedronElement />
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}
