import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

interface Props {
  modelUrl: string;
}

export const Model = ({ modelUrl }: Props) => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelUrl);
  const clonedScene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <group ref={groupRef} key={modelUrl}>
        <primitive object={clonedScene} scale={0.5} />
      </group>
      <OrbitControls enablePan={false} enableZoom enableRotate />
    </Suspense>
  );
};

useGLTF.preload("/models/mexico.glb");
useGLTF.preload("/models/maya.glb");
useGLTF.preload("/models/taco.glb");
useGLTF.preload("/models/bajacalifornia.glb");
useGLTF.preload("/models/cdmx.glb");
