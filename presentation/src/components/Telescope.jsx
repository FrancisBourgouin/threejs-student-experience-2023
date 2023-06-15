/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 DSN_70M.glb --transform --shadows
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Telescope(props) {
  const { nodes, materials } = useGLTF("/models/DSN_70M-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.tex_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.clear}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_2.geometry}
        material={materials.tex_02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_3.geometry}
        material={materials.tex_02b}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_4.geometry}
        material={materials.truss_box_AO}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_5.geometry}
        material={materials.truss_dish_AO}
      />
    </group>
  );
}

useGLTF.preload("/models/DSN_70M-transformed.glb");