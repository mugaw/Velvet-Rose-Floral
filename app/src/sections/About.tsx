import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    
    const ctx = gsap.context(() => {
      // Image slide reveal
      const imageTrigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            imageRef.current,
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(imageTrigger);

      // Content fade in
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 75%',
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

      // Parallax effect on image
      const parallaxTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.to(imageRef.current?.querySelector('img'), {
              y: self.progress * 50 - 25,
              duration: 0.1,
            });
          }
        },
      });
      triggers.push(parallaxTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif text-[20rem] lg:text-[30rem] text-light-rose/30 whitespace-nowrap select-none">
          Rose
        </span>
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl shadow-soft"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            <img
              src="/about-bouquet.jpg"
              alt="Hand holding a beautiful bouquet of pastel roses"
              className="w-full h-full object-cover"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/10 to-transparent" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="lg:pl-8">
            <span className="animate-item text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
              Our Story
            </span>

            <h2 className="animate-item font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6">
              Where Romance<br />
              <span className="text-coral">Meets Nature</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="animate-item text-muted-taupe text-lg leading-relaxed">
                Founded with a passion for preserving the timeless art of floristry, Velvet Rose began as a small dream in a sunlit studio. We believe that flowers are more than botanical arrangements—they are poetry written in petals, carrying the whispers of love, celebration, and remembrance.
              </p>
              <p className="animate-item text-muted-taupe text-lg leading-relaxed">
                Every bloom we select tells a story, every arrangement we craft holds intention. Our master florists combine classical techniques with contemporary aesthetics, creating pieces that feel both timeless and utterly fresh.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="animate-item border-coral text-coral hover:bg-coral hover:text-white rounded-full px-8 py-6 transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
