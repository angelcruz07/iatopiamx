import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  nombre: string;
  capital: string;
  superficie: string;
  habitantes: string;
  densidad: string;
}

export const StateInfo = ({
  nombre,
  capital,
  superficie,
  habitantes,
  densidad,
}: Props) => {
  return (
    <Card className="bg-gray-200 border-zinc-800 ">
      <CardHeader>
        <CardTitle>{nombre}</CardTitle>
        <CardDescription className="">Información general</CardDescription>
      </CardHeader>
      <CardContent className="text-black">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium ">Capital</h3>
            <p>{capital}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium ">Superficie</h3>
            <p>{superficie} km²</p>
          </div>
          <div>
            <h3 className="text-sm font-medium ">Población</h3>
            <p>{habitantes} habitantes</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Densidad</h3>
            <p>{densidad} hab/km²</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
