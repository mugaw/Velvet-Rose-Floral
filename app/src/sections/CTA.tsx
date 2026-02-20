import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    
    const ctx = gsap.context(() => {
      // Parallax effect on background image
      const parallaxTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              y: self.progress * 100 - 50,
              duration: 0.1,
            });
          }
        },
      });
      triggers.push(parallaxTrigger);

      // Content reveal animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 70%',
        onEnter: () => {
          const items = contentRef.current?.querySelectorAll('.animate-item');
          if (items && items.length > 0) {
            gsap.fromTo(
              items,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
            );
          }
        },
        once: true,
      });
      triggers.push(contentTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 scale-110"
      >
        <img
          src="/cta-background.jpg"
          alt="Beautiful floral arrangement"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-brown/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div ref={contentRef} className="text-center px-6 max-w-3xl">
          <span className="animate-item text-soft-pink text-sm font-medium tracking-widest uppercase mb-4 block">
            Bring Beauty Home
          </span>
          
          <h2 className="animate-item font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            Let the Magic<br />
            <span className="text-soft-pink">Unfold</span>
          </h2>
          
          <p className="animate-item text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10">
            Order today and experience the joy of fresh, handcrafted floral arrangements delivered to your door.
          </p>

          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-6 text-base font-medium shadow-lifted transition-all duration-300 group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-brown rounded-full px-10 py-6 text-base font-medium transition-all duration-300"
            >
              View Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
