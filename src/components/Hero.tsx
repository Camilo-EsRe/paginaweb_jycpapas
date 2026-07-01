import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Papas artesanales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/55 to-stone-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-transparent to-stone-900/20" />
      </div>

      {/* Decorative grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Sabor de casa, calidad de empresa
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6 animate-slide-up">
          <img
            src="/logopotines.jpeg"
            alt="J&C Papas"
            className="h-36 sm:h-44 lg:h-52 w-auto object-contain rounded-2xl shadow-2xl ring-2 ring-amber-400/40 drop-shadow-[0_0_32px_rgba(251,191,36,0.35)]"
          />
        </div>

        {/* Subheadline */}
        <p className="text-stone-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-montserrat font-light tracking-wide animate-slide-up-delay">
          Papas precocidas artesanales, seleccionadas a mano y listas para freír.
          Tradición, frescura y calidad en cada paquete.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
          <button
            onClick={() => scroll('#productos')}
            className="px-8 py-4 bg-amber-400 text-stone-900 font-semibold rounded-full text-base hover:bg-amber-300 transition-all duration-300 shadow-xl hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            Ver Nuestros Productos
          </button>
          <button
            onClick={() => scroll('#contacto')}
            className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full text-base hover:border-amber-300 hover:text-amber-300 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Hacer un Pedido
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-slow">
          {[
            { value: '200+', label: 'Clientes satisfechos' },
            { value: '100%', label: 'Natural y fresco' },
            { value: 'Familia', label: 'Emprendedora colombiana' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-montserrat font-extrabold">{s.value}</div>
              <div className="text-xs text-stone-300 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll('#nosotros')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-300 transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
