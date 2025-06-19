

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/fb47bac8-4b60-48e5-a46a-aec57e6cb5d9.png" 
              alt="Visión361 Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Consultoría especializada en gestión integral de riesgos empresariales. 
              Protegemos y potenciamos el crecimiento de tu organización.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Evaluación de Riesgos</li>
              <li>Implementación ERM</li>
              <li>Monitoreo Continuo</li>
              <li>Capacitación</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-600">
              <p>cvial@carbono-x.cl</p>
              <p>+569 6831 3641</p>
              <p>Santiago, Chile</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Visión361. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

