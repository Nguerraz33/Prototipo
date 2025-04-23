import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-center bg-cover" 
           style={{ 
             backgroundImage: "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920')",
             filter: "brightness(0.7)"
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Tecnología y Hogar en un Solo Lugar
          </h1>
          
          <p 
            className={`text-xl text-gray-200 mb-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Descubre nuestra amplia selección de productos para modernizar tu hogar y mantenerte 
            a la vanguardia de la tecnología. Calidad e innovación garantizada.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link 
              to="/products" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              Ver Productos
              <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/categories" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Explorar Categorías
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animation-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;