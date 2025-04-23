import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail,
  Phone, 
  MapPin, 
  ChevronRight,
  Package
} from 'lucide-react';
import NewsletterForm from '../ui/NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Package size={24} className="text-teal-500" />
              <span className="text-xl font-bold">TechHome</span>
            </div>
            <p className="text-gray-400 mb-6">
              Importadora líder de productos tecnológicos y para el hogar, 
              ofreciendo la mayor calidad e innovación a precios competitivos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-teal-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-teal-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Categorías
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-teal-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Tecnológica 123, Ciudad Importación
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@techhome.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir las últimas novedades y ofertas especiales.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechHome. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;