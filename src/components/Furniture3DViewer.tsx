import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PresentationControls, Float } from "@react-three/drei";
import { Suspense } from "react";
import type { FurnitureItem } from "@/data/furniture";

interface Furniture3DViewerProps {
  item: FurnitureItem;
}

// Simple 3D furniture representations based on category
const FurnitureModel = ({ item }: { item: FurnitureItem }) => {
  const getModel = () => {
    switch (item.category) {
      case "Seating":
        return item.name.includes("Sofa") ? <SofaModel /> : <ChairModel />;
      case "Tables":
        return item.name.includes("Coffee") ? <CoffeeTableModel /> : <TableModel />;
      case "Storage":
        return <BookshelfModel />;
      case "Bedroom":
        return <NightstandModel />;
      default:
        return <BoxModel />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      {getModel()}
    </Float>
  );
};

// Chair model
const ChairModel = () => (
  <group>
    {/* Seat */}
    <mesh position={[0, 0.4, 0]}>
      <boxGeometry args={[0.8, 0.1, 0.8]} />
      <meshStandardMaterial color="#F5F0E8" />
    </mesh>
    {/* Back */}
    <mesh position={[0, 0.9, -0.35]}>
      <boxGeometry args={[0.8, 0.9, 0.1]} />
      <meshStandardMaterial color="#F5F0E8" />
    </mesh>
    {/* Legs */}
    {[[-0.3, 0, -0.3], [0.3, 0, -0.3], [-0.3, 0, 0.3], [0.3, 0, 0.3]].map((pos, i) => (
      <mesh key={i} position={[pos[0], 0.15, pos[2]]}>
        <boxGeometry args={[0.06, 0.3, 0.06]} />
        <meshStandardMaterial color="#C4A574" />
      </mesh>
    ))}
    {/* Armrests */}
    {[[-0.4, 0.6, 0], [0.4, 0.6, 0]].map((pos, i) => (
      <mesh key={i} position={[pos[0], pos[1], pos[2]]}>
        <boxGeometry args={[0.08, 0.3, 0.6]} />
        <meshStandardMaterial color="#C4A574" />
      </mesh>
    ))}
  </group>
);

// Sofa model
const SofaModel = () => (
  <group>
    {/* Base */}
    <mesh position={[0, 0.25, 0]}>
      <boxGeometry args={[2, 0.5, 0.9]} />
      <meshStandardMaterial color="#7A9A7E" />
    </mesh>
    {/* Back */}
    <mesh position={[0, 0.7, -0.35]}>
      <boxGeometry args={[2, 0.6, 0.2]} />
      <meshStandardMaterial color="#7A9A7E" />
    </mesh>
    {/* Armrests */}
    {[[-0.9, 0.45, 0], [0.9, 0.45, 0]].map((pos, i) => (
      <mesh key={i} position={[pos[0], pos[1], pos[2]]}>
        <boxGeometry args={[0.2, 0.5, 0.9]} />
        <meshStandardMaterial color="#7A9A7E" />
      </mesh>
    ))}
    {/* Legs */}
    {[[-0.8, 0, -0.3], [0.8, 0, -0.3], [-0.8, 0, 0.3], [0.8, 0, 0.3]].map((pos, i) => (
      <mesh key={i} position={[pos[0], -0.15, pos[2]]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>
    ))}
  </group>
);

// Table model
const TableModel = () => (
  <group>
    {/* Top */}
    <mesh position={[0, 0.75, 0]}>
      <boxGeometry args={[2, 0.08, 1]} />
      <meshStandardMaterial color="#C4A574" />
    </mesh>
    {/* Base */}
    <mesh position={[0, 0.35, 0]}>
      <boxGeometry args={[0.4, 0.7, 0.8]} />
      <meshStandardMaterial color="#C4A574" />
    </mesh>
  </group>
);

// Coffee table model
const CoffeeTableModel = () => (
  <group>
    {/* Marble top */}
    <mesh position={[0, 0.4, 0]}>
      <cylinderGeometry args={[0.8, 0.8, 0.06, 32]} />
      <meshStandardMaterial color="#F0F0F0" metalness={0.1} roughness={0.3} />
    </mesh>
    {/* Brass cage base */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      return (
        <mesh key={i} position={[Math.cos(angle) * 0.7, 0.17, Math.sin(angle) * 0.7]}>
          <cylinderGeometry args={[0.015, 0.015, 0.4]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
      );
    })}
  </group>
);

// Bookshelf model
const BookshelfModel = () => (
  <group>
    {/* Outer frame */}
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[1.6, 2, 0.3]} />
      <meshStandardMaterial color="#8B5A2B" />
    </mesh>
    {/* Shelves (carved out) */}
    {[0.9, 0.5, 0.1, -0.3, -0.7].map((y, i) => (
      <mesh key={i} position={[0, y + 0.5, 0.05]}>
        <boxGeometry args={[1.4, 0.35, 0.28]} />
        <meshStandardMaterial color="#F5F0E8" />
      </mesh>
    ))}
  </group>
);

// Nightstand model
const NightstandModel = () => (
  <group>
    {/* Body */}
    <mesh position={[0, 0.35, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.4]} />
      <meshStandardMaterial color="#D4B896" />
    </mesh>
    {/* Drawer */}
    <mesh position={[0, 0.2, 0.21]}>
      <boxGeometry args={[0.45, 0.18, 0.02]} />
      <meshStandardMaterial color="#C4A574" />
    </mesh>
    {/* Handle */}
    <mesh position={[0, 0.2, 0.23]}>
      <boxGeometry args={[0.12, 0.02, 0.02]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
    </mesh>
    {/* Legs */}
    {[[-0.2, 0, -0.15], [0.2, 0, -0.15], [-0.2, 0, 0.15], [0.2, 0, 0.15]].map((pos, i) => (
      <mesh key={i} position={[pos[0], 0.05, pos[2]]}>
        <boxGeometry args={[0.04, 0.1, 0.04]} />
        <meshStandardMaterial color="#C4A574" />
      </mesh>
    ))}
  </group>
);

// Fallback box
const BoxModel = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#C4A574" />
  </mesh>
);

const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[0.3]} />
    <meshStandardMaterial color="#7A9A7E" wireframe />
  </mesh>
);

const Furniture3DViewer = ({ item }: Furniture3DViewerProps) => {
  return (
    <div className="w-full h-[400px] bg-secondary rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [3, 2, 3], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, 5, -5]} intensity={0.5} />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0.1, 0.1, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <FurnitureModel item={item} />
          </PresentationControls>
          
          <Environment preset="apartment" />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Furniture3DViewer;
