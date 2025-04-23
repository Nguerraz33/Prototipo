import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden bg-black">
      {/* Background Image with animated overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover scale-110 animate-zoom-slow"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: 'brightness(0.65)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 via-slate-900/70 to-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-3xl text-left">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Revoluciona tu Hogar y Estilo con Tecnología
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-300 mb-10 transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Explora productos que combinan innovación, diseño y funcionalidad para hacer de tu entorno un espacio inteligente y elegante.
          </p>

          <div
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link
              to="/products"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center group"
            >
              Ver Productos
              <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/categories"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
            >
              Explorar Categorías
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator animado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-14 rounded-full border-2 border-white flex justify-center items-start p-2 animate-bounce">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes zoom-slow {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.1); }
          }
          .animate-zoom-slow {
            animation: zoom-slow 10s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
