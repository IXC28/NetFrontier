const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 fade-in">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* Sección izquierda: Logo y lema */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-red-500 mb-2">NetFrontier</h1>
          <p className="text-sm text-gray-400">
            Transformamos tu visión en una realidad digital.
          </p>
        </div>
        {/* Sección central: Redes y contacto */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Contacto</h3>
          <div className="flex space-x-4 mb-3">
            <a
              href="https://www.instagram.com/ixcbusiness/"
              target="_blank"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+584242410187"
              target="_blank"
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.47-.149-.668.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.1-.198.05-.372-.025-.521-.075-.149-.668-1.611-.916-2.203-.242-.58-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.015-1.04 2.475s1.065 2.864 1.213 3.062c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.413-.074-.124-.273-.198-.57-.347z" />
                <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 2.122.556 4.1 1.613 5.83L2 22l4.275-1.611C7.89 21.444 9.911 22 12.004 22c5.518 0 10.004-4.486 10.004-9.996C22.008 6.486 17.522 2 12.004 2zM12 20c-1.85 0-3.594-.5-5.143-1.448l-.367-.215L4 20l1.613-2.49-.215-.367C4.5 15.597 4 13.85 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8z" />
              </svg>
            </a>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-400">Escríbenos a:</p>
            <a
              href="mailto:ixc2807business@gmail.com"
              className="mt-1 inline-block px-6 py-2 bg-gray-800 text-red-500 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition"
            >
              ixc2807business@gmail.com
            </a>
          </div>
        </div>
        {/* Sección derecha: Call to Action */}
        <div className="flex flex-col items-center">
          <h3
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-black text-white text-2xl font-bold rounded-full shadow-2xl hover:from-red-600 hover:to-gray-800 transition duration-300 ease-in-out"
          >
                ¡Contáctanos!
          </h3>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NetFrontier. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

window.Footer = Footer;
