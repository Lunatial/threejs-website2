/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: matousekfoto (https://sketchfab.com/matousekfoto)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/red-car-wreck-8a540625b599428796cda78578040deb
title: Red car wreck
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.meshNode_Material_u2_v1_0.geometry} material={materials.Material_u2_v1} />
            <mesh geometry={nodes.meshNode_Material_u2_v1_0_1.geometry} material={materials.Material_u2_v1} />
            <mesh geometry={nodes.meshNode_Material_u2_v1_0_2.geometry} material={materials.Material_u2_v1} />
            <mesh geometry={nodes.meshNode_Material_u2_v1_0_3.geometry} material={materials.Material_u2_v1} />
            <mesh geometry={nodes.meshNode_Material_u2_v1_0_4.geometry} material={materials.Material_u2_v1} />
            <mesh geometry={nodes.meshNode_Material_u2_v2_0.geometry} material={materials.Material_u2_v2} />
            <mesh geometry={nodes.meshNode_Material_u2_v2_0_1.geometry} material={materials.Material_u2_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0_1.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0_2.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0_3.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0_4.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v2_0_5.geometry} material={materials.Material_u1_v2} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_1.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_2.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_3.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_4.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_5.geometry} material={materials.Material_u1_v1} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')