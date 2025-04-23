import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Home as HomeIcon, Briefcase, Wrench } from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Tecnología',
    icon: <Laptop size={48} className="text-teal-500" />,
    description: 'Descubre lo último en dispositivos electrónicos, gadgets innovadores y accesorios tecnológicos para mantenerte siempre a la vanguardia. Desde smartphones y laptops hasta drones y dispositivos inteligentes para el hogar.',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 15
  },
  {
    id: '2',
    name: 'Hogar',
    icon: <HomeIcon size={48} className="text-teal-500" />,
    description: 'Encuentra todo lo que necesitas para hacer de tu hogar un lugar más cómodo, funcional y moderno. Electrodomésticos inteligentes, decoración, muebles y accesorios con el mejor diseño y calidad.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 23
  },
  {
    id: '3',
    name: 'Oficina',
    icon: <Briefcase size={48} className="text-teal-500" />,
    description: 'Equipa tu espacio de trabajo con todo lo necesario para maximizar tu productividad y comodidad. Mobiliario ergonómico, accesorios tecnológicos, papelería y organización de primer nivel.',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 18
  },
  {
    id: '4',
    name: 'Herramientas',
    icon: <Wrench size={48} className="text-teal-500" />,
    description: 'Herramientas profesionales para cualquier proyecto que tengas en mente. Equipamiento eléctrico, manual y accesorios de las mejores marcas para garantizar durabilidad y precisión en tus trabajos.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 12
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Categorías</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra amplia variedad de productos organizados en categorías para 
            facilitarte encontrar exactamente lo que necesitas.
          </p>
        </div>
        
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-xl h-72 sm:h-96">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center">
                      {category.icon}
                      <h2 className="text-3xl font-bold text-white ml-3">{category.name}</h2>
                    </div>
                    <div className="mt-2 bg-teal-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block">
                      {category.productCount} productos
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  {category.description}
                </p>
                <Link 
                  to={`/categories/${category.id}`} 
                  className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors"
                >
                  Explorar {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;