"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { ModelSwitcher } from "./ModelSwitcher";

interface SceneModelsProps {
  activeModelPath: string;
  currentName: string;
  onPrev: () => void;
  onNext: () => void;
}

export const SceneModels = ({
  activeModelPath,
  currentName,
  onPrev,
  onNext,
}: SceneModelsProps) => {
  return (
    <div className="relative lg:col-span-2 bg-gray-200 rounded-xl overflow-hidden border border-zinc-800 flex flex-col">
      <div className="flex-1">
        <Canvas shadows camera={{ position: [0, 2, 3], fov: 20 }}>
          <Model modelUrl={activeModelPath} />
        </Canvas>
      </div>

      <div className="p-4 border-t border-zinc-800">
        <ModelSwitcher
          currentName={currentName}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </div>
  );
};
