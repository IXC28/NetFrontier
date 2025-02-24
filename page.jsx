const { useState } = React;

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Responsive Header */}
      <header className="bg-gradient-to-r from-black to-red-900 text-white py-6 px-8 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">NetFrontier</h1>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="hover:underline">Servicios</a>
            <a href="#about" className="hover:underline">Acerca de</a>
            <a href="#contact" className="hover:underline">Contacto</a>
            <a href="#pricing" className="hover:underline">Precios</a>
          </nav>
        </div>
        {menuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            <a href="#services" className="hover:underline">Servicios</a>
            <a href="#about" className="hover:underline">Acerca de</a>
            <a href="#contact" className="hover:underline">Contacto</a>
            <a href="#pricing" className="hover:underline">Precios</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-black">
          Transformamos tu negocio físico en digital
        </h2>
        <p className="mb-8 text-lg text-gray-600 max-w-xl">
          Creamos páginas web informativas y atractivas para que tu negocio gane en presencia online.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-2xl"
        >
          ¡Contáctanos!
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Servicios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-2">Diseño Web</h4>
              <p className="text-gray-600">
                Creamos sitios modernos y personalizados que destacan tu marca.
              </p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-2 text-yellow-700">Tiendas Online</h4>
              <p className="text-gray-600 mb-4">
                Explora los tipos de páginas ofrecidas y sus Precios.
              </p>
              <a
                href="/pricing"
                className="inline-block px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Ver Precios
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-2">Blogs y Portafolios</h4>
              <p className="text-gray-600">
                Espacios ideales para compartir ideas y mostrar tu trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Acerca de Nosotros</h3>
          <p className="text-gray-700 text-lg">
            Somos expertos en desarrollo frontend, comprometidos en transformar negocios físicos en exitosas presencias digitales.
            Con pasión por el diseño y la tecnología, creamos soluciones personalizadas que destacan tu marca.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-6">Contacto</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/ixcbusiness/"
              target="_blank"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/04242410187"
              target="_blank"
              className="text-green-600 hover:text-green-800"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.47-.149-.668.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.1-.198.05-.372-.025-.521-.075-.149-.668-1.611-.916-2.203-.242-.58-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.015-1.04 2.475s1.065 2.864 1.213 3.062c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.413-.074-.124-.273-.198-.57-.347z"/>
                <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 2.122.556 4.1 1.613 5.83L2 22l4.275-1.611C7.89 21.444 9.911 22 12.004 22c5.518 0 10.004-4.486 10.004-9.996C22.008 6.486 17.522 2 12.004 2zM12 20c-1.85 0-3.594-.5-5.143-1.448l-.367-.215L4 20l1.613-2.49-.215-.367C4.5 15.597 4 13.85 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8z"/>
              </svg>
            </a>
            <a
              href="tel:+584242410187"
              className="text-blue-600 hover:text-blue-800"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3.08a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72 12.06 12.06 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45 12.06 12.06 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-red-500 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Mi Empresa Web. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

// Monta el componente en el elemento #root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);