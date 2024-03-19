import React, { useRef } from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import Torus from "./components/Torus";
import TorusKnot from "./components/TorusKnot";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

function Scene(props) {
  const directionLightRef = useRef();
  useHelper(directionLightRef, DirectionalLightHelper, 0.5, "red");
  return (
    <>

      {/*<directionalLight position={[-2, 1, 1]} intensity={1} />*/}
      {/*<ambientLight position={[-10, -10, 1]} />*/}
      <directionalLight position={[-2, 1, 1]} intensity={1}
                        ref={directionLightRef} />
      2

      {/*<Cube position={[2, 0, 0]} size={[1, 1, 1]} color={"ash"} />*/}
      {/*<Cube position={[2, 0, 0]} size={[1, 1, 1]} color={"green"} />*/}
      {/*<Cube position={[-2, 0, 0]} size={[1, 1, 1]} color={"red"} />*/}
      {/*<Cube position={[0, 2, 0]} size={[1, 1, 1]} color={"yellow"} />*/}

      {<Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"yellow"} />}

      {/*{<Torus position={[2, 0, 0]} args={[0.8, 0.2, 30, 100]}*/}
      {/*        color={"green"} />}*/}
      {/*{<Torus position={[2, 0, 0]} args={[0.2, 30, 100]} />}*/}

      {<TorusKnot position={[0, 0, 0]} args={[1, 0.1, 100, 100]} color={"hotpink"} />}

      <OrbitControls />

    </>
  );
}

function App() {
  return (
    // dom which accept threejs elements
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;