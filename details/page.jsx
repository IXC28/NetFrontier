const { useState } = React;

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} details={true} />
      <main className="container mx-auto px-4 py-10 space-y-12">
        {/* Sección de Diseño Web */}
        <section className="bg-white p-8 rounded-lg shadow-lg fade-in">
          <h2 className="text-4xl font-bold mb-6 text-center">Diseño Web</h2>
          <p className="text-lg mb-4">
            Creamos sitios modernos y personalizados que realzan la identidad de tu marca y atraen a tus clientes ideales, aumentando tus conversiones.
          </p>
          <p className="text-lg mb-4">
            Transforma tu presencia online con diseños web que capturan la esencia de tu negocio y ofrecen una experiencia de usuario excepcional.
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <span className="font-semibold">Diseño web profesional:</span> Creación de páginas web modernas y funcionales.
            </li>
            <li>
              <span className="font-semibold">Diseño web responsive:</span> Tu sitio se visualizará a la perfección en cualquier dispositivo.
            </li>
            <li>
              <span className="font-semibold">Desarrollo web:</span> Sitios web personalizados y optimizados para SEO.
            </li>
          </ul>
        </section>

        {/* Sección de Beneficios y Especialidades */}
        <section className="bg-white p-8 rounded-lg shadow-lg fade-in">
          <h3 className="text-2xl font-semibold mb-4">Beneficios y Especialidades</h3>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <span className="font-semibold">Sitios web a medida:</span> Desde blogs e informativos hasta tiendas online y portafolios digitales.
            </li>
            <li>
              <span className="font-semibold">Servicio personalizado:</span> Trabajamos contigo para entender y dar vida a tu visión.
            </li>
            <li>
              <span className="font-semibold">Optimización SEO:</span> Impulsamos el rendimiento de tu sitio en motores de búsqueda.
            </li>
          </ul>
        </section>

        {/* Sección de Nuestro Enfoque */}
        <section className="bg-white p-8 rounded-lg shadow-lg fade-in">
          <h3 className="text-2xl font-semibold mb-4">Nuestro Enfoque</h3>
          <p className="text-lg mb-4">
            Nos apasiona crear sitios web que cuentan tu historia y conectan con tu audiencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
              <p className="text-center text-base">
                Trabajamos de cerca para comprender tus necesidades.
              </p>
            </div>
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
              <p className="text-center text-base">
                Ofrecemos soluciones innovadoras y adaptadas a cada cliente.
              </p>
            </div>
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
              <p className="text-center text-base">
                Cada detalle es importante para lograr la satisfacción total.
              </p>
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="text-center fade-in">
          <a
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition-colors"
          >
            ¡Contáctanos hoy para un presupuesto gratuito!
          </a>
        </section>
      </main>

      {/* Footer */}
<footer>
<Footer />
</footer>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);