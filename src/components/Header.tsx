
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fb47bac8-4b60-48e5-a46a-aec57e6cb5d9.png" 
              alt="Visión361 Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-colors">Nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
