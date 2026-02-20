import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Leaf, Truck } from 'lucide-react';
import { features } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const iconMap: { [key: string]: React.ElementType } = {
  Sparkles,
  Leaf,
  Truck,
};

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    
    const ctx = gsap.context(() => {
      // Features entrance animation
      const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
      if (featureCards) {
        const featureTrigger = ScrollTrigger.create({
          trigger: featuresRef.current,
          start: 'top 75%',
          onEnter: () => {
            gsap.fromTo(
              featureCards,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
            );
          },
          once: true,
        });
        triggers.push(featureTrigger);
      }

      // Central image rotation on scroll
      const imageTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            const rotation = -5 + self.progress * 10;
            gsap.to(imageRef.current, {
              rotation,
              duration: 0.1,
            });
          }
        },
      });
      triggers.push(imageTrigger);

      // Icon draw animation
      const icons = featuresRef.current?.querySelectorAll('.feature-icon');
      if (icons) {
        icons.forEach((icon) => {
          const iconTrigger = ScrollTrigger.create({
            trigger: icon,
            start: 'top 80%',
            onEnter: () => {
              gsap.fromTo(
                icon,
                { scale: 0, rotation: -180 },
                { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
              );
            },
            once: true,
          });
          triggers.push(iconTrigger);
        });
      }
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-soft-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pale-blush/30 rounded-full blur-3xl" />

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight">
            The <span className="text-coral">Velvet Rose</span> Difference
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div ref={featuresRef} className="space-y-8 lg:space-y-12">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="feature-card group flex items-start gap-5"
                  style={{ opacity: 0 }}
                >
                  <div className="feature-icon flex-shrink-0 w-14 h-14 bg-pale-blush rounded-2xl flex items-center justify-center group-hover:bg-coral transition-colors duration-300">
                    <Icon className="h-6 w-6 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-taupe text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div
            ref={imageRef}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lifted order-first lg:order-none"
          >
            <img
              src="/feature-centerpiece.jpg"
              alt="Elegant floral centerpiece"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent" />
          </div>

          {/* Right Feature */}
          <div ref={featuresRef} className="space-y-8 lg:space-y-12">
            {features.slice(2).map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="feature-card group flex items-start gap-5"
                  style={{ opacity: 0 }}
                >
                  <div className="feature-icon flex-shrink-0 w-14 h-14 bg-pale-blush rounded-2xl flex items-center justify-center group-hover:bg-coral transition-colors duration-300">
                    <Icon className="h-6 w-6 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-taupe text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
