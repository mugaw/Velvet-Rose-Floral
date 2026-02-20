import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
      const items = contentRef.current?.querySelectorAll('.animate-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.2, ease: 'power2.out' }
        );
      }
    } else {
      // Close animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  const handleCheckout = () => {
    alert('Thank you for shopping with Velvet Rose! This is a demo checkout.');
    clearCart();
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-dark-brown/50 backdrop-blur-sm z-50 opacity-0 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-96 lg:w-[450px] bg-cream z-50 shadow-2xl transform translate-x-full overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-rose animate-item">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-coral" />
            <h2 className="font-serif text-2xl text-dark-brown">Your Cart</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-pale-blush rounded-full"
            onClick={closeCart}
          >
            <X className="h-5 w-5 text-dark-brown" />
          </Button>
        </div>

        {/* Cart Items */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-item">
              <div className="w-20 h-20 bg-pale-blush rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-coral" />
              </div>
              <h3 className="font-serif text-xl text-dark-brown mb-2">Your cart is empty</h3>
              <p className="text-muted-taupe text-sm mb-6">
                Add some beautiful blooms to get started.
              </p>
              <Button
                onClick={closeCart}
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 animate-item group"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-xs">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base text-dark-brown truncate mb-1">
                      {item.name}
                    </h4>
                    <p className="text-coral font-medium text-sm mb-3">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-white rounded-full border border-light-rose">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-pale-blush rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium text-dark-brown">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-pale-blush rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-taupe hover:text-coral hover:bg-pale-blush rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <span className="font-serif text-lg text-dark-brown">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-light-rose p-6 space-y-4 animate-item">
            {/* Subtotal */}
            <div className="flex justify-between text-sm">
              <span className="text-muted-taupe">Subtotal</span>
              <span className="text-dark-brown font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-taupe">Shipping</span>
              <span className="text-dark-brown font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-brown font-medium">Total</span>
              <span className="font-serif text-2xl text-coral">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-base font-medium shadow-soft hover:shadow-lifted transition-all duration-300"
            >
              Proceed to Checkout
            </Button>

            {/* Continue Shopping */}
            <Button
              variant="ghost"
              onClick={closeCart}
              className="w-full text-muted-taupe hover:text-coral transition-colors duration-300"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
