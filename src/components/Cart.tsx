import { X, Plus, Minus, Trash2, ShoppingCart, Tag } from 'lucide-react';
import { useCart, getItemPrice, PRICE_NORMAL, PRICE_BULK, BULK_THRESHOLD } from '../context/CartContext';

interface CartProps {
  onCheckout: () => void;
}

const formatCOP = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);

export default function Cart({ onCheckout }: CartProps) {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-amber-500" size={24} />
              <h2 className="font-montserrat font-bold text-xl text-stone-800">
                Tu Pedido
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X size={20} className="text-stone-500" />
            </button>
          </div>

          {/* Pricing note */}
          <div className="mx-6 mt-4 flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
            <Tag size={14} className="text-amber-600 shrink-0" />
            <p className="text-amber-800 text-xs leading-snug">
              <span className="font-semibold">{formatCOP(PRICE_NORMAL)}</span> c/u · Más de {BULK_THRESHOLD} unidades:{' '}
              <span className="font-semibold text-green-700">{formatCOP(PRICE_BULK)}</span> c/u
            </p>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="text-stone-300 mx-auto mb-4" />
                <p className="text-stone-500">Tu carrito está vacío</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-amber-600 font-semibold hover:underline"
                >
                  Ver productos
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(({ product, quantity }) => {
                  const unitPrice = getItemPrice(quantity);
                  const subtotal = unitPrice * quantity;
                  const isBulk = quantity > BULK_THRESHOLD;

                  return (
                    <div
                      key={product.id}
                      className="flex gap-4 p-4 bg-stone-50 rounded-xl"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-stone-800 text-sm leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-stone-500 text-xs mt-0.5">{product.weight}</p>

                        {/* Price per unit */}
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-stone-700 text-xs font-medium">
                            {formatCOP(unitPrice)} c/u
                          </span>
                          {isBulk && (
                            <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                              Precio mayoreo
                            </span>
                          )}
                        </div>

                        {/* Quantity controls + subtotal */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-stone-200 hover:bg-stone-300 rounded-full transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-semibold text-stone-800 text-sm">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-full transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <span className="ml-auto font-bold text-stone-800 text-sm">
                            {formatCOP(subtotal)}
                          </span>
                          <button
                            onClick={() => removeItem(product.id)}
                            className="p-1.5 text-red-400 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50">
              <div className="flex justify-between mb-1">
                <span className="text-stone-500 text-sm">Unidades:</span>
                <span className="font-semibold text-stone-700 text-sm">{totalItems}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-stone-800 font-semibold">Total del pedido:</span>
                <span className="font-extrabold text-stone-900 text-lg">{formatCOP(totalPrice)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Realizar Pedido
              </button>
              <p className="text-center text-stone-500 text-xs mt-3">
                Se enviará tu pedido por WhatsApp
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
