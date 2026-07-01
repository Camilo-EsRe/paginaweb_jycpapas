import { Leaf, Heart, Award, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const values = [
  { icon: Leaf, title: 'Natural', desc: 'Sin conservantes artificiales. Solo papa fresca del campo colombiano a tu mesa.' },
  { icon: Heart, title: 'Amor familiar', desc: 'Cada lote es elaborado con la pasión y dedicación que solo una familia empeñada puede ofrecer.' },
  { icon: Award, title: 'Calidad', desc: 'Procesos certificados y estándares de excelencia en cada etapa de producción artesanal.' },
  { icon: Users, title: 'Comunidad', desc: 'Trabajamos directamente con agricultores locales colombianos para garantizar frescura garantizada.' },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="nosotros" className="bg-cream-50 py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Quiénes somos
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Papas con sabor a hogar
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden h-auto">
              <img
                src="clientessatisfechos.png"
                alt="Selección artesanal de papas"
                className="w-full h-80 lg:h-[500px] h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-stone-900 rounded-2xl p-5 shadow-xl">
              <div className="font-montserrat font-extrabold text-3xl font-bold">200+</div>
              <div className="text-xs font-semibold uppercase tracking-wide mt-0.5">Clientes Satisfechos</div>
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="font-montserrat font-extrabold text-3xl font-bold text-stone-800 mb-6 leading-snug">
              Nuestra historia nació del esfuerzo familiar
            </h3>
            <p className="text-stone-600 leading-relaxed mb-5 font-montserrat tracking-wide text-sm">
              Nuestra historia nace del esfuerzo, la unión y los sueños de una familia colombiana que siempre creyó en el trabajo honesto y en el poder de compartir buenos momentos alrededor de la mesa. Más que producir papas artesanales, construimos un proyecto pensado para llevar bienestar, calidad y sabor a cada hogar y negocio que confía en nosotros.
            </p>
            <p className="text-stone-600 leading-relaxed mb-5 font-montserrat tracking-wide text-sm">
              Desde el inicio entendimos que las mejores recetas no solo se hacen con buenos ingredientes, sino también con dedicación, respeto y amor por lo que hacemos. Por eso trabajamos unidos, apoyando el campo colombiano, valorando a nuestra gente y manteniendo viva la esencia artesanal que nos representa.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-montserrat tracking-wide text-sm">
              Hoy seguimos creciendo con la misma intención con la que comenzamos: ofrecer un producto auténtico, hecho por emprendedores, para familias, restaurantes y personas que valoran lo natural, lo bien hecho y lo verdaderamente colombiano.
            </p>

            {/* Mission / Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <div className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">Misión</div>
                <p className="text-stone-700 text-xs leading-relaxed">Transformar la papa colombiana en experiencias de sabor auténticas, ofreciendo productos artesanales de alta calidad con innovación, pasión y compromiso por el bienestar de nuestros clientes.</p>
              </div>
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-5">
                <div className="text-stone-600 font-semibold text-sm uppercase tracking-wide mb-2">Visión</div>
                <p className="text-stone-700 text-xs leading-relaxed">Convertirnos en una marca líder en papas artesanales prefritas en Colombia, reconocida por nuestra calidad, innovación y por llevar el sabor de una familia emprendedora a cada mesa y negocio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-stone-100 hover:border-amber-200 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mx-auto mb-4 transition-colors">
                <Icon size={22} className="text-amber-600" />
              </div>
              <h4 className="font-montserrat font-extrabold text-lg font-bold text-stone-800 mb-2">{title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
