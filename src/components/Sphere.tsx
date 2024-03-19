import React, { useRef, useState } from 'react';
import { useFrame } from "@react-three/fiber";

function Sphere(props) {
  const meshRef = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // @ts-ignore
    meshRef.current.rotation.x += isHovered ? delta * 2 : delta;
    // @ts-ignore
    meshRef.current.rotation.y += delta * 0.5;
    // @ts-ignore
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // meshRef.current.rotation.z += delta;

  });
  return (
    <mesh position={props.position} ref={meshRef}
          onPointerEnter={(e) => {
            e.stopPropagation;
            setIsHovered(true);
          }}
          onPointerLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
          scale={isClicked ? 2 : 1}
    >
      <sphereGeometry args={props.args} />
      {/*<meshStandardMaterial color={props.color}/>*/}
      <meshStandardMaterial color={isHovered ? props.color : "red"}
                            wireframe={true} />
    </mesh>
  );
}

export default Sphere;