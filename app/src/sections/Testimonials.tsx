import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
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

      // Infinite scroll animation for testimonials
      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll('.testimonial-card');
        
        // Entrance animation
        cards.forEach((card, index) => {
          const cardTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 70%',
            onEnter: () => {
              gsap.fromTo(
                card,
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden"
    >
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="h-32 w-32 text-coral" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="h-32 w-32 text-coral" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6">
            What Our <span className="text-coral">Customers</span> Say
          </h2>
          <p className="text-muted-taupe text-lg max-w-2xl mx-auto">
            Hear from those who have experienced the magic of Velvet Rose.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={trackRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom"
              style={{ opacity: 0 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-pale-blush rounded-full flex items-center justify-center">
                <Quote className="h-5 w-5 text-coral" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-coral text-coral"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-rich-brown text-lg leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pale-blush group-hover:ring-coral transition-all duration-300">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-dark-brown">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-taupe text-sm">Verified Customer</p>
                </div>
              </div>

              {/* Decorative border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-coral/0 group-hover:border-coral/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
