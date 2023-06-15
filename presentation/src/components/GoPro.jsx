/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 uploads_files_3283899_gopro+hero+10+black.glb --transform --shadows
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function GoPro(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y -= delta / 2;
  });
  const { nodes, materials } = useGLTF(
    "/models/uploads_files_3283899_gopro+hero+10+black-transformed.glb"
  );
  return (
    <group {...props} dispose={null} ref={mesh}>
      <group
        position={[2.504, 2.162, 0.314]}
        rotation={[2.026, -0.306, -3.048]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["indicator 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5.geometry}
          material={materials.lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.mode}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          material={materials.backdisplay1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/uploads_files_3283899_gopro+hero+10+black-transformed.glb");
