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
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <group ref={groupRef} key={modelUrl}>
        <primitive object={clonedScene} scale={0.8} />
      </group>
      <OrbitControls enablePan={false} enableZoom enableRotate />
    </Suspense>
  );
};

useGLTF.preload("/models/mapamexico.glb");
useGLTF.preload("/models/mexico.glb");
useGLTF.preload("/models/cdmx.glb");
useGLTF.preload("/models/chiapas.glb");
useGLTF.preload("/models/chihuahua.glb");
useGLTF.preload("/models/campeche.glb");
useGLTF.preload("/models/colima.glb");
useGLTF.preload("/models/tlaxcala.glb");
useGLTF.preload("/models/veracruz.glb");
useGLTF.preload("/models/baja_california_sur.glb");
useGLTF.preload("/models/morelos.glb");
useGLTF.preload("/models/hidalgo.glb");
useGLTF.preload("/models/coahuila.glb");
useGLTF.preload("/models/durango.glb");
useGLTF.preload("/models/guerrero.glb");
useGLTF.preload("/models/baja_california.glb");
useGLTF.preload("/models/zacatecas.glb");
useGLTF.preload("/models/tamaulipas.glb");
useGLTF.preload("/models/tabasco.glb");
useGLTF.preload("/models/yucatan.glb");
