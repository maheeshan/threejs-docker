import { Color, useFrame, Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";

function Cube(props) {

  const meshRef = useRef();

  useFrame((state, delta) => {
    // @ts-ignore
    meshRef.current.rotation.x += delta;
    // @ts-ignore
    meshRef.current.rotation.y += delta;
    // @ts-ignore
    meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // @ts-ignore
    // meshRef.current.rotation.z += delta;

  });

  return (
    <mesh position={props.position} ref={meshRef}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Cube;