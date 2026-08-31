export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Nova Classic",
    price: 129,
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    description: "Timeless aviator silhouette with modern polarized lenses.",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Aura Clear",
    price: 145,
    category: "Prescription",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
    description: "Minimalist clear frames for the contemporary professional.",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Eclipse",
    price: 115,
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
    description: "Bold, round frames that make a statement.",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Horizon Matte",
    price: 135,
    category: "Prescription",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight matte finish designed for all-day comfort.",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Zenith",
    price: 160,
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
    description: "Premium materials meet classic design.",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Lumina Edge",
    price: 155,
    category: "Prescription",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    description: "Sharp angles for a distinctive, modern look.",
    rating: 4.8,
  }
];
