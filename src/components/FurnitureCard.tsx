import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FurnitureItem } from "@/data/furniture";

interface FurnitureCardProps {
  item: FurnitureItem;
  onViewIn3D: (item: FurnitureItem) => void;
  index: number;
}

const FurnitureCard = ({ item, onViewIn3D, index }: FurnitureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">
          {item.category}
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
          {item.name}
        </h3>
        <p className="font-sans text-lg text-foreground/80 mb-4">
          ${item.price.toLocaleString()}
        </p>
        
        <Button
          onClick={() => onViewIn3D(item)}
          variant="accent"
          className="w-full"
        >
          <Eye className="w-4 h-4 mr-2" />
          View in 3D
        </Button>
      </div>
    </motion.div>
  );
};

export default FurnitureCard;
