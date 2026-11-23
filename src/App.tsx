import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Quality from './components/Quality';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import OrderForm from './components/OrderForm';
import { CartProvider } from './context/CartContext';

function App() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  useEffect(() => {
    if (!window.location.hash) return;
    // El navegador aún no conoce el elemento al correr el primer render, esperamos al siguiente frame.
    requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const handleCheckout = () => {
    setShowOrderForm(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Process />
          <Quality />
          <Benefits />
          <Gallery />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />

        {/* Cart system */}
        <Cart onCheckout={handleCheckout} />
        <CartButton />

        {/* Order form modal */}
        {showOrderForm && (
          <OrderForm onClose={() => setShowOrderForm(false)} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
