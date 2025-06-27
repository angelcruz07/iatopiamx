import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface Props {
  currentName: string;
  onPrev: () => void;
  onNext: () => void;
}

export const ModelSwitcher = ({ currentName, onPrev, onNext }: Props) => {
  return (
    <div className="flex items-center  justify-center gap-4 px-4 py-2 rounded">
      <ArrowLeftIcon className="h-5 w-5 cursor-pointer" onClick={onPrev} />

      <span className="text-sm">{currentName}</span>
      <ArrowRightIcon className="h-5 w-5 cursor-pointer" onClick={onNext} />
    </div>
  );
};
