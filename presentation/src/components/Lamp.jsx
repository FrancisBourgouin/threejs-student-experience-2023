/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 uploads_files_3099242_lamp_3tubes.glb --transform --shadows
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Lamp(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y -= delta / 2;
  });
  const { nodes, materials } = useGLTF(
    "/models/uploads_files_3099242_lamp_3tubes-transformed.glb"
  );
  return (
    <group {...props} dispose={null} ref={mesh}>
      <group
        position={[0.002, 3.533, 0.056]}
        rotation={[-1.368, 0.167, 0.681]}
        scale={[0.756, 2.268, 0.756]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Emisiion}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials.Gold}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/uploads_files_3099242_lamp_3tubes-transformed.glb");
