
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Gestión Integral de
            <span className="block text-blue-200">Riesgos Empresariales</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Implementamos sistemas ERM personalizados que protegen y potencian el crecimiento de tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
            >
              Solicitar Consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Conocer Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
