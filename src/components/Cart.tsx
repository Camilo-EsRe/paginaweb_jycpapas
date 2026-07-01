import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onCheckout: () => void;
}

export default function Cart({ onCheckout }: CartProps) {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalItems } = useCart();

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
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-4 bg-stone-50 rounded-xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-stone-800 text-sm">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-xs mt-1">{product.weight}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-stone-200 hover:bg-stone-300 rounded-full transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-semibold text-stone-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-full transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50">
              <div className="flex justify-between mb-4">
                <span className="text-stone-600">Total de productos:</span>
                <span className="font-bold text-stone-800">{totalItems} unidades</span>
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
