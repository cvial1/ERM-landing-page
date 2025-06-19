
const ClientLogos = () => {
  const clients = [
    { name: "FORUS", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Starken", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "SALFACORP", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Ultramar", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "MarAndino", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Asipla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Frutexsa", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Central Bodegas", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Han confiado
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas líderes que han fortalecido su gestión de riesgos con nuestro apoyo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 border border-gray-100 rounded-lg hover:shadow-md"
            >
              <div className="text-center">
                <div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded mb-2">
                  <span className="text-gray-600 font-semibold text-sm">{client.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">
            Sistema Integral de Riesgos Sostenibles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
