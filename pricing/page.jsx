const { useState } = React;

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col font-sans text-gray-800 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-red-900 to-black text-white py-6 px-8 shadow-2xl">
        <div className="flex justify-between items-center">
            <a href="/">
          <h1 className="text-4xl font-extrabold tracking-wide">NetFrontier</h1>
          </a>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="/"
              className="bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors"
            >
              Volver al inicio
            </a>
          </nav>
        </div>
        {menuOpen && (
          <nav className="mt-4 flex flex-col space-y-3 items-center">
            <a
              href="/"
              className="bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors"
            >
              Volver
            </a>
          </nav>
        )}
      </header>


      {/* Main Content */}
      <main className="flex-grow p-8">
        <h2 className="text-5xl font-bold mb-6 text-center">Precios</h2>
        <p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto text-2xl">
          Aquí se muestran los precios de nuestros servicios. Personalizamos cada proyecto según tus necesidades,
          contáctanos para obtener una cotización exacta; este apartado es solo para dar una idea de los costos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Card 1 - Creacion Basica */}
          <div
            className="relative rounded-xl shadow-xl p-6 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-l-4 border-red-500 overflow-hidden"
            style={{
              backgroundImage: "url('../imgs/fondo1.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">Creacion Basica</h3>
              <div className="mb-2">
                <span className="inline-block bg-red-500 text-white text-xl font-bold px-4 py-1 rounded-full shadow-lg">
                  Desde $50 USD
                </span>
              </div>
              <p className="text-white leading-relaxed">
                Pagina de 1 o 2 pestañas mayormente informativa
              </p>
            </div>
          </div>
          {/* Card 2 - Creacion Intermedia */}
          <div
            className="relative rounded-xl shadow-xl p-6 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-l-4 border-red-500 overflow-hidden"
            style={{
                backgroundImage: "url('../imgs/fondo1.jpeg')",
                backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">Creacion Intermedia</h3>
              <div className="mb-2">
                <span className="inline-block bg-red-500 text-white text-xl font-bold px-4 py-1 rounded-full shadow-lg">
                  Desde $85 USD
                </span>
              </div>
              <p className="text-white leading-relaxed">
                De 2 pestañas en adelante, mayormente interactiva
              </p>
            </div>
          </div>
          {/* Card 3 - Creacion de Blogs o Portafolios */}
          <div
            className="relative rounded-xl shadow-xl p-6 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-l-4 border-red-500 overflow-hidden"
            style={{
                backgroundImage: "url('../imgs/fondo1.jpeg')",
                backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">Creacion de Blogs o Portafolios</h3>
              <div className="mb-2">
                <span className="inline-block bg-red-500 text-white text-xl font-bold px-4 py-1 rounded-full shadow-lg">
                  Desde $40 USD
                </span>
              </div>
              <p className="text-white leading-relaxed">
                Una pagina para tener tu blog o portafolio
              </p>
            </div>
          </div>
          {/* Card 4 - Personalizado */}
          <div
            className="relative rounded-xl shadow-xl p-6 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-l-4 border-red-500 overflow-hidden"
            style={{
                backgroundImage: "url('../imgs/fondo1.jpeg')",
                backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">Personalizado</h3>
              <div className="mb-2">
                <span className="inline-block bg-red-500 text-white text-xl font-bold px-4 py-1 rounded-full shadow-lg">
                  Precio a convenir
                </span>
              </div>
              <p className="text-white leading-relaxed">
                Para una página web o más simple o más compleja que alguna de las anteriores, el precio depende de la petición.
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-black text-white text-xl font-bold rounded-full hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            ¡Contáctanos para más detalles!
          </a>
        </div>
      </main>

      {/* Footer */}

      <footer>
              <Footer />
      </footer>

    </div>
  );
};

// Monta el componente en el elemento #root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);