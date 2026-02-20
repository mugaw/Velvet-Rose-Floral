import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#products' },
    { name: 'Collections', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Journal', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-drift ${
        isScrolled
          ? 'bg-cream/80 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl text-dark-brown tracking-wide hover:text-coral transition-colors duration-300"
          >
            Velvet Rose
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-rich-brown hover:text-coral transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-coral transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-pale-blush/50 transition-colors duration-300"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5 text-dark-brown" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-coral text-white text-xs font-medium rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-pale-blush/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-dark-brown" />
              ) : (
                <Menu className="h-5 w-5 text-dark-brown" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-sharp ${
            mobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-light-rose">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-rich-brown hover:text-coral transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
