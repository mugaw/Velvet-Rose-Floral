export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
}
