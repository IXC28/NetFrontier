"use client";
 // Asume que React ya está cargado globalmente 
 const { useState } = React;
 // Navbar se ha asignado a window.Navbar en Navbar.js
 const Navbar = window.Navbar;

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
        {/* Imagen Hero a pantalla completa */}
        <img
          src="./imgs/fondo2.jpeg"
          alt="Transformación digital"
          className="absolute inset-0 w-full h-full object-cover" />
        {/* Overlay semitransparente para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Contenido relativo para que se muestre sobre la imagen y el overlay */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="mb-6 text-5xl font-extrabold text-white drop-shadow-lg">
            Transformamos tu negocio físico en digital
          </h2>
          <p className="mb-8 text-xl text-white max-w-2xl">
            Creamos páginas web informativas y atractivas para que tu negocio gane en presencia online.
          </p>
          <a
            href="#contact"
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
                Espacios ideales para compartir tus ideas y exponer tu trabajo con estilo.
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Contacto</h3>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://www.instagram.com/ixcbusiness/"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+584242410187"
              target="_blank"
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.47-.149-.668.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.1-.198.05-.372-.025-.521-.075-.149-.668-1.611-.916-2.203-.242-.58-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.015-1.04 2.475s1.065 2.864 1.213 3.062c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.413-.074-.124-.273-.198-.57-.347z" />
                <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 2.122.556 4.1 1.613 5.83L2 22l4.275-1.611C7.89 21.444 9.911 22 12.004 22c5.518 0 10.004-4.486 10.004-9.996C22.008 6.486 17.522 2 12.004 2zM12 20c-1.85 0-3.594-.5-5.143-1.448l-.367-.215L4 20l1.613-2.49-.215-.367C4.5 15.597 4 13.85 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8z" />
              </svg>
            </a>

          </div>
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700">Escríbenos a:</p>
            <div className="mt-2 inline-block px-6 py-3 bg-black text-red-500 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition duration-300">
              ixc2807business@gmail.com
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-red-500 py-6 text-center border-t-2 border-red-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NetFrontier - ixc2807business@gmail.com
        </p>
      </footer>
    </div>
  );
}

// Monta el componente en #root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);