export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
};