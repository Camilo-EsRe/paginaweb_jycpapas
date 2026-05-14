import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  {
    number: '01',
    title: 'Selección',
    subtitle: 'Del campo al proceso',
    description: 'Trabajamos con agricultores locales de confianza. Seleccionamos a mano solo las papas con el calibre, firmeza y madurez exactos para garantizar el mejor resultado.',
    image: '/recoleccion.png',
    color: 'bg-amber-50',
    accent: 'text-amber-600',
  },
  {
    number: '02',
    title: 'Lavado',
    subtitle: 'Limpieza profunda',
    description: 'Lavamos cada papa con agua potable en múltiples etapas. Eliminamos toda impureza de forma natural, sin químicos agresivos que alteren el sabor original.',
    image: '/lavado.png',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    number: '03',
    title: 'Corte Artesanal',
    subtitle: 'Precisión y uniformidad',
    description: 'Cada papa es cortada con equipos de precisión que garantizan tamaños uniformes para una cocción pareja. Bastón, gajo, ondulado o cuadrado: cada corte tiene su técnica.',
    image: '/corte.png',
    color: 'bg-orange-50',
    accent: 'text-orange-600',
  },
  {
    number: '04',
    title: 'Precocción',
    subtitle: 'El secreto del sabor',
    description: 'Sometemos las papas a un proceso controlado de precocción en agua a temperatura exacta. Esto fija la textura, acorta el tiempo de fritura y asegura el punto perfecto.',
    image: '/precoccion.png',
    color: 'bg-red-50',
    accent: 'text-red-600',
  },
  {
    number: '05',
    title: 'Empaque',
    subtitle: 'Sellado en frescura',
    description: 'Empacamos al vacío en bolsas especiales con atmósfera controlada. Sin conservantes. La frescura queda atrapada desde el momento del sellado hasta que abres el paquete.',
    image: '/empaque.png',
    color: 'bg-green-50',
    accent: 'text-green-600',
  },
  {
    number: '06',
    title: 'Distribución',
    subtitle: 'Frescos a tu puerta',
    description: 'Entregamos en cadena de frío en vehículos refrigerados. Garantizamos que el producto llegue en las mismas condiciones en que salió de nuestra planta: fresco, limpio y listo para usar.',
    image: '/transporte.png',
    color: 'bg-stone-50',
    accent: 'text-stone-600',
  },
];

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="proceso" className="py-24 lg:py-32 bg-stone-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Proceso de manufactura
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-5">
            Del campo a tu freidora
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Conoce cada etapa que garantiza que nuestra papa llegue a ti con la máxima frescura y calidad.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`group relative bg-stone-800 rounded-2xl overflow-hidden border border-stone-700 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {/* Step image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                />
                {/* Step number */}
                <div className="absolute top-4 left-4 bg-amber-400 text-stone-900 font-bold text-xl font-playfair w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-1">{step.subtitle}</div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line for large screens */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
