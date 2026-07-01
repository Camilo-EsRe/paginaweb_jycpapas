import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Calendar, User, Phone, MapPin, Package } from 'lucide-react';
import { useCart, CartItem, getItemPrice } from '../context/CartContext';

const formatCOP = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);

interface OrderFormProps {
  onClose: () => void;
}

export default function OrderForm({ onClose }: OrderFormProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    comments: '',
    deliveryDate: '',
  });

  useEffect(() => {
    const minDate = getMinimumDeliveryDate();
    setForm((prev) => ({ ...prev, deliveryDate: minDate }));
  }, []);

  const getMinimumDeliveryDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 2);
    return minDate.toISOString().split('T')[0];
  };

  const getAvailableDates = () => {
    const dates: { value: string; label: string }[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2);

    for (let i = 0; i < 14; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

      const dateString = date.toISOString().split('T')[0];
      const label = `${dayNames[date.getDay()]} ${date.getDate()} de ${monthNames[date.getMonth()]}`;

      dates.push({ value: dateString, label });
    }

    return dates;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const date = getAvailableDates().find(d => d.value === form.deliveryDate);
    const itemsList = items
      .map((item: CartItem) => {
        const unitPrice = getItemPrice(item.quantity);
        const subtotal = unitPrice * item.quantity;
        const bulkNote = item.quantity > 5 ? ' ✓ precio mayoreo' : '';
        return `  - ${item.product.name} x${item.quantity} (${item.product.weight}) = ${formatCOP(subtotal)}${bulkNote}`;
      })
      .join('\n');

    const message = `¡Hola J&C PAPAS! Quiero hacer un pedido:

*DATOS DEL CLIENTE*
Nombre: ${form.name}
Teléfono: ${form.phone}
Dirección: ${form.address}

*PEDIDO*
${itemsList}

*TOTAL: ${formatCOP(totalPrice)}*

*FECHA DE ENTREGA*
${date?.label || form.deliveryDate}

*COMENTARIOS*
${form.comments || 'Sin comentarios'}

_Enviado desde la web de J&C PAPAS_`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/573004567890?text=${message}`;

    window.open(whatsappUrl, '_blank');

    setSent(true);
    clearCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white z-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <div>
            <h2 className="font-montserrat font-bold text-xl text-stone-800">
              Finalizar Pedido
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Completa tus datos para enviar el pedido por WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors"
          >
            <X size={20} className="text-stone-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-2xl text-stone-800 mb-2">
                ¡Pedido Enviado!
              </h3>
              <p className="text-stone-500 mb-6">
                Tu pedido ha sido enviado por WhatsApp. Te contactaremos pronto para confirmar.
              </p>

              {/* Promotional CTA */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 mb-6">
                <Package className="text-amber-600 mx-auto mb-3" size={40} />
                <h4 className="font-montserrat font-bold text-lg text-stone-800 mb-2">
                  ¿Manejas inventario de papas?
                </h4>
                <p className="text-stone-600 text-sm mb-4">
                  Registrate y controla tu stock, pedidos y proveedores desde una sola plataforma.
                </p>
                <a
                  href="https://wa.me/573004567890?text=Hola%20J%26C%20PAPAS%2C%20me%20interesa%20el%20sistema%20de%20inventario%20para%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  AHORA REGISTRATE Y MANEJA TU INVENTARIO DE PAPAS
                  <Send size={18} />
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-3 border border-stone-300 text-stone-600 rounded-xl hover:bg-stone-50 transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Order summary */}
              <div className="bg-stone-50 rounded-xl p-4 mb-2">
                <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                  <Package size={18} className="text-amber-500" />
                  Resumen del pedido
                </h4>
                <div className="space-y-2">
                  {items.map((item: CartItem) => {
                    const unitPrice = getItemPrice(item.quantity);
                    const subtotal = unitPrice * item.quantity;
                    const isBulk = item.quantity > 5;
                    return (
                      <div key={item.product.id} className="flex justify-between items-start text-sm gap-2">
                        <div className="flex-1">
                          <span className="text-stone-700 font-medium">{item.product.name}</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-stone-500 text-xs">x{item.quantity} · {formatCOP(unitPrice)} c/u</span>
                            {isBulk && (
                              <span className="text-xs bg-green-100 text-green-700 font-semibold px-1.5 py-0.5 rounded-full">
                                Mayoreo
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="font-bold text-stone-800 whitespace-nowrap">{formatCOP(subtotal)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-stone-200 flex justify-between">
                  <span className="font-bold text-stone-800">Total</span>
                  <span className="font-extrabold text-stone-900 text-base">{formatCOP(totalPrice)}</span>
                </div>
              </div>

              {/* Customer info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-stone-700 text-sm font-semibold mb-2">
                    <User size={16} className="text-amber-500" />
                    Nombre completo *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-300 text-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-stone-700 text-sm font-semibold mb-2">
                    <Phone size={16} className="text-amber-500" />
                    Teléfono *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="w-full border border-stone-300 text-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                    placeholder="+57 300..."
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-stone-700 text-sm font-semibold mb-2">
                  <MapPin size={16} className="text-amber-500" />
                  Dirección de entrega *
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 text-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-stone-700 text-sm font-semibold mb-2">
                  <Calendar size={16} className="text-amber-500" />
                  Fecha de entrega *
                </label>
                <select
                  name="deliveryDate"
                  value={form.deliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 text-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                >
                  {getAvailableDates().map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
                <p className="text-stone-500 text-xs mt-1">
                  * Mínimo 2 días para producción y preparación del pedido
                </p>
              </div>

              <div>
                <label className="text-stone-700 text-sm font-semibold mb-2 block">
                  Comentarios adicionales
                </label>
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-stone-300 text-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors resize-none"
                  placeholder="Instrucciones especiales, horario de entrega, etc."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg"
              >
                <Send size={18} />
                Enviar pedido por WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
