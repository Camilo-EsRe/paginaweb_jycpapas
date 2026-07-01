import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Calidad', href: '#calidad' },
  { label: 'Galería', href: '#galeria' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderClick = () => {
    setOpen(false);
    if (totalItems > 0) {
      setIsOpen(true);
    } else {
      handleLink('#productos');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLink('#inicio')}
          className="flex items-center gap-2 group"
        >
          <img
            src="/logopotines.jpeg"
            alt="J&C Papas"
            className="h-11 w-auto rounded-lg object-contain shadow-md group-hover:scale-105 transition-transform duration-300 ring-1 ring-amber-400/30"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-sm text-stone-200 hover:text-amber-300 transition-colors duration-200 font-montserrat font-medium tracking-wide"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={handleOrderClick}
            className="ml-2 px-5 py-2 bg-amber-400 text-stone-900 font-semibold text-sm rounded-full hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-amber-400/30 flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            Hacer Pedido
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-stone-900/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left py-3 text-stone-200 hover:text-amber-300 font-medium border-b border-stone-800 text-sm transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={handleOrderClick}
            className="mt-4 px-5 py-3 bg-amber-400 text-stone-900 font-semibold rounded-full hover:bg-amber-300 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Hacer Pedido
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
