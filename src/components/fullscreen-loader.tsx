import { LoaderCircleIcon } from "lucide-react";

interface FullscreenLoader {
  label?: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoader) => {
  return (
    <div
      className="
       min-h-screen flex flex-col items-center justify-center gap-2"
    >
      <LoaderCircleIcon className="size-10 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
