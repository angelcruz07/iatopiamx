import { Card, CardContent } from "@/components/ui/card"
import { BarChart, LineChart } from "lucide-react"

interface DataPanelProps {
  type: "demograficos" | "economia" | "cultura"
}

export default function DataPanel({ type }: DataPanelProps) {
  const renderContent = () => {
    switch (type) {
      case "demograficos":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Población total</h3>
                <p className="text-2xl font-bold">17.36M</p>
              </div>
              <BarChart className="h-10 w-10 text-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-zinc-400">Urbana</h4>
                <p className="text-lg font-medium">87%</p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400">Rural</h4>
                <p className="text-lg font-medium">13%</p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400">Hombres</h4>
                <p className="text-lg font-medium">48.6%</p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400">Mujeres</h4>
                <p className="text-lg font-medium">51.4%</p>
              </div>
            </div>
          </div>
        )
      case "economia":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">PIB Estatal</h3>
                <p className="text-2xl font-bold">$1,485 MDP</p>
              </div>
              <LineChart className="h-10 w-10 text-amber-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-zinc-400">Industria</h4>
                <p className="text-lg font-medium">37%</p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400">Servicios</h4>
                <p className="text-lg font-medium">58%</p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-400">Agricultura</h4>
                <p className="text-lg font-medium">5%</p>
              </div>
            </div>
          </div>
        )
      case "cultura":
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Sitios destacados</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Teotihuacán</span>
                  <span className="text-sm text-zinc-400">Sitio arqueológico</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Toluca</span>
                  <span className="text-sm text-zinc-400">Capital cultural</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Valle de Bravo</span>
                  <span className="text-sm text-zinc-400">Pueblo Mágico</span>
                </li>
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card className="bg-zinc-950 border-zinc-800 text-white">
      <CardContent className="pt-6">{renderContent()}</CardContent>
    </Card>
  )
}
