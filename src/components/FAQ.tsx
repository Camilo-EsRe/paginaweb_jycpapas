import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqs = [
  {
    q: '¿Cuál es la vida útil del producto una vez abierto el paquete?',
    a: 'Una vez abierto, el producto debe refrigerarse entre 2°C y 5°C y consumirse en un máximo de 48 horas. Si permanece sellado, la vida útil es de 7 a 10 días en refrigeración o hasta 3 meses en congelación.',
  },
  {
    q: '¿Los productos contienen conservantes o aditivos artificiales?',
    a: 'No. Nuestras papas precocidas son 100% naturales. Solo contienen papa y se procesan con agua y temperatura controlada. No añadimos sal, conservantes, colorantes ni ningún aditivo artificial.',
  },
  {
    q: '¿Cuál es la cantidad mínima de pedido?',
    a: 'Manejamos pedidos desde 5 kg para clientes particulares y 20 kg para establecimientos comerciales. Ofrecemos descuentos progresivos según el volumen de compra.',
  },
  {
    q: '¿Hacen entregas a domicilio o debo recoger el producto?',
    a: 'Contamos con rutas de distribución refrigerada en toda el área metropolitana y zonas cercanas. Podemos coordinar entrega directa a tu negocio o domicilio sin costo adicional para pedidos superiores a 10 kg.',
  },
  {
    q: '¿Puedo solicitar un corte o presentación personalizada?',
    a: 'Sí. Si tienes requerimientos especiales de corte, calibre o empaque, podemos trabajar contigo para desarrollar una presentación a medida. Contáctanos para evaluar tu solicitud sin compromiso.',
  },
  {
    q: '¿Cómo puedo hacer mi primer pedido?',
    a: 'Puedes contactarnos vía WhatsApp, correo electrónico o el formulario de esta página. Nuestro equipo te guía en todo el proceso, desde elegir el producto hasta coordinar la entrega. Primer pedido sin mínimo obligatorio.',
  },
  {
    q: '¿Trabajan con restaurantes, negocios de comida rápida o solo venta al detalle?',
    a: 'Trabajamos con todo tipo de clientes: restaurantes, cafeterías, food trucks, cadenas de comida rápida, comedores corporativos y también hogares. Tenemos planes de volumen para cada necesidad.',
  },
  {
    q: '¿Cómo se prepara correctamente la papa precocida PapaOro?',
    a: 'Es muy simple: calienta aceite vegetal a 175°C, agrega las papas directamente congeladas o refrigeradas, fríe por 3 a 5 minutos hasta dorar al gusto, escurre, sazona y sirve. ¡Sin descongelar ni preparación previa!',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Resolvemos tus dudas
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className={`space-y-3 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-stone-100 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-amber-50/50 transition-colors"
              >
                <span className="text-stone-800 font-semibold text-sm leading-snug">{faq.q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  {open === i
                    ? <Minus size={12} className="text-amber-700" />
                    : <Plus size={12} className="text-amber-700" />
                  }
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
