import { FullscreenLoader } from "@/components/fullscreen-loader";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FullscreenLoader label="Loading..." />
    </div>
  );
}
