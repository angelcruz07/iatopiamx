import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart } from "lucide-react";
import { StateData } from "@/data/infostates"; // Ajusta la ruta si es necesario

interface DataPanelProps {
  type: "demograficos" | "economia" | "cultura";
  activeStateData: StateData;
}

export default function DataPanel({ type, activeStateData }: DataPanelProps) {
  const renderContent = () => {
    switch (type) {
      case "demograficos":
        // Accede a las propiedades de demográficos a través de activeStateData.demograficos
        const demograficos = activeStateData.demograficos;
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Población total</h3>
                <p className="text-2xl font-bold">
                  {demograficos.poblacionTotal}
                </p>
              </div>
              <BarChart className="h-10 w-10 text-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm ">Urbana</h4>
                <p className="text-lg font-medium">{demograficos.urbana}</p>
              </div>
              <div>
                <h4 className="text-sm ">Rural</h4>
                <p className="text-lg font-medium">{demograficos.rural}</p>
              </div>
              <div>
                <h4 className="text-sm ">Hombres</h4>
                <p className="text-lg font-medium">{demograficos.hombres}</p>
              </div>
              <div>
                <h4 className="text-sm ">Mujeres</h4>
                <p className="text-lg font-medium">{demograficos.mujeres}</p>
              </div>
            </div>
          </div>
        );
      case "economia":
        // Accede a las propiedades de economía a través de activeStateData.economia
        const economia = activeStateData.economia;
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">PIB Estatal</h3>
                <p className="text-2xl font-bold">{economia.pibEstatal}</p>
              </div>
              <LineChart className="h-10 w-10 text-amber-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm ">Industria</h4>
                <p className="text-lg font-medium">{economia.industria}</p>
              </div>
              <div>
                <h4 className="text-sm ">Servicios</h4>
                <p className="text-lg font-medium">{economia.servicios}</p>
              </div>
              <div>
                <h4 className="text-sm ">Agricultura</h4>
                <p className="text-lg font-medium">{economia.agricultura}</p>
              </div>
            </div>
          </div>
        );
      case "cultura":
        // Accede a las propiedades de cultura a través de activeStateData.cultura
        const cultura = activeStateData.cultura;
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Sitios destacados</h3>
              <ul className="mt-2 space-y-2">
                {cultura.sitiosDestacados.map((sitio, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{sitio.nombre}</span>
                    <span className="text-sm ">{sitio.descripcion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="bg-gray-300 border-zinc-800">
      <CardContent className="pt-6">{renderContent()}</CardContent>
    </Card>
  );
}
