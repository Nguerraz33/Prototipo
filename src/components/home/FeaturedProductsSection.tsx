import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';
import { ChevronRight } from 'lucide-react';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 relative z-10">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 relative inline-block">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Productos Destacados
              </span>
              <span className="block h-1 w-20 bg-teal-400 rounded-full mt-2" />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Nuestra selección de productos innovadores con la mejor calidad y precio.
            </p>
          </div>

          <Link
            to="/products"
            className="mt-6 md:mt-0 inline-flex items-center px-5 py-2.5 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 group"
          >
            Ver todos los productos
            <ChevronRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl rounded-2xl bg-white p-3"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Fondo decorativo sutil */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-100 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full opacity-20 blur-3xl z-0"></div>
    </section>
  );
};

export default FeaturedProductsSection;
