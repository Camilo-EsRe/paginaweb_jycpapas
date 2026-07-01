import { ShoppingCart, Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const products = [
    {
    name: 'Papa Francesa Normal 9x9',
    image: '/papas9x9.png',
    description: 'Corte clásico y uniforme, ideal para lograr papas crocantes por fuera y suaves por dentro.',
    weight: '2.500 g',
    price: '$29.900',
    tag: '',
    tagColor: 'bg-amber-400 text-stone-900',
    benefits: ['Precocción perfecta', 'Congelado IQF', 'Lista en 5 min'],
  },
  {
    name: 'Papa Francesa Normal 12x12',
    image: '/papas12x12.png',
    description: 'Corte más grueso, perfecto para una experiencia de sabor más intensa y una textura más artesanal.',
    weight: '2.500 g',
    price: '$29.900',
    tag: '',
    tagColor: 'bg-stone-800 text-white',
    benefits: ['Con cáscara natural', 'Sabor intenso', 'Textura rústica'],
  },
  {
    name: 'Papa Casco con Cáscara',
    image: '/cascos.png',
    description: 'Corte tipo casco conservando la cáscara natural de la papa, ofreciendo un sabor auténtico y una presentación rústica.',
    weight: '2.500 g',
    price: '$29.900',
    tag: '',
    tagColor: 'bg-green-700 text-white',
    benefits: ['Corte especial', 'Retiene salsas', 'Presentación premium'],
  },
    {
    name: 'Papa Francesa con Cáscara 12x12',
    image: '/papas12x12cascara.png',
    description: 'Corte grueso con cáscara, ideal para quienes buscan una papa más robusta, crocante y con estilo artesanal.',
    weight: '2.500 g',
    price: '$29.900',
    tag: '',
    tagColor: 'bg-orange-500 text-white',
    benefits: ['Multiformato', 'Ideal gastronomía', 'Cocción rápida'],
  },
  {
    name: 'Papa Francesa con Cáscara 9x9',
    image: '/papas9x9cascara.png',
    description: 'Pequeños cubos artesanales ideales para bowls, ensaladas calientes, guarniciones y platillos creativos.',
    weight: '2.500 g',
    price: '$29.900',
    tag: '',
    tagColor: 'bg-orange-500 text-white',
    benefits: ['Multiformato', 'Ideal gastronomía', 'Cocción rápida'],
  },
];

export default function Products() {
  const { ref, isVisible } = useIntersectionObserver();

  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="productos" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestros productos
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Cada corte, una experiencia
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
            Elaboramos cada presentación con papas seleccionadas del campo, garantizando frescura y sabor en cada paquete.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${product.tagColor}`}>
                  {product.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-montserrat font-extrabold text-lg font-bold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-3 flex-1">{product.description}</p>

                {/* Weight */}
                {/* Weight & Price */}
<div className="flex items-center justify-between mb-4">
  <div className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
    Presentación: {product.weight}
  </div>

  <div className="text-2xl font-extrabold text-amber-500">
    {product.price}
  </div>
</div>

                {/* Benefits */}
                <ul className="space-y-1.5 mb-5">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-stone-600">
                      <Check size={13} className="text-green-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-800 text-white text-sm font-semibold rounded-xl hover:bg-amber-500 hover:text-stone-900 transition-all duration-300"
                >
                  <ShoppingCart size={15} />
                  Pedir ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className={`text-center text-stone-400 text-sm mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={scrollToContact}
            className="text-amber-600 font-semibold hover:underline"
          >
            Contáctanos
          </button>{' '}
          
        </p>
      </div>
    </section>
  );
}
