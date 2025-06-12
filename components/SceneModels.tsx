// SceneModels.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Model } from "./Model";
import { ModelSwitcher } from "./ModelSwitcher";
import { modelPaths } from "@/data/models";

export const SceneModels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Obtener datos desde la API de NextJs
    const fetchModels = async () => {
      try {
        const response = await fetch("/api/states");
        if (!response.ok) throw new Error("Error HTTP " + response.status);
        const data = await response.json();
        console.log("Estados:", data);
      } catch (error) {
        console.error("Error al obtener estados:", error);
      }
    };

    fetchModels();
  }, []);

  const nextModel = () => {
    setCurrentIndex((prev) => (prev + 1) % modelPaths.length);
  };

  const prevModel = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + modelPaths.length) % modelPaths.length,
    );
  };

  const activeModel = modelPaths[currentIndex];

  return (
    <div className="relative lg:col-span-2 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800  flex flex-col">
      <div className="flex-1">
        <Canvas shadows camera={{ position: [0, 5, 5], fov: 40 }}>
          <Model modelUrl={activeModel.url} />
        </Canvas>
      </div>

      <div className="p-4 border-t border-zinc-800">
        <ModelSwitcher
          currentName={activeModel.name}
          onPrev={prevModel}
          onNext={nextModel}
        />
      </div>
    </div>
  );
};
