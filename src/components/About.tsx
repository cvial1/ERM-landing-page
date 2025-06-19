
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    "Más de 10 años de experiencia en gestión de riesgos",
    "Metodologías probadas y certificadas internacionalmente",
    "Equipo multidisciplinario de consultores especializados",
    "Enfoque personalizado para cada industria y organización"
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expertos en Gestión de Riesgos Empresariales
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Visión361, entendemos que una gestión efectiva de riesgos es fundamental para el éxito empresarial. 
              Nuestro enfoque integral combina mejores prácticas internacionales con un profundo conocimiento del 
              mercado local para ofrecer soluciones ERM que realmente funcionen.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empoderar a las organizaciones con sistemas de gestión de riesgos robustos y adaptables, 
              que les permitan tomar decisiones informadas y aprovechar oportunidades de crecimiento 
              mientras protegen sus activos más valiosos.
            </p>
            <div className="border-t border-blue-600 pt-6">
              <h4 className="text-lg font-semibold mb-2">Visión 360° + 1</h4>
              <p className="text-blue-200 text-sm">
                Vamos más allá de la perspectiva completa, anticipando los riesgos del futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
