import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Calidad', href: '#calidad' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-stone-900 font-bold text-xs">JC</span>
          </div>
          <span className="font-playfair text-xl font-bold text-amber-300 tracking-wide">
            J&C<span className="text-white">PAPAS</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-sm text-stone-200 hover:text-amber-300 transition-colors duration-200 font-inter font-medium tracking-wide"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contacto')}
            className="ml-2 px-5 py-2 bg-amber-400 text-stone-900 font-semibold text-sm rounded-full hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-amber-400/30"
          >
            Hacer Pedido
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
            onClick={() => handleLink('#contacto')}
            className="mt-4 px-5 py-3 bg-amber-400 text-stone-900 font-semibold rounded-full hover:bg-amber-300 transition-colors text-sm"
          >
            Hacer Pedido
          </button>
        </nav>
      </div>
    </header>
  );
}
