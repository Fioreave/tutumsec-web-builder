import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      // reset de desplegables al CERRAR el menú
      if (!next) setExpandedSections({});
      return next;
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const serviciosItems = [
    { title: "Consultoría CISO", path: "/es/servicios/consultoria-ciso" },
    {
      title: "Auditoría & Compliance NIS2",
      path: "/es/servicios/auditoria-compliance-nis2",
    },
    {
      title: "Transformación Digital Estratégica",
      path: "/es/servicios/transformacion-digital-estrategica",
    },
    {
      title: "Formación y Concienciación",
      path: "/es/servicios/formacion-concienciacion",
    },
    {
      title: "Oficina Seguridad Información",
      path: "/es/servicios/oficina-seguridad-informacion-nis2",
    },
  ];

  const productosItems = [
    { title: "Detección 24x7", path: "/es/productos/deteccion-24x7" },
    { title: "Prevención", path: "/es/productos/prevencion" },
    {
      title: "Respuesta <15'",
      path: "/es/productos/incidente-respuesta-retainer",
    },
    { title: "Recuperación", path: "/es/productos/recuperacion-backup" },
  ];

  const industriasItems = [
    { title: "Finanzas", path: "/es/industrias/finanzas" },
    { title: "Salud", path: "/es/industrias/salud" },
    { title: "Industrial OT", path: "/es/industrias/industrial-ot" },
    { title: "Tecnología SaaS", path: "/es/industrias/tecnologia-saas" },
    { title: "Sector Público", path: "/es/industrias/sector-publico" },
    { title: "Pymes", path: "/es/industrias/pymes" },
  ];

  const recursosItems = [{ title: "Blog", path: "/es/blog" }];
  const sobreNosotrosItems = [
    { title: "Historia", path: "/es/sobre-nosotros/historia" },
    { title: "Equipo y Valores", path: "/es/sobre-nosotros/equipo-valores" },
  ];

  return (
    <nav className="bg-white shadow-lg py-2 fixed w-full top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/uploads/tutumsec.png"
                alt="TutumSec Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 whitespace-nowrap">
              <NavbarDropdown title="Servicios" items={serviciosItems} />
              <NavbarDropdown title="Productos" items={productosItems} />
              <NavbarDropdown title="Industrias" items={industriasItems} />
              <NavbarDropdown title="Recursos" items={recursosItems} />
              <NavbarDropdown
                title="Sobre Nosotros"
                items={sobreNosotrosItems}
              />
              <Link
                to="/es/contacto"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Right / CTA (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://calendly.com/ayub-tutumsec/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-white font-medium transition-colors whitespace-nowrap"
              style={{
                background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
              }}
            >
              Auditoría Gratuita
            </a>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {/* Servicios */}
            <div className="space-y-1">
              <button
                onClick={() => toggleSection("servicios")}
                className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
              >
                Servicios
                {expandedSections.servicios ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.servicios &&
                serviciosItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>

            {/* Productos */}
            <div className="space-y-1">
              <button
                onClick={() => toggleSection("productos")}
                className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
              >
                Productos
                {expandedSections.productos ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.productos &&
                productosItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>

            {/* Industrias */}
            <div className="space-y-1">
              <button
                onClick={() => toggleSection("industrias")}
                className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
              >
                Industrias
                {expandedSections.industrias ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.industrias &&
                industriasItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>

            {/* Recursos */}
            <div className="space-y-1">
              <button
                onClick={() => toggleSection("recursos")}
                className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
              >
                Recursos
                {expandedSections.recursos ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.recursos &&
                recursosItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>

            {/* Sobre Nosotros */}
            <div className="space-y-1">
              <button
                onClick={() => toggleSection("sobreNosotros")}
                className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
              >
                Sobre Nosotros
                {expandedSections.sobreNosotros ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.sobreNosotros &&
                sobreNosotrosItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>

            <Link
              to="/es/contacto"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="https://calendly.com/ayub-tutumsec/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 rounded-full text-white font-medium mt-4 transition-colors inline-block text-center"
                style={{
                  background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                }}
                onClick={toggleMenu}
              >
                Auditoría Gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
