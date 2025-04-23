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
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-inner">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <Package size={28} className="text-teal-400 animate-pulse" />
              <span className="text-2xl font-bold tracking-wide text-teal-300">TechHome</span>
            </div>
            <p className="text-gray-400 mb-5 leading-relaxed">
              Importadora líder en productos tecnológicos y del hogar, entregando innovación y calidad a tu alcance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-all duration-300">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-all duration-300">
                <Twitter size={22} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-all duration-300">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-all duration-300">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: 'Inicio', to: '/' },
                { name: 'Productos', to: '/products' },
                { name: 'Categorías', to: '/categories' },
                { name: 'Contacto', to: '/contact' },
                { name: 'Carrito', to: '/cart' }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center hover:text-teal-400 transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="text-teal-400 mr-3 mt-1" />
                Curacaví, Región Metropolitana
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-400 mr-3" />
                +56 9 6744 4313
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal-400 mr-3" />
                guerranico23@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir novedades y promociones exclusivas.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechHome. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
