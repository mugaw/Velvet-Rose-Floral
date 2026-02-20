import { CartProvider } from '@/hooks/useCart';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Categories from '@/sections/Categories';
import Products from '@/sections/Products';
import Features from '@/sections/Features';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';
import Blog from '@/sections/Blog';
import Footer from '@/sections/Footer';
import CartDrawer from '@/components/CartDrawer';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Hero />
          <About />
          <Categories />
          <Products />
          <Features />
          <Testimonials />
          <CTA />
          <Blog />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
