"use client";
import { useState } from "react";
import { states } from "@/data/infostates";
import { SceneModels } from "@/components/SceneModels";
import { StateInfo } from "@/components/StateInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // import { AIChat } from "@/components/AIChat"; // Si tienes este componente
import DataPanel from "@/components/DataPanel";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!states || states.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-white justify-center items-center">
        <p className="text-zinc-700">Cargando datos de estados...</p>
      </div>
    );
  }

  // Obtiene el estado activo basado en el currentIndex
  const activeState = states[currentIndex];

  const nextModel = () => {
    setCurrentIndex((prev) => (prev + 1) % states.length);
  };

  const prevModel = () => {
    setCurrentIndex((prev) => (prev - 1 + states.length) % states.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-zinc-800 bg-gray-100 py-4">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold">IAtopia MX</h1>
        </div>
      </header>

      <main className="flex-1 container py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SceneModels
          activeModelPath={activeState.model}
          currentName={activeState.nombre}
          onPrev={prevModel}
          onNext={nextModel}
        />

        <div className="space-y-6">
          <StateInfo
            nombre={activeState.nombre}
            capital={activeState.capital}
            superficie={activeState.superficie}
            habitantes={activeState.habitantes}
            densidad={activeState.densidad}
          />
          <Tabs defaultValue="demograficos" className="w-full p-5">
            <TabsList className="grid grid-cols-3 bg-gray-200 border border-zinc-800">
              <TabsTrigger value="demograficos">Demografía</TabsTrigger>
              <TabsTrigger value="economia">Economía</TabsTrigger>
              <TabsTrigger value="cultura">Cultura</TabsTrigger>
            </TabsList>
            <TabsContent value="demograficos">
              <DataPanel type="demograficos" activeStateData={activeState} />
            </TabsContent>
            <TabsContent value="economia">
              <DataPanel type="economia" activeStateData={activeState} />
            </TabsContent>
            <TabsContent value="cultura">
              <DataPanel type="cultura" activeStateData={activeState} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      {/* <AIChat /> */}
    </div>
  );
}
