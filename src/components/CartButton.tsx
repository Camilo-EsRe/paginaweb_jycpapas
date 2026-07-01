import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartButton() {
  const { totalItems, setIsOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-30 bg-amber-500 hover:bg-amber-600 text-stone-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <ShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
        {totalItems}
      </span>
    </button>
  );
}
