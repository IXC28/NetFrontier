"use client";
// Asume que React ya está cargado globalmente
const { useState, useEffect } = React;
const Navbar = window.Navbar;

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Animación de aparición solo para el contenedor "content"
    gsap.from(".content", {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="page font-sans text-gray-800">
      {/* Navbar sin animar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {/* Contenedor del contenido que se animará */}
      <div className="content">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
          <img
            src="./imgs/fondo2.jpeg"
            alt="Transformación digital"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-6 text-5xl font-extrabold text-white drop-shadow-lg">
              Transformamos tu negocio físico en digital
            </h2>
            <p className="mb-8 text-xl text-white max-w-2xl">
              Creamos páginas web informativas y atractivas para que tu negocio gane en presencia online.
            </p>
            <a
              href="#footer"
              className="px-8 py-4 bg-red-500 text-white text-2xl rounded-full hover:bg-red-600 transition duration-300 shadow-xl"
            >
              ¡Contáctanos!
            </a>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Servicios</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Diseño Web Card */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 hover:scale-105 transition duration-300 border-l-8 border-red-500">
                <h4 className="text-xl font-bold mb-3">Diseño Web</h4>
                <p className="text-gray-600">
                  Sitios modernos y personalizados que realzan la identidad de tu marca.
                </p>
                <a
                  href="./details/index.html"
                  className="inline-block px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow"
                >
                  Ver Detalles
                </a>
              </div>
              {/* Tiendas Online Card */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 hover:scale-105 transition duration-300 border-l-8 border-red-500">
                <h4 className="text-xl font-bold mb-3 text-red-500">Tiendas Online</h4>
                <p className="text-gray-600 mb-4">
                  Soluciones de comercio electrónico adaptadas a tus necesidades.
                </p>
                <a
                  href="./pricing/index.html"
                  className="inline-block px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow"
                >
                  Ver Precios
                </a>
              </div>
              {/* Blogs y Portafolios Card */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 hover:scale-105 transition duration-300 border-l-8 border-red-500">
                <h4 className="text-xl font-bold mb-3">Blogs y Portafolios</h4>
                <p className="text-gray-600">
                  Aca subiere los trabajos realizados para armar un portafolio.
                  <div className="mt-4 flex justify-center">
                    <img src="./imgs/gear-spinner.svg" alt="Spinner" className="w-16 h-16" />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Acerca de Nosotros</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos un equipo apasionado por el diseño y la tecnología, comprometidos en transformar tu negocio a través de soluciones digitales innovadoras y personalizadas.
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer id="footer">
        <Footer />
        </footer>
      </div>
    </div>
  );
}

// Monta el componente en #root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);