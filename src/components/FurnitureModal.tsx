import { motion, AnimatePresence } from "framer-motion";
import { X, Ruler, Box, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModelViewer from "./ModelViewer";
import type { FurnitureItem } from "@/data/furniture";

interface FurnitureModalProps {
  item: FurnitureItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const FurnitureModal = ({ item, isOpen, onClose }: FurnitureModalProps) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card rounded-xl overflow-hidden z-50 shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 3D Model Viewer with AR */}
            <div className="flex-1 bg-secondary p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-0 relative">
              <ModelViewer 
                modelSrc={item.model} 
                alt={`3D model of ${item.name}`} 
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-[400px] lg:w-[450px] p-6 md:p-8 overflow-y-auto">
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">
                {item.category}
              </p>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {item.name}
              </h2>
              
              <p className="font-sans text-2xl text-accent font-medium mb-6">
                ${item.price.toLocaleString()}
              </p>
              
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Specifications
                </h3>
                
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Ruler className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Dimensions</p>
                      <p className="font-medium text-foreground">
                        {item.dimensions.width} × {item.dimensions.height} × {item.dimensions.depth} cm
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Box className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Material</p>
                      <p className="font-medium text-foreground">{item.material}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Palette className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Color</p>
                      <p className="font-medium text-foreground">{item.color}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interaction hint */}
              <p className="text-xs text-muted-foreground text-center mb-6">
                Drag to rotate • Scroll to zoom
              </p>

              <Button variant="accent" size="lg" className="w-full">
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FurnitureModal;
