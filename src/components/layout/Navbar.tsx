import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Menu, X, Home, Package, Layers, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Package 
              size={28} 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-blue-800' : 'text-white'
              }`} 
            />
            <span 
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-800' : 'text-white'
              }`}
            >
              TechHome
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/') 
                  ? isScrolled ? 'text-blue-800 font-semibold' : 'text-white font-semibold' 
                  : isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-200 hover:text-white'
              }`}
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            <Link 
              to="/products"
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/products') 
                  ? isScrolled ? 'text-blue-800 font-semibold' : 'text-white font-semibold' 
                  : isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-200 hover:text-white'
              }`}
            >
              <Package size={18} />
              <span>Productos</span>
            </Link>
            <Link 
              to="/categories"
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/categories') 
                  ? isScrolled ? 'text-blue-800 font-semibold' : 'text-white font-semibold' 
                  : isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-200 hover:text-white'
              }`}
            >
              <Layers size={18} />
              <span>Categorías</span>
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/contact') 
                  ? isScrolled ? 'text-blue-800 font-semibold' : 'text-white font-semibold' 
                  : isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-200 hover:text-white'
              }`}
            >
              <Phone size={18} />
              <span>Contacto</span>
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className={`flex items-center space-x-1 transition-colors duration-200 ${
              isScrolled ? 'text-blue-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
            }`}
          >
            <div className="relative">
              <ShoppingCart size={24} />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.totalItems}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-200 ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`flex items-center space-x-2 py-2 px-4 ${
                isActive('/') ? 'text-blue-800 font-semibold bg-gray-100 rounded' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            <Link
              to="/products"
              className={`flex items-center space-x-2 py-2 px-4 ${
                isActive('/products') ? 'text-blue-800 font-semibold bg-gray-100 rounded' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              <Package size={18} />
              <span>Productos</span>
            </Link>
            <Link
              to="/categories"
              className={`flex items-center space-x-2 py-2 px-4 ${
                isActive('/categories') ? 'text-blue-800 font-semibold bg-gray-100 rounded' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              <Layers size={18} />
              <span>Categorías</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-2 py-2 px-4 ${
                isActive('/contact') ? 'text-blue-800 font-semibold bg-gray-100 rounded' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              <Phone size={18} />
              <span>Contacto</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;