const Navbar = ({ menuOpen, setMenuOpen, pricing = false, details = false }) => {
  // Estado para controlar la visibilidad de la navbar
  const [visible, setVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(window.pageYOffset);

  // Efecto para detectar el scroll y ocultar/mostrar la navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      // Si se scrollea hacia abajo y ya se pasó cierta altura, se oculta la navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Clase para animación: uso de transición ease-in-out y backdrop-blur para un look moderno
  const headerClass = `sticky top-0 z-50 bg-gradient-to-r from-black via-red-900 to-black text-white py-6 px-8 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-in-out ${
    !visible ? "transform -translate-y-full" : ""
  }`;

  return React.createElement(
    "header",
    { className: headerClass },
    [
      React.createElement(
        "div",
        { className: "flex justify-between items-center", key: "nav-container" },
        [
          React.createElement(
            "a",
            { href: "/", key: "logo-link" },
            React.createElement(
              "h1",
              { className: "text-4xl font-extrabold tracking-wide" },
              "NetFrontier"
            )
          ),
          React.createElement(
            "div",
            { className: "md:hidden", key: "mobile-button-container" },
            React.createElement(
              "button",
              {
                onClick: () => setMenuOpen(!menuOpen),
                className: "focus:outline-none transform hover:scale-105 transition ease-in-out duration-300",
                key: "mobile-button"
              },
              React.createElement(
                "svg",
                {
                  className: "w-8 h-8",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  key: "svg-icon"
                },
                menuOpen
                  ? React.createElement("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12",
                      key: "icon-open"
                    })
                  : React.createElement("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16",
                      key: "icon-closed"
                    })
              )
            )
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex space-x-6 items-center", key: "desktop-nav" },
            details
              ? [
                  React.createElement(
                    "a",
                    {
                      href: "/",
                      className:
                        "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                      key: "back-button"
                    },
                    "Volver al inicio"
                  )
                ]
              : pricing
              ? [
                  React.createElement(
                    "a",
                    {
                      href: "/",
                      className:
                        "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                      key: "back-button"
                    },
                    "Volver al inicio"
                  )
                ]
              : [
                  React.createElement(
                    "a",
                    {
                      href: "#services",
                      className: "hover:text-red-300 transition-colors",
                      key: "services-link"
                    },
                    "Servicios"
                  ),
                  React.createElement(
                    "a",
                    {
                      href: "#about",
                      className: "hover:text-red-300 transition-colors",
                      key: "about-link"
                    },
                    "Acerca de"
                  ),
                  React.createElement(
                    "a",
                    {
                      href: "#contact",
                      className: "hover:text-red-300 transition-colors",
                      key: "contact-link"
                    },
                    "Contacto"
                  ),
                  React.createElement(
                    "a",
                    {
                      href: "/pricing/index.html",
                      className:
                        "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                      key: "pricing-link"
                    },
                    "Precios"
                  ),
                  React.createElement(
                    "a",
                    {
                      href: "/details/index.html",
                      className:
                        "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors ml-4 transform hover:scale-105 duration-300",
                      key: "details-link"
                    },
                    "Ver Detalles"
                  )
                ]
          )
        ]
      ),
      menuOpen &&
        React.createElement(
          "nav",
          { className: "mt-4 flex flex-col space-y-3 items-center", key: "mobile-nav" },
          details
            ? [
                React.createElement(
                  "a",
                  {
                    href: "/",
                    className:
                      "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                    key: "back-button-mobile"
                  },
                  "Volver al inicio"
                )
              ]
            : pricing
            ? [
                React.createElement(
                  "a",
                  {
                    href: "/",
                    className:
                      "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                    key: "back-button-mobile"
                  },
                  "Volver al inicio"
                )
              ]
            : [
                React.createElement(
                  "a",
                  {
                    href: "#services",
                    className: "hover:text-red-300 transition-colors",
                    key: "m-services-link"
                  },
                  "Servicios"
                ),
                React.createElement(
                  "a",
                  {
                    href: "#about",
                    className: "hover:text-red-300 transition-colors",
                    key: "m-about-link"
                  },
                  "Acerca de"
                ),
                React.createElement(
                  "a",
                  {
                    href: "#contact",
                    className: "hover:text-red-300 transition-colors",
                    key: "m-contact-link"
                  },
                  "Contacto"
                ),
                React.createElement(
                  "a",
                  {
                    href: "./pricing/index.html",
                    className:
                      "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors",
                    key: "m-pricing-link"
                  },
                  "Precios"
                ),
                React.createElement(
                  "a",
                  {
                    href: "./details/index.html",
                    className:
                      "bg-gray-900 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-bold transition-colors ml-4 transform hover:scale-105 duration-300",
                    key: "m-details-link"
                  },
                  "Ver Detalles"
                )
              ]
        )
    ]
  );
};

window.Navbar = Navbar;