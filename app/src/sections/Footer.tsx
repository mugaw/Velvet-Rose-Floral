import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top 90%',
      onEnter: () => {
        const items = contentRef.current?.querySelectorAll('.animate-item');
        if (items && items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        }
      },
      once: true,
    });

    return () => trigger.kill();
  }, []);

  const quickLinks = [
    { name: 'Shop All', href: '#products' },
    { name: 'Collections', href: '#categories' },
    { name: 'About Us', href: '#about' },
    { name: 'Journal', href: '#blog' },
  ];

  const helpLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-footer-bg pt-20 lg:pt-32 pb-8"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-light-rose" />

      <div
        ref={contentRef}
        className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="animate-item font-serif text-3xl text-dark-brown block mb-6 hover:text-coral transition-colors duration-300"
            >
              Velvet Rose
            </a>
            <p className="animate-item text-muted-taupe text-sm leading-relaxed mb-6">
              Crafting moments of botanical elegance for life's most precious occasions. Each petal tells a story of love and beauty.
            </p>
            
            {/* Social Links */}
            <div className="animate-item flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xs hover:shadow-soft hover:bg-coral group transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-taupe group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-item">
            <h4 className="font-serif text-lg text-dark-brown mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-taupe hover:text-coral transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="animate-item">
            <h4 className="font-serif text-lg text-dark-brown mb-6">Help & Support</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-taupe hover:text-coral transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-item">
            <h4 className="font-serif text-lg text-dark-brown mb-6">Stay in Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@velvetrose.com"
                className="flex items-center gap-3 text-muted-taupe hover:text-coral transition-colors duration-300 text-sm"
              >
                <Mail className="h-4 w-4" />
                hello@velvetrose.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-muted-taupe hover:text-coral transition-colors duration-300 text-sm"
              >
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-3 text-muted-taupe text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Bloom Street<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-muted-taupe text-sm mb-4">Subscribe to our newsletter for floral inspiration and exclusive offers.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white border-light-rose focus:border-coral rounded-full text-sm"
                />
                <Button
                  size="icon"
                  className="bg-coral hover:bg-coral/90 rounded-full flex-shrink-0"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="animate-item pt-8 border-t border-light-rose">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-taupe text-sm">
              © 2026 Velvet Rose. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-taupe hover:text-coral text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-taupe hover:text-coral text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
