export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-stone-900 font-bold text-xs">JC</span>
              </div>
              <span className="font-montserrat font-extrabold text-lg text-amber-300 tracking-wide">
                J&C<span className="text-white">PAPAS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Papas artesanales precocidas de alta calidad, listas para freír. Del campo colombiano a tu mesa con frescura y tradición familiar.
            </p>
            <div className="text-xs text-stone-500 bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 inline-block">
              Sabor de casa · Calidad de empresa
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegación</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Quiénes somos', href: '#nosotros' },
                { label: 'Productos', href: '#productos' },
                { label: 'Proceso', href: '#proceso' },
                { label: 'Galería', href: '#galeria' },
                { label: 'Preguntas frecuentes', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm hover:text-amber-300 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Productos</div>
            <ul className="space-y-2.5 text-sm">
              {[
                'Papas francesa Normal 9x9',
                'Papas francesa Con Cascara 9x9',
                'Papas Casco',
                'Papas francesa Normal 12x12',
                'Papas francesa Con Cascara 12x12',
              ].map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo('#productos')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+573004567890" className="hover:text-amber-300 transition-colors">
                  +57 300 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:pedidos@papaoro.com" className="hover:text-amber-300 transition-colors">
                  pedidos@papaoro.com
                </a>
              </li>
              <li className="text-stone-500 text-xs leading-relaxed">
                Zona Industrial Norte, Bodega 14<br />Medellín, Colombia
              </li>
            </ul>

            <div className="mt-5">
              <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Redes sociales</div>
              <div className="flex gap-2">
                {['IG', 'FB', 'TT'].map((s) => (
                  <span
                    key={s}
                    className="w-8 h-8 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-xs font-bold hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © {year} J&C PAPAS S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-xs text-stone-600">
            Hecho con pasión familiar en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
