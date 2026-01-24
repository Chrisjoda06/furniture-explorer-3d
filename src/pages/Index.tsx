import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FurnitureCard from "@/components/FurnitureCard";
import FurnitureModal from "@/components/FurnitureModal";
import { furnitureItems, type FurnitureItem } from "@/data/furniture";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewIn3D = (item: FurnitureItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      
      {/* Collection Section */}
      <section id="collection" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Our Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Timeless Pieces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureItems.map((item, index) => (
              <FurnitureCard
                key={item.id}
                item={item}
                onViewIn3D={handleViewIn3D}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-serif text-xl font-semibold text-foreground">
              FORMA
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Forma Furniture. Crafted with care.
            </p>
          </div>
        </div>
      </footer>

      {/* 3D Modal */}
      <FurnitureModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
