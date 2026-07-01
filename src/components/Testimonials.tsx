import { Star, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Dueño de Restaurante "La Brasa"',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Llevamos 3 años usando PapaOro y no cambiaríamos a nadie. La calidad es consistente, la entrega puntual y mis clientes siempre preguntan qué papas usamos. El secreto del éxito está en el producto.',
    stars: 5,
  },
  {
    name: 'Andrea Ruiz',
    role: 'Chef Ejecutiva, Gastrobar "Roots"',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Como chef, soy muy exigente con los ingredientes. PapaOro cumple todos mis estándares: producto limpio, corte uniforme, cocción perfecta y sobre todo, sabor real. No es una papa industrial, se nota.',
    stars: 5,
  },
  {
    name: 'Miguel Torres',
    role: 'Propietario, Food Truck "El Frito"',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Para un food truck, la rapidez es vital. Con PapaOro reduje mi tiempo de prep a la mitad y mejoré la calidad. Mis ventas aumentaron porque la gente volvía solo por las papas. Increíble producto.',
    stars: 5,
  },
  {
    name: 'Sofía Herrera',
    role: 'Administradora, Cafetería "El Rincón"',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Probé varias marcas antes de llegar a PapaOro. La diferencia es abismal. El empaque conserva la frescura, el sabor es natural y el equipo de distribución siempre cumple. 100% recomendados.',
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32 bg-cream-warm">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonios
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-stone-100 hover:border-amber-200 transition-all duration-400 relative
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-amber-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-100"
                />
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
