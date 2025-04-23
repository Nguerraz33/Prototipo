import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick actions */}
        <div className={`absolute top-4 right-4 flex flex-col space-y-2 transform transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button 
            onClick={toggleFavorite}
            className={`p-2 rounded-full shadow-md transition-colors duration-300 ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
          </button>
          <button 
            className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition-colors duration-300"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
        </div>
        
        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-blue-800/80 text-white px-3 py-1 text-xs rounded-full">
          {product.category}
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2" style={{ height: '40px' }}>
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2 px-4 flex items-center transition-colors duration-300"
          >
            <ShoppingCart size={18} className="mr-1" />
            <span>Añadir</span>
          </button>
        </div>
      </div>
      
      {/* Featured badge */}
      {product.featured && (
        <div className="absolute top-0 left-0 bg-yellow-500 text-white py-1 px-4 transform origin-top-left rotate-45 translate-y-5 translate-x-2">
          <span className="text-xs font-bold">Destacado</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;