import DataPanel from "@/components/data-panel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Info, Layers, Map } from "lucide-react";
import { SceneModels } from "@/components/SceneModels";
import { AIChat } from "@/components/IaChat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <header className="border-b border-zinc-800 bg-zinc-950 py-4">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Mapa de méxico 3D</h1>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5 text-zinc-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <Map className="h-5 w-5 text-zinc-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <BarChart3 className="h-5 w-5 text-zinc-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <Layers className="h-5 w-5 text-zinc-400" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SceneModels />
        <div className="space-y-6">
          <Card className="bg-zinc-950 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle>Estado de México</CardTitle>
              <CardDescription className="text-zinc-400">
                Información general
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">Capital</h3>
                  <p>Toluca de Lerdo</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">
                    Superficie
                  </h3>
                  <p>21,461 km²</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">
                    Población
                  </h3>
                  <p>17,363,000 habitantes</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400">
                    Densidad
                  </h3>
                  <p>809.4 hab/km²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="demograficos" className="w-full">
            <TabsList className="grid grid-cols-3 bg-zinc-950 border border-zinc-800">
              <TabsTrigger value="demograficos">Demografía</TabsTrigger>
              <TabsTrigger value="economia">Economía</TabsTrigger>
              <TabsTrigger value="cultura">Cultura</TabsTrigger>
            </TabsList>
            <TabsContent value="demograficos">
              <DataPanel type="demograficos" />
            </TabsContent>
            <TabsContent value="economia">
              <DataPanel type="economia" />
            </TabsContent>
            <TabsContent value="cultura">
              <DataPanel type="cultura" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <AIChat />
    </div>
  );
}
