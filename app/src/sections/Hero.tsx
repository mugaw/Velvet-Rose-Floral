import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image reveal with mask
      tl.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)', scale: 1.1 },
        { clipPath: 'circle(150% at 50% 50%)', scale: 1, duration: 1.4 }
      );

      // Title animation - split into words
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          '-=0.8'
        );
      }

      // Subtitle fade in
      tl.fromTo(
        subtitleRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // CTA button pop
      tl.fromTo(
        ctaRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        gsap.to(imageRef.current, {
          y: scrollY * 0.15,
          duration: 0.3,
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-cream"
    >
      {/* Decorative floating petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-soft-pink/30 rounded-full animate-petalFloat" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-coral/20 rounded-full animate-petalFloat" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-pale-blush/40 rounded-full animate-petalFloat" style={{ animationDelay: '4s' }} />
      </div>

      <div className="w-full min-h-screen px-6 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h1
              ref={titleRef}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-dark-brown leading-[1.1] mb-6 overflow-hidden"
            >
              <span className="word inline-block">Velvet</span>{' '}
              <span className="word inline-block text-coral">Rose</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-muted-taupe max-w-md mb-8 leading-relaxed"
            >
              Crafting moments of botanical elegance for life's most precious occasions. Each petal tells a story of love, beauty, and timeless romance.
            </p>

            <div ref={ctaRef}>
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom group"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
              style={{ clipPath: 'circle(0% at 50% 50%)' }}
            >
              {/* Pill-shaped arch mask */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <clipPath id="pill-arch" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.3 Q0,0 0.5,0 Q1,0 1,0.3 L1,1 L0,1 Z" />
                  </clipPath>
                </defs>
              </svg>
              
              <img
                src="/hero-bouquet.jpg"
                alt="Beautiful floral bouquet with pink and peach roses"
                className="w-full h-full object-cover animate-breathe"
                style={{ clipPath: 'url(#pill-arch)' }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-rose to-transparent" />
    </section>
  );
}
