import { Clock, Flame, Star, TrendingUp, Smile, Truck } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const benefits = [
  { icon: Clock, title: 'Ahorro real de tiempo', desc: 'Olvida pelar, cortar y precocer. Nuestro producto llega listo para ir directo a la freidora, reduciendo hasta un 70% el tiempo de preparación.', color: 'bg-amber-500' },
  { icon: Flame, title: 'Fácil preparación', desc: 'Sin instrucciones complicadas. Calienta aceite, fríe y sirve. Proceso simple, resultado espectacular cada vez.', color: 'bg-orange-500' },
  { icon: Star, title: 'Sabor artesanal auténtico', desc: 'A diferencia de los congelados industriales, nuestra papa precocida conserva el sabor real, la textura crujiente y el aroma genuino.', color: 'bg-yellow-500' },
  { icon: TrendingUp, title: 'Calidad premium constante', desc: 'Cada paquete cumple el mismo estándar de calidad. Sin sorpresas, sin variaciones. Consistencia que tu negocio necesita.', color: 'bg-green-600' },
  { icon: Smile, title: 'Clientes más felices', desc: 'Una mejor papa frita significa mejores reseñas, clientes que regresan y reputación que crece sola. Invertir en calidad se nota.', color: 'bg-blue-500' },
  { icon: Truck, title: 'Entrega puntual garantizada', desc: 'Contamos con rutas de distribución establecidas y logística refrigerada para que nunca te quedes sin producto.', color: 'bg-stone-700' },
];

export default function Benefits() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Por qué elegirnos
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Beneficios que se sienten
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
            Nuestro producto no solo es una papa precocida: es una herramienta que hace crecer tu negocio y facilita tu cocina.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`group relative bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-montserrat font-extrabold text-lg font-bold text-stone-800 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
