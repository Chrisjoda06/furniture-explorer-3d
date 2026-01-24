import armchairImg from "@/assets/armchair.jpg";
import diningTableImg from "@/assets/dining-table.jpg";
import sofaImg from "@/assets/sofa.jpg";
import bookshelfImg from "@/assets/bookshelf.jpg";
import nightstandImg from "@/assets/nightstand.jpg";
import coffeeTableImg from "@/assets/coffee-table.jpg";

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
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "1",
    name: "Oslo Lounge Chair",
    price: 1299,
    description: "Elegant wooden armchair with cream cushions, crafted from solid oak with comfortable, removable cushions.",
    category: "Seating",
    dimensions: { width: 75, height: 82, depth: 80 },
    material: "Solid Oak & Linen",
    color: "Natural Oak",
    image: armchairImg,
  },
  {
    id: "2",
    name: "Bergen Dining Table",
    price: 2499,
    description: "Scandinavian-inspired dining table with clean lines and a warm oak finish. Seats 6-8 guests comfortably.",
    category: "Tables",
    dimensions: { width: 200, height: 75, depth: 100 },
    material: "Solid Oak",
    color: "Natural Oak",
    image: diningTableImg,
  },
  {
    id: "3",
    name: "Sage Velvet Sofa",
    price: 2899,
    description: "Mid-century modern sofa upholstered in luxurious sage velvet with solid walnut legs.",
    category: "Seating",
    dimensions: { width: 200, height: 85, depth: 90 },
    material: "Velvet & Walnut",
    color: "Sage Green",
    image: sofaImg,
  },
  {
    id: "4",
    name: "Modular Bookshelf",
    price: 1899,
    description: "Contemporary walnut bookshelf with asymmetric shelving, perfect for displaying books and art.",
    category: "Storage",
    dimensions: { width: 180, height: 200, depth: 35 },
    material: "Walnut Veneer",
    color: "Walnut",
    image: bookshelfImg,
  },
  {
    id: "5",
    name: "Nordic Nightstand",
    price: 449,
    description: "Minimalist bedside table with a single drawer and brass hardware. Light oak finish.",
    category: "Bedroom",
    dimensions: { width: 50, height: 55, depth: 40 },
    material: "Oak & Brass",
    color: "Light Oak",
    image: nightstandImg,
  },
  {
    id: "6",
    name: "Marble Coffee Table",
    price: 1599,
    description: "Statement coffee table with Carrara marble top and elegant brass cage base.",
    category: "Tables",
    dimensions: { width: 100, height: 40, depth: 100 },
    material: "Marble & Brass",
    color: "White Marble",
    image: coffeeTableImg,
  },
];
