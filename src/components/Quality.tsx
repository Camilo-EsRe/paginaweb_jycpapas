import { ShieldCheck, Leaf, Thermometer, BadgeCheck, Droplets, PackageCheck } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const standards = [
  { icon: ShieldCheck, title: 'Estándares sanitarios certificados', desc: 'Cumplimos con todas las normativas de higiene y seguridad alimentaria vigentes en nuestra región.' },
  { icon: Leaf, title: 'Ingredientes 100% naturales', desc: 'Solo papa, agua y temperatura. Sin aditivos, conservantes ni colorantes artificiales de ningún tipo.' },
  { icon: Thermometer, title: 'Cadena de frío ininterrumpida', desc: 'Desde la planta hasta tu negocio, el producto se mantiene a temperatura controlada en todo momento.' },
  { icon: Droplets, title: 'Proceso de lavado riguroso', desc: 'Múltiples etapas de lavado con agua potable garantizan que el producto llegue limpio y sin residuos.' },
  { icon: PackageCheck, title: 'Empaque hermético sellado', desc: 'Bolsas con atmósfera modificada que preservan la frescura sin necesidad de conservantes químicos.' },
  { icon: BadgeCheck, title: 'Garantía de frescura total', desc: 'Si no quedas satisfecho con la calidad del producto, te lo reponemos. Tu confianza es nuestra prioridad.' },
];

export default function Quality() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="calidad" className="py-24 lg:py-32 bg-amber-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/corte.png"
                alt="Calidad y frescura J&C PAPAS"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-amber-100 max-w-[180px]">
              <div className="text-4xl font-bold font-montserrat font-extrabold text-amber-500">200+</div>
              <div className="text-stone-600 text-xs font-semibold mt-1 leading-tight">Clientes que confían en nosotros</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stone-900 text-white rounded-2xl p-5 shadow-xl max-w-[180px]">
              <div className="text-4xl font-bold font-montserrat font-extrabold text-amber-400">100%</div>
              <div className="text-stone-300 text-xs font-semibold mt-1 leading-tight">Natural sin conservantes</div>
            </div>
          </div>

          {/* Right: content */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Calidad y frescura
            </span>
            <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5 leading-tight">
              Garantía de familia
            </h2>
            <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />
            <p className="text-stone-600 leading-relaxed mb-8">
              En J&C PAPAS, la calidad no es un departamento: es una filosofía familiar. Cada proceso, cada decisión y cada paquete refleja nuestro compromiso real con la excelencia alimentaria.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {standards.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-stone-800 text-sm font-semibold mb-0.5">{title}</div>
                    <div className="text-stone-500 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
