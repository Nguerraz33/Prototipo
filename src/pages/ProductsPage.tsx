import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = [...new Set(products.map(product => product.category))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
                            
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra amplia selección de productos tecnológicos y para el hogar.
            Calidad e innovación garantizada en cada categoría.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search input */}
            <div className="relative flex-grow">
              <input 
                type="text" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..." 
                className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            {/* Filter button for mobile */}
            <button 
              className="md:hidden flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-lg transition-colors duration-200"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={20} />
              <span>Filtros</span>
            </button>
            
            {/* Category filter */}
            <div className="hidden md:flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-gray-500" />
                <span className="text-gray-700 font-medium">Categoría:</span>
              </div>
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('')}
              >
                Todas
              </button>
              {categories.map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile filters */}
          {isFilterOpen && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-medium text-gray-800 mb-3">Filtrar por categoría</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedCategory === '' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory('')}
                >
                  Todas
                </button>
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      selectedCategory === category 
                        ? 'bg-blue-800 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
            <p className="text-gray-600">
              Intenta con otro término de búsqueda o selecciona otra categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;