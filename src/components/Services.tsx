
import { Shield, TrendingUp, Users, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Evaluación de Riesgos",
      description: "Identificación y análisis integral de todos los riesgos que enfrenta tu organización, desde operacionales hasta estratégicos."
    },
    {
      icon: Target,
      title: "Implementación ERM",
      description: "Diseño e implementación de marcos de gestión de riesgos empresariales adaptados a tu industria y objetivos."
    },
    {
      icon: TrendingUp,
      title: "Monitoreo Continuo",
      description: "Sistemas de seguimiento y reporte que permiten una gestión proactiva y mejora continua de los riesgos."
    },
    {
      icon: Users,
      title: "Capacitación y Cultura",
      description: "Programas de formación para crear una cultura organizacional consciente del riesgo en todos los niveles."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones especializadas en gestión de riesgos empresariales para fortalecer tu organización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
