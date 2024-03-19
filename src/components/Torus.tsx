import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

function Torus(props) {
  const meshRef = useRef();

  const { color, radius } = useControls({
    color: "orange",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5
    }
  });

  useFrame((state, delta) => {
    // @ts-ignore
    // meshRef.current.rotation.x += delta;
    // @ts-ignore
    // meshRef.current.rotation.y += delta;
    // @ts-ignore
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // meshRef.current.rotation.z += delta;

  });
  return (
    <mesh position={props.position} ref={meshRef}>
      <torusGeometry
        // @ts-ignore
        // args={props.args}
        // @ts-ignore
        args={[radius, ...props.args]}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Torus;