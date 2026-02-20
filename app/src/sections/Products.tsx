import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';
import type { Product } from '@/types';

gsap.registerPlugin(ScrollTrigger);

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(
          cardRef.current,
          { y: 60, opacity: 0, rotateX: 20 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
          }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom"
      style={{ opacity: 0 }}
    >
      {/* Image container with pill arch */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'ellipse(50% 45% at 50% 45%)' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-bloom group-hover:scale-110"
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-500" />
        
        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <Heart className="h-5 w-5 text-coral" />
        </Button>

        {/* Quick add button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button
            onClick={() => addToCart(product)}
            className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 font-medium transition-all duration-300"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-coral uppercase tracking-wider mb-2 block">
          {product.category}
        </span>
        <h3 className="font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-taupe text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl text-dark-brown">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #f76b6c 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
            Our Collection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6">
            Featured <span className="text-coral">Products</span>
          </h2>
          <p className="text-muted-taupe text-lg max-w-2xl mx-auto">
            Each bloom in our collection is hand-selected for its beauty, freshness, and ability to bring joy to your special moments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-coral text-coral hover:bg-coral hover:text-white rounded-full px-10 py-6 transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
