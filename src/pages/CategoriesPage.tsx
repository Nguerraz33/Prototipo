import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Home as HomeIcon, Briefcase, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import vestuarioImagen from '../assets/vestuario.jpg';

const mockProductPreviews: Record<string, string[]> = {
  '1': ['Laptop', 'Auriculares', 'Smartwatch'],
  '2': ['Polera', 'Jeans', 'Chaqueta'],
  '3': ['Escritorio', 'Silla ergonómica', 'Monitor'],
  '4': ['Taladro', 'Juego de llaves', 'Multímetro'],
};

const categories = [
  {
    id: '1',
    name: 'Tecnología',
    tag: '#Nuevo',
    icon: <Laptop size={48} className="text-teal-400 drop-shadow-lg" />,
    description: 'Descubre lo último en dispositivos electrónicos y gadgets.',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 15,
  },
  {
    id: '2',
    name: 'Vestuario',
    tag: '🔥 Popular',
    icon: <HomeIcon size={48} className="text-teal-400 drop-shadow-lg" />,
    description: 'Encuentra las últimas tendencias en ropa, calzado y accesorios para renovar tu estilo.',
    image: vestuarioImagen,
    productCount: 23,
  },
  {
    id: '3',
    name: 'Oficina',
    tag: '#Recomendado',
    icon: <Briefcase size={48} className="text-teal-400 drop-shadow-lg" />,
    description: 'Productividad y estilo para tu espacio de trabajo.',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 18,
  },
  {
    id: '4',
    name: 'Herramientas',
    tag: '#Pro',
    icon: <Wrench size={48} className="text-teal-400 drop-shadow-lg" />,
    description: 'Equipamiento de calidad para tus proyectos.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productCount: 12,
  },
];

const CategoriesPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-24 bg-gradient-to-br from-white via-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">Nuestras Categorías</span>
          </h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar categoría..."
            className={`mt-6 px-5 py-3 w-full max-w-lg mx-auto rounded-xl border transition-all shadow-md text-gray-800
              ${search ? 'border-teal-500 ring-2 ring-teal-300' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'}`}
            style={{
              boxShadow: search ? '0 0 10px rgba(13, 148, 136, 0.4)' : undefined,
            }}
          />
        </div>

        <div className="space-y-24">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center group`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img src={category.image} alt={category.name} className="h-80 w-full object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-500 text-white px-4 py-1 text-xs rounded-full shadow">{category.tag}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center">
                    {category.icon}
                    <h2 className="text-3xl font-bold text-white ml-3 drop-shadow-md">{category.name}</h2>
                  </div>
                  <div className="mt-2 bg-white text-teal-700 text-sm font-bold py-1 px-3 rounded-full inline-block">
                    {category.productCount} productos
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Más populares:</p>
                  <motion.ul
                    className="flex gap-2 flex-wrap text-sm text-gray-800"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
                  >
                    {mockProductPreviews[category.id].map((product: string, i: number) => (
                      <motion.li
                        key={i}
                        className="bg-gray-200 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {product}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <Link
                  to={`/categories/${category.id}`}
                  className="inline-block bg-gradient-to-r from-blue-700 to-teal-500 hover:brightness-110 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
                >
                  Explorar {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
