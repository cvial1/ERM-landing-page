

const ClientLogos = () => {
  const clients = [
    { 
      name: "FORUS", 
      logo: "/lovable-uploads/d03f0dd3-cc72-4816-8650-a2ae5b599629.png",
      url: "https://www.forus.cl"
    },
    { 
      name: "Starken", 
      logo: "/lovable-uploads/868a7546-6b66-4d04-ace5-b0f09ede365e.png",
      url: "https://www.starken.cl"
    },
    { 
      name: "SALFACORP", 
      logo: "/lovable-uploads/5d13b707-549e-4d3e-9b44-52e57868ac06.png",
      url: "https://www.salfacorp.com"
    },
    { 
      name: "Ultramar", 
      logo: "/lovable-uploads/cf8da7dc-aa6e-4a16-a3dd-63b702b30576.png",
      url: "https://www.ultramar.cl"
    },
    { 
      name: "MarAndino", 
      logo: "/lovable-uploads/69d6a0c4-f4ed-47f5-84c3-847968fa8341.png",
      url: "https://www.marandino.cl"
    },
    { 
      name: "Asipla", 
      logo: "/lovable-uploads/8a703b84-d216-4d8c-8c9b-07f5bb556202.png",
      url: "https://www.asipla.cl"
    },
    { 
      name: "Frutexsa", 
      logo: "/lovable-uploads/94971808-b698-4078-87e2-c355f2a30aac.png",
      url: "https://www.frutexsa.cl"
    },
    { 
      name: "Central Bodegas", 
      logo: "/lovable-uploads/d385bfe5-354c-4d98-853c-f959faf5daa2.png",
      url: "https://www.centralbodegas.cl"
    }
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
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 transition-all duration-300 border border-gray-100 rounded-lg hover:shadow-md hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-32 h-16 flex items-center justify-center bg-white rounded mb-2">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </a>
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

