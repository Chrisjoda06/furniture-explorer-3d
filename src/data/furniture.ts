import np5Img from "@/assets/np5.jpg";
import ppmu5Img from "@/assets/ppmu5.jpg";
import pulse_pistolImg from "@/assets/pulse_pistol.jpg";
import the_workstationImg from "@/assets/the_workstation.jpg";
import the_essentials_crateImg from "@/assets/the_essentials_crate.jpg";
import soec6Img from "@/assets/soec6.jpg";

export interface FurnitureItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  material: string;
  color: string;
  image: string;
  model: string;
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "1",
    name: "Nurishment Pod 5",
    price: 550,
    description: "Robust, durable, and lightweight. The NP5 is a self-contained unit that provides all the necessary nutrients and hydration for a crew of 5 for up to 2 months.",
    category: "Nurishment",
    dimensions: { width: 75, height: 82, depth: 80 },
    material: "Titanium",
    color: "Steel Grey",
    image: np5Img,
    model: "/models/Scifi Canister.glb",
  },
  {
    id: "2",
    name: "Personal Propulsion and Maneuverability Unit 5",
    price: 50000,
    description: "The PPMU5 is a small portable engine which offers a 50 N thrust for 2 hours of operation. It is designed to be used by up to 2 people on exploration missions outside the spacecraft.",
    category: "Propulsion",
    dimensions: { width: 200, height: 75, depth: 100 },
    material: "Titanium",
    color: "Dark Grey, Brown",
    image: ppmu5Img,
    model: "/models/Space engine.glb",
  },
  {
    id: "3",
    name: "Pulse Pistol",
    price: 400,
    description: "The Pulse Pistol is a compact, non-lethal firearm that provides the necessary defense against potential hostile encounters.",
    category: "Weaponry",
    dimensions: { width: 200, height: 85, depth: 90 },
    material: "Titanium",
    color: "Black, White",
    image: pulse_pistolImg,
    model: "/models/Scifi Pistol.glb",
  },
  {
    id: "4",
    name: "The Workstation",
    price: 3000,
    description: "The Workstation is a smart, sturdy terminal which allows intuative control and communication with the spacecraft.",
    category: "Utility",
    dimensions: { width: 180, height: 200, depth: 35 },
    material: "Titanium",
    color: "Light Grey, Dark Grey",
    image: the_workstationImg,
    model: "/models/Scifi Computer.glb",
  },
  {
    id: "5",
    name: "The Essentials Crate",
    price: 4000,
    description: "The Essentials Crate contains the most basic and valuable equipment each individual needs for the upcomming journey: 2 Lightweight Space Suits, Communication Device, Basic Nav Chart, NP1, SOEC1 and a Solar Torch.",
    category: "Equipment",
    dimensions: { width: 50, height: 55, depth: 40 },
    material: "Titanium",
    color: "Light Grey, Orange",
    image: the_essentials_crateImg,
    model: "/models/Scifi Crate.glb",
  },
  {
    id: "6",
    name: "Solid Oxide Electrolysis Cell 6",
    price: 5000,
    description: "The SOEC6 transforms CO2 to O2. It is designed for a crew of 6.",
    category: "Oxygen Production",
    dimensions: { width: 100, height: 40, depth: 100 },
    material: "Titanium, YSZ, Ni-YSZ",
    color: "Light Grey, Silver",
    image: soec6Img,
    model: "/models/Scifi Pod.glb",
  },
];
