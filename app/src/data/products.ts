import type { Product, Category, Testimonial, BlogPost } from '@/types';

export const categories: Category[] = [
  {
    id: 'roses',
    name: 'Roses',
    image: '/category-roses.jpg',
    description: 'Timeless symbols of love and passion',
  },
  {
    id: 'peonies',
    name: 'Peonies',
    image: '/category-peonies.jpg',
    description: 'Lush blooms of romance and prosperity',
  },
  {
    id: 'tulips',
    name: 'Tulips',
    image: '/category-tulips.jpg',
    description: 'Cheerful harbingers of spring',
  },
  {
    id: 'ranunculus',
    name: 'Ranunculus',
    image: '/category-ranunculus.jpg',
    description: 'Delicate layers of ethereal beauty',
  },
];

export const products: Product[] = [
  {
    id: 'white-rose-elegance',
    name: 'White Rose Elegance',
    price: 89,
    image: '/product-white-roses.jpg',
    category: 'roses',
    description: 'A pristine bouquet of pure white roses, symbolizing innocence and grace.',
  },
  {
    id: 'blush-peony-dream',
    name: 'Blush Peony Dream',
    price: 125,
    image: '/product-pink-peonies.jpg',
    category: 'peonies',
    description: 'Luxurious pink peonies that embody romance and feminine elegance.',
  },
  {
    id: 'coral-rose-garden',
    name: 'Coral Rose Garden',
    price: 95,
    image: '/product-coral-roses.jpg',
    category: 'roses',
    description: 'Warm coral garden roses that bring sunshine and joy to any room.',
  },
  {
    id: 'wildflower-meadow',
    name: 'Wildflower Meadow',
    price: 75,
    image: '/product-wildflowers.jpg',
    category: 'mixed',
    description: 'A whimsical arrangement of seasonal wildflowers in soft hues.',
  },
  {
    id: 'single-stem-rose',
    name: 'Single Stem Rose',
    price: 25,
    image: '/product-single-rose.jpg',
    category: 'roses',
    description: 'One perfect garden rose, a simple gesture of love and appreciation.',
  },
  {
    id: 'bridal-white-collection',
    name: 'Bridal White Collection',
    price: 195,
    image: '/product-bridal.jpg',
    category: 'arrangements',
    description: 'An exquisite bridal bouquet featuring white roses, peonies, and eucalyptus.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    avatar: '/customer-1.jpg',
    text: 'Velvet Rose transformed my wedding into a floral paradise. Every arrangement was more beautiful than I could have imagined. The attention to detail and quality of flowers is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emily Chen',
    avatar: '/customer-2.jpg',
    text: 'I order from Velvet Rose for every special occasion. Their flowers always arrive fresh and beautifully arranged. The same-day delivery service is a lifesaver for last-minute gifts!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Margaret Williams',
    avatar: '/customer-3.jpg',
    text: 'The team at Velvet Rose has an incredible eye for design. They created the most stunning centerpiece for my anniversary dinner. My guests could not stop complimenting the arrangements.',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Arranging: A Beginner\'s Guide',
    image: '/blog-arranging.jpg',
    excerpt: 'Discover the secrets to creating beautiful floral arrangements at home with our step-by-step guide.',
    date: 'Jan 12, 2026',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Spring Wedding Flower Trends',
    image: '/blog-wedding.jpg',
    excerpt: 'From garden roses to ranunculus, explore the most enchanting blooms for your spring celebration.',
    date: 'Jan 8, 2026',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'Caring for Your Fresh Flowers',
    image: '/blog-arrangement.jpg',
    excerpt: 'Learn simple tips to extend the life of your beautiful blooms and keep them looking fresh longer.',
    date: 'Jan 5, 2026',
    readTime: '3 min read',
  },
];

export const features = [
  {
    icon: 'Sparkles',
    title: 'Handcrafted Bouquets',
    description: 'Each arrangement is thoughtfully designed by our expert florists with the freshest seasonal blooms.',
  },
  {
    icon: 'Leaf',
    title: 'Freshness Guaranteed',
    description: 'We source our flowers daily from local growers to ensure the highest quality and longevity.',
  },
  {
    icon: 'Truck',
    title: 'Same-Day Delivery',
    description: 'Order before 2pm for same-day delivery across the city. Perfect for last-minute surprises.',
  },
];
