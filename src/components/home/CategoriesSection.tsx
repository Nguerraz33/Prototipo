import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Home, Briefcase, Wrench } from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Tecnología',
    icon: <Laptop size={36} className="text-teal-500 group-hover:text-white transition-colors duration-300" />,
    description: 'Lo último en dispositivos electrónicos y gadgets innovadores.',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Hogar',
    icon: <Home size={36} className="text-teal-500 group-hover:text-white transition-colors duration-300" />,
    description: 'Productos para hacer de tu hogar un lugar más cómodo y moderno.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Oficina',
    icon: <Briefcase size={36} className="text-teal-500 group-hover:text-white transition-colors duration-300" />,
    description: 'Todo lo que necesitas para equipar tu espacio de trabajo.',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Herramientas',
    icon: <Wrench size={36} className="text-teal-500 group-hover:text-white transition-colors duration-300" />,
    description: 'Herramientas profesionales para cualquier proyecto.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías Destacadas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra amplia variedad de productos organizados en categorías para 
            facilitarte encontrar exactamente lo que necesitas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`} 
              className="group"
            >
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700" 
                     style={{ backgroundImage: `url(${category.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {category.name}
                  </h3>
                  <p className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;