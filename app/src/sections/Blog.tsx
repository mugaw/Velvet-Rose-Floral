import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

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

      // Blog posts animation
      const posts = postsRef.current?.querySelectorAll('.blog-post');
      if (posts) {
        posts.forEach((post, index) => {
          const postTrigger = ScrollTrigger.create({
            trigger: post,
            start: 'top 80%',
            onEnter: () => {
              gsap.fromTo(
                post,
                { y: 60, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: 'power3.out',
                }
              );
            },
            once: true,
          });
          triggers.push(postTrigger);
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
      id="blog"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-sm font-medium text-coral tracking-widest uppercase mb-4 block">
              Journal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight">
              From Our <span className="text-coral">Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-coral hover:text-coral/80 font-medium transition-colors duration-300 group"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Grid - Editorial Layout */}
        <div ref={postsRef} className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Post (Hero) */}
          <div className="blog-post group lg:row-span-2 cursor-pointer" style={{ opacity: 0 }}>
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-all duration-700 ease-bloom group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                  <span>{blogPosts[0].date}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 group-hover:text-soft-pink transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base line-clamp-2 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-coral font-medium group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Posts */}
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="blog-post group cursor-pointer"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-3xl p-4 shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom">
                {/* Image */}
                <div className="sm:w-48 lg:w-56 flex-shrink-0 aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-bloom group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center py-2">
                  <div className="flex items-center gap-4 text-muted-taupe text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-muted-taupe rounded-full" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-taupe text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-coral text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
