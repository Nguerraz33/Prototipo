import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Wrench, Shirt, Sparkles, Dumbbell } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import bellezaImg from '../../assets/belleza.jpg';
import deporteImg from '../../assets/GYM.jpg'; // NUEVA imagen para "Deporte"

const categories = [
  {
    id: '1',
    name: 'Tecnología',
    icon: <Laptop size={36} className="text-teal-400 group-hover:text-white transition-colors duration-300" />,
    description: 'Lo último en dispositivos electrónicos y gadgets innovadores.',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Vestuario',
    icon: <Shirt size={36} className="text-teal-400 group-hover:text-white transition-colors duration-300" />,
    description: 'Ropa y accesorios para renovar tu estilo con lo último en moda.',
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Belleza',
    icon: <Sparkles size={36} className="text-teal-400 group-hover:text-white transition-colors duration-300" />,
    description: 'Cosméticos, cuidado de la piel y productos de belleza para resaltar tu esencia.',
    image: bellezaImg
  },
  {
    id: '4',
    name: 'Deporte',
    icon: <Dumbbell size={36} className="text-teal-400 group-hover:text-white transition-colors duration-300" />,
    description: 'Equipamiento deportivo y accesorios fitness para mantenerte activo y saludable.',
    image: deporteImg
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative z-10 overflow-hidden">
      {/* ICONOS DECORATIVOS flotantes */}
      <div className="absolute -top-10 -left-10 opacity-10 blur-xl animate-pulse hidden lg:block">
        <Sparkles size={200} className="text-teal-400" />
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-10 blur-xl animate-pulse hidden lg:block">
        <Laptop size={200} className="text-blue-400" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Categorías Destacadas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia variedad de productos organizados para facilitarte encontrar exactamente lo que necesitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="group"
                transitionSpeed={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.03}
              >
                <Link to={`/categories/${category.id}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-black/10 backdrop-blur-md group-hover:ring-2 group-hover:ring-teal-400">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 transform group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                      <div className="mb-3 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 delay-75">
                        {category.name}
                      </h3>
                      <p className="text-white opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 delay-150 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
