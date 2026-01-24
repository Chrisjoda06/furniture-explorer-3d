import { Button } from "@/components/ui/button";
import { View } from "lucide-react";

// Declare the model-viewer custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          ar?: boolean;
          "ar-modes"?: string;
          "camera-controls"?: boolean;
          "shadow-intensity"?: string;
          "auto-rotate"?: boolean;
          "touch-action"?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface ModelViewerProps {
  modelSrc: string;
  alt?: string;
}

const ModelViewer = ({ modelSrc, alt = "3D furniture model" }: ModelViewerProps) => {
  return (
    <model-viewer
      src={modelSrc}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      shadow-intensity="1"
      auto-rotate
      touch-action="pan-y"
      className="w-full h-full min-h-[300px]"
      style={{ width: "100%", height: "100%", minHeight: "300px" }}
    >
      <Button
        variant="accent"
        size="lg"
        slot="ar-button"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <View className="w-4 h-4" />
        View in AR
      </Button>
    </model-viewer>
  );
};

export default ModelViewer;
