import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const harryPotter = useGLTF("/src/Harry/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={harryPotter.scene}
        scale={2.05}
        position={[0, -3.55, 0]}
        rotation={[0,-30,0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      className="z-10"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2 }
          minPolarAngle={Math.PI/2 }
        />
        <Computers />
      </Suspense>

      <Preload true />
    </Canvas>
  );
};

export default ComputersCanvas;