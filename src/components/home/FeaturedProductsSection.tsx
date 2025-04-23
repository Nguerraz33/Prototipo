import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';
import { ChevronRight } from 'lucide-react';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Productos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Nuestra selección de productos innovadores con la mejor calidad y precio.
            </p>
          </div>
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group"
          >
            Ver todos los productos
            <ChevronRight size={20} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;