import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-stone-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto y pedidos
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl lg:text-5xl text-white mb-5">
            Hablemos de tu próximo pedido
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto text-base leading-relaxed">
            Estamos listos para atenderte. Cuéntanos qué necesitas y nos ponemos en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: 'Teléfono', value: '+57 300 456 7890', href: 'tel:+573004567890' },
                { icon: Mail, label: 'Correo electrónico', value: 'pedidos@papaoro.com', href: 'mailto:pedidos@papaoro.com' },
                { icon: MapPin, label: 'Dirección', value: 'Zona Industrial Norte, Bodega 14, Medellín, Colombia', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-stone-800 border border-stone-700 group-hover:border-amber-500/50 flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-stone-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573004567890?text=Hola%20J%26C%20PAPAS%2C%20quisiera%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/30 mb-8"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>

            {/* Social links */}
            <div>
              <div className="text-stone-400 text-sm font-semibold uppercase tracking-wide mb-4">Síguenos</div>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold rounded-lg hover:border-amber-500/50 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-stone-700 h-52">
              <iframe
                title="Ubicación PapaOro"
                src="https://googleusercontent.com/maps.google.com/1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-stone-800 border border-stone-700 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <h3 className="font-montserrat font-extrabold text-2xl text-white mb-2">Mensaje enviado</h3>
                  <p className="text-stone-400 text-sm">Gracias por contactarnos. El equipo de J&C PAPAS se pondrá en contacto contigo pronto.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', type: '', message: '' }); }}
                    className="mt-6 px-5 py-2 border border-stone-600 text-stone-300 rounded-full text-sm hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-montserrat font-extrabold text-xl text-white mb-5">Formulario de contacto</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-stone-400 text-xs font-semibold uppercase tracking-wide mb-1.5">Nombre completo *</label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-900 border border-stone-600 text-white rounded-xl px-4 py-2.5 text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-stone-400 text-xs font-semibold uppercase tracking-wide mb-1.5">Teléfono</label>
                      <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        className="w-full bg-stone-900 border border-stone-600 text-white rounded-xl px-4 py-2.5 text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="+57 300..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-stone-400 text-xs font-semibold uppercase tracking-wide mb-1.5">Correo electrónico *</label>
                    <input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="w-full bg-stone-900 border border-stone-600 text-white rounded-xl px-4 py-2.5 text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="tu@correo.com"
                    />
                  </div>

                  {/* Bloque del select con corrección de accesibilidad (htmlFor + id) */}
                  <div>
                    <label htmlFor="type" className="block text-stone-400 text-xs font-semibold uppercase tracking-wide mb-1.5">Tipo de consulta</label>
                    <div className="relative mt-1">
                      <select
                        id="type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full appearance-none bg-stone-900 border border-stone-600 text-white rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-stone-900 text-white">Selecciona una opción</option>
                        <option value="pedido" className="bg-stone-900 text-white">Hacer un pedido</option>
                        <option value="distribucion" className="bg-stone-900 text-white">Distribución / Mayoreo</option>
                        <option value="personalizado" className="bg-stone-900 text-white">Producto personalizado</option>
                        <option value="otro" className="bg-stone-900 text-white">Otra consulta</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-stone-400 text-xs font-semibold uppercase tracking-wide mb-1.5">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-stone-900 border border-stone-600 text-white rounded-xl px-4 py-2.5 text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Cuéntanos qué necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-amber-400 text-stone-900 font-semibold rounded-xl hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/20"
                  >
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}