import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const images = [
  { src: '/papas.jpeg', alt: 'Papas fritas doradas', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Papas bastón', span: '' },
  { src: 'logopotines.jpeg', alt: 'Papas gajo rústico', span: '' },
  { src: '/papasfrita.png', alt: 'Papas frescas campo', span: '' },
  { src: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Papas onduladas', span: '' },
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Papas artesanales servidas', span: 'col-span-2' },
];

export default function Gallery() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-stone-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Galería
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-white mb-5">
            La calidad que se ve
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* Mosaic grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl ${img.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
