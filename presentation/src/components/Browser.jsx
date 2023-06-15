import { useState, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";

function Box(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x -= delta;
    mesh.current.rotation.y += delta;
  });
  return (
    <mesh {...props} ref={mesh} scale={0.8}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}
function Triangle(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });
  return (
    <mesh {...props} ref={mesh} scale={0.7}>
      <coneGeometry args={[2, 3, 4]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}
function Cylinder(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta;
    mesh.current.rotation.y += delta;
  });
  return (
    <mesh {...props} ref={mesh} scale={0.8}>
      <cylinderGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function ThreeDFrame(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[7, 7, 0.5]} />
      <meshStandardMaterial color={"#CFECFE"} />
      {props.children}
    </mesh>
  );
}
function WindowFrame(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[14, 16, 0.5]} />
      <meshStandardMaterial color={"white"} toneMapped={false} />
      {props.children}
    </mesh>
  );
}
function BrowserFrame(props) {
  const mesh = useRef();
  const [base, setBase] = useState(0);
  const angleY = 2 * Math.PI * -0.03 + Math.PI * 2 * base;
  const angleX = 2 * Math.PI * 0.01;
  const { angle } = useSpring({
    angle: [angleX, angleY, 0],
    config: { mass: 30, friction: 50, tension: 50 },
  });

  return (
    <animated.mesh
      {...props}
      rotation={angle}
      ref={mesh}
      scale={1}
      onClick={() => setBase(base + 1)}
    >
      <boxGeometry args={[15, 18, 0.5]} />
      <meshStandardMaterial color={"grey"} toneMapped={false} />
      {props.children}
    </animated.mesh>
  );
}
function SphereButton(props) {
  const mesh = useRef();
  const { color } = props;
  return (
    <mesh {...props} ref={mesh} scale={0.3}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} toneMapped={false} />
      {props.children}
    </mesh>
  );
}
function SearchBar(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[10, 1, 0.5]} />
      <meshStandardMaterial color={"#f0f0f0"} toneMapped={false} />
      <Text
        color="#666"
        anchorX="left"
        anchorY="top"
        position={[-4.5, 0.2, 0.3]}
        scale={0.7}
      >
        http://nothostedyet.online
      </Text>
    </mesh>
  );
}

function TopFrame(props) {
  const { position } = props;
  const spherePos1 = [...position];
  spherePos1[0] = position[0] + 6;
  const spherePos2 = [...position];
  spherePos2[0] = position[0] + 7.1;
  const spherePos3 = [...position];
  spherePos3[0] = position[0] + 8.2;
  return (
    <>
      <SearchBar position={position} />
      <SphereButton position={spherePos1} color="#E81C13" />
      <SphereButton position={spherePos2} color="#FFE017" />
      <SphereButton position={spherePos3} color="#0CE838" />
    </>
  );
}

function Browser() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 20] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <BrowserFrame>
          <TopFrame position={[-2, 8.25, 0.25]} />
          <WindowFrame position={[0, -0.5, 0.25]}>
            <ThreeDFrame position={[3, 4, 0.25]} />
            <Box position={[1, 2.5, 2]} />
            <Triangle position={[4, 2, 2]} />
            <Cylinder position={[2.5, 5, 2]} />
            <Text
              color="black"
              anchorX="left"
              anchorY="middle"
              position={[-6.5, 4, 0.3]}
              scale={1.3}
            >
              {"3D in the\nBrowser !"}
            </Text>
            <Text
              color="black"
              anchorX="left"
              anchorY="top"
              position={[-6.5, -0.25, 0.3]}
              scale={0.6}
            >
              {
                "This is definitely something that you will all read\non the page and it's great, because we will talk\nabout the joys of Three.js, React Three Fiber, \nand how to work with some GLTF files and\nother things that are great!"
              }
            </Text>
            <Text
              color="black"
              anchorX="left"
              anchorY="top"
              position={[-6.5, -4, 0.3]}
              scale={0.6}
            >
              {
                "I got asked to build a toaster and some toasts in \n3D, that seems fun, but it's more of a modeling \nchallenge that I will probably do as a future break \nvideo because it could be fun to do for sure!"
              }
            </Text>
          </WindowFrame>
        </BrowserFrame>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Browser;
