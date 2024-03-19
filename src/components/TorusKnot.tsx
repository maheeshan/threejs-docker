import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

function TorusKnot(props) {
  const meshRef = useRef();

  /*useFrame((state, delta) => {
    // @ts-ignore
    // meshRef.current.rotation.x += delta;
    // @ts-ignore
    // meshRef.current.rotation.y += delta;
    // @ts-ignore
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // meshRef.current.rotation.z += delta;

  });*/
  return (
    <mesh position={props.position} ref={meshRef}>
      <torusKnotGeometry args={props.args} />
      {/*<meshStandardMaterial color={props.color} />*/}
      <MeshWobbleMaterial factor={2} speed={5}/>
    </mesh>
  );
}

export default TorusKnot;