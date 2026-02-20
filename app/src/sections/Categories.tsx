import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
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
      triggers.push(titleTrigger);

      // Horizontal scroll
      if (trackRef.current && sectionRef.current) {
        const cards = trackRef.current.querySelectorAll('.category-card');
        const totalWidth = trackRef.current.scrollWidth - window.innerWidth + 100;

        const scrollTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 20%',
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (trackRef.current) {
              gsap.to(trackRef.current, {
                x: -self.progress * totalWidth,
                duration: 0.1,
                ease: 'none',
              });
            }
          },
        });
        triggers.push(scrollTrigger);

        // Card entrance animations
        cards.forEach((card, index) => {
          const cardTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 60%',
            onEnter: () => {
              gsap.fromTo(
                card,
                { y: 60, opacity: 0, rotateY: 15 },
                {
                  y: 0,
                  opacity: 1,
                  rotateY: 0,
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: 'power3.out',
                }
              );
            },
            once: true,
          });
          triggers.push(cardTrigger);
        });
      }
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const categories = [
    {
      id: 'roses',
      name: 'Roses',
      image: '/category-roses.jpg',
      description: 'Timeless symbols of love and passion',
      count: 24,
    },
    {
      id: 'peonies',
      name: 'Peonies',
      image: '/category-peonies.jpg',
      description: 'Lush blooms of romance and prosperity',
      count: 18,
    },
    {
      id: 'tulips',
      name: 'Tulips',
      image: '/category-tulips.jpg',
      description: 'Cheerful harbingers of spring',
      count: 32,
    },
    {
      id: 'ranunculus',
      name: 'Ranunculus',
      image: '/category-ranunculus.jpg',
      description: 'Delicate layers of ethereal beauty',
      count: 15,
    },
  ];

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-cream overflow-hidden py-20 lg:py-32"
    >
      {/* Decorative SVG vines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M0,400 Q300,200 600,400 T1200,400"
          stroke="#f76b6c"
          strokeWidth="2"
          fill="none"
          className="animate-float"
        />
        <path
          d="M0,500 Q400,300 800,500 T1200,500"
          stroke="#ffb4b4"
          strokeWidth="1.5"
          fill="none"
          className="animate-float"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 mb-12 lg:mb-16">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
              Collections
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight">
              Shop by<br />
              <span className="text-coral">Category</span>
            </h2>
          </div>
          <p className="text-muted-taupe max-w-md text-lg">
            Discover our curated collections, each bloom hand-selected for its beauty and freshness.
          </p>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative overflow-visible">
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-8 pl-6 sm:pl-8 lg:pl-12 xl:pl-16"
          style={{ width: 'max-content' }}
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="category-card group relative w-72 sm:w-80 lg:w-96 flex-shrink-0 cursor-pointer"
            >
              {/* Card with pill arch */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-soft group-hover:shadow-lifted transition-all duration-500 ease-bloom">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-bloom group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-bloom">
                  <p className="text-white/80 text-sm mb-2">{category.description}</p>
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <span>{category.count} Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Title below card */}
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl text-dark-brown group-hover:text-coral transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Decorative number */}
              <span className="absolute -top-4 -right-4 w-10 h-10 bg-coral text-white text-sm font-medium rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                0{index + 1}
              </span>
            </div>
          ))}

          {/* End spacer */}
          <div className="w-16 flex-shrink-0" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-taupe text-sm">
        <span>Scroll to explore</span>
        <ArrowRight className="h-4 w-4 animate-pulse" />
      </div>
    </section>
  );
}
