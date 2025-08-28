import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import AdminLink from "./AdminLink";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Configuración de menús dropdown
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
      title: "Detección SOC/MDR/XDR",
      path: "/es/servicios/deteccion-soc-mdr-xdr",
    },
    {
      title: "Respuesta a Incidentes",
      path: "/es/servicios/respuesta-incidente",
    },
  ];

  const retainerItems = [
    {
      title: "Formación y Concienciación",
      path: "/es/retainer/formacion-concienciacion",
    },
    {
      title: "Prevención y Recuperación Backup",
      path: "/es/retainer/prevencion-recuperacion-backup",
    },
  ];

  const industriasItems = [
    { title: "Finanzas", path: "/es/industrias/finanzas" },
    { title: "Salud", path: "/es/industrias/salud" },
    { title: "Industrial OT", path: "/es/industrias/industrial-ot" },
    { title: "Tecnología SaaS", path: "/es/industrias/tecnologia-saas" },
    { title: "Sector Público", path: "/es/industrias/sector-publico" },
  ];

  const recursosItems = [
    {
      title: "Blog",
      items: [
        { title: "Gobernanza", path: "/blog?categoria=gobernanza" },
        { title: "Compliance", path: "/blog?categoria=compliance" },
        { title: "Ransomware", path: "/blog?categoria=ransomware" },
        { title: "OT/ICS", path: "/blog?categoria=ot-ics" },
        { title: "Zero Trust", path: "/blog?categoria=zero-trust" },
      ],
    },
    { title: "Whitepapers", path: "/es/recursos/whitepapers" },
    { title: "Casos de Éxito", path: "/es/recursos/casos-exito" },
  ];

  const sobreNosotrosItems = [
    { title: "Historia", path: "/es/sobre-nosotros/historia" },
    { title: "Equipo y Valores", path: "/es/sobre-nosotros/equipo-valores" },
    {
      title: "Certificaciones y Partners",
      path: "/es/sobre-nosotros/certificaciones-partners",
    },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/uploads/tutumsec.png"
                alt="TutumSec Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 whitespace-nowrap">
              <NavbarDropdown title="Servicios" items={serviciosItems} />
              <NavbarDropdown title="Retainer" items={retainerItems} />
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
              <LanguageSelector />
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Link
                  to="/es/reserva-consultoria"
                  className="px-6 py-2 rounded-full text-white font-medium transition-colors whitespace-nowrap"
                  style={{
                    background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                  }}
                >
                  Auditoría Gratuita
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            
            {/* Servicios Dropdown */}
            <div className="space-y-1">
              <div className="text-gray-700 font-semibold px-3 py-2 text-base">
                Servicios
              </div>
              {serviciosItems.map((item, index) => (
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

            {/* Retainer Dropdown */}
            <div className="space-y-1">
              <div className="text-gray-700 font-semibold px-3 py-2 text-base">
                Retainer
              </div>
              {retainerItems.map((item, index) => (
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

            {/* Industrias Dropdown */}
            <div className="space-y-1">
              <div className="text-gray-700 font-semibold px-3 py-2 text-base">
                Industrias
              </div>
              {industriasItems.map((item, index) => (
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

            {/* Recursos Dropdown */}
            <div className="space-y-1">
              <div className="text-gray-700 font-semibold px-3 py-2 text-base">
                Recursos
              </div>
              {recursosItems.map((item, index) => (
                <div key={index}>
                  {item.items ? (
                    <div className="space-y-1">
                      <div className="text-gray-600 font-medium px-6 py-1 text-sm">
                        {item.title}
                      </div>
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="text-gray-500 hover:text-blue-600 block px-8 py-1 text-sm transition-colors"
                          onClick={toggleMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="text-gray-600 hover:text-blue-600 block px-6 py-2 text-sm transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Sobre Nosotros Dropdown */}
            <div className="space-y-1">
              <div className="text-gray-700 font-semibold px-3 py-2 text-base">
                Sobre Nosotros
              </div>
              {sobreNosotrosItems.map((item, index) => (
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
            <div className="px-3 py-2">
              <AdminLink />
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/es/reserva-consultoria"
                className="w-full px-6 py-2 rounded-full text-white font-medium mt-4 transition-colors inline-block text-center"
                style={{
                  background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                }}
                onClick={toggleMenu}
              >
                Auditoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
