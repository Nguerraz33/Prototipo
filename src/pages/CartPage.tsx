import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <div className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center">
            <ShoppingBag size={70} className="text-gray-300 mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-600 mb-8">
              Parece que aún no has agregado productos a tu carrito de compras.
            </p>
            <Link 
              to="/products" 
              className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/products" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            <span>Continuar Comprando</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 ml-auto">Tu Carrito</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="text-left py-4 px-6">Producto</th>
                    <th className="text-center py-4 px-2 hidden md:table-cell">Precio</th>
                    <th className="text-center py-4 px-2">Cantidad</th>
                    <th className="text-right py-4 px-6">Total</th>
                    <th className="text-right py-4 px-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cart.items.map(item => (
                    <tr key={item.product.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-16 h-16 rounded-md object-cover mr-4 hidden sm:block"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                            <p className="text-sm text-gray-500">{item.product.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-2 hidden md:table-cell">
                        <span className="font-medium">${item.product.price.toFixed(2)}</span>
                      </td>
                      <td className="text-center py-4 px-2">
                        <div className="flex justify-center">
                          <button 
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.product.id, item.quantity - 1);
                              }
                            }}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                            {item.quantity}
                          </div>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-right py-4 px-6">
                        <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </td>
                      <td className="text-right py-4 px-6">
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button 
                onClick={clearCart}
                className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen de la Orden</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos</span>
                  <span className="font-medium">${(cart.totalPrice * 0.16).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${(cart.totalPrice + cart.totalPrice * 0.16).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <CreditCard size={20} className="mr-2" />
                Proceder al Pago
              </button>
              
              <p className="text-gray-500 text-sm text-center mt-4">
                Este es un sitio de muestra. No se procesarán pagos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;