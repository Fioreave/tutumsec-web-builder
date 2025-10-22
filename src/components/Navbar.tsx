// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from "@/i18n/useTranslations";
import { useLanguage } from "@/i18n/LanguageContext";

// Helper para componer rutas con el idioma actual.
// Ej: L("/") => "/es"; L("/servicios/consultoria-ciso") => "/es/servicios/consultoria-ciso"
function useL() {
  const { language } = useLanguage();
  return (path: string) => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    if (clean === "/") return `/${language}`;
    const parts = clean.split("/").filter(Boolean);
    if (["es", "ca", "en", "fr"].includes(parts[0])) parts.shift(); // evita duplicar locale
    return `/${language}/${parts.join("/")}`;
  };
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const { t } = useTranslations(["common"]);
  const L = useL();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) setExpandedSections({});
      return next;
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const serviciosItems = [
    {
      title: t("nav.services.consultoriaCiso"),
      path: L("/servicios/consultoria-ciso"),
    },
    {
      title: t("nav.services.auditoriaNis2"),
      path: L("/servicios/auditoria-compliance-nis2"),
    },
    {
      title: t("nav.services.transformacionDigital"),
      path: L("/servicios/transformacion-digital-estrategica"),
    },
    {
      title: t("nav.services.formacion"),
      path: L("/servicios/formacion-concienciacion"),
    },
    {
      title: t("nav.services.oficinaSeguridad"),
      path: L("/servicios/oficina-seguridad-informacion-nis2"),
    },
  ];

  const productosItems = [
    {
      title: t("nav.products.detect24x7"),
      path: L("/productos/deteccion-24x7"),
    },
    { title: t("nav.products.prevencion"), path: L("/productos/prevencion") },
    {
      title: t("nav.products.respuestaMenos15"),
      path: L("/productos/incidente-respuesta-retainer"),
    },
    {
      title: t("nav.products.recuperacion"),
      path: L("/productos/recuperacion-backup"),
    },
  ];

  const industriasItems = [
    { title: t("nav.industries.finanzas"), path: L("/industrias/finanzas") },
    { title: t("nav.industries.salud"), path: L("/industrias/salud") },
    {
      title: t("nav.industries.industrialOt"),
      path: L("/industrias/industrial-ot"),
    },
    { title: t("nav.industries.saas"), path: L("/industrias/tecnologia-saas") },
    {
      title: t("nav.industries.public"),
      path: L("/industrias/sector-publico"),
    },
    { title: t("nav.industries.smb"), path: L("/industrias/pymes") },
  ];

  const recursosItems = [
    { title: t("nav.resources.blog"), path: "https://tutumsec.io/blog" },
  ];

  const sobreNosotrosItems = [
    { title: t("nav.about.history"), path: L("/sobre-nosotros/historia") },
    {
      title: t("nav.about.teamValues"),
      path: L("/sobre-nosotros/equipo-valores"),
    },
  ];

  return (
    <nav className="bg-white shadow-lg py-2 fixed w-full text-md top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={L("/")}>
              <img
                src="/uploads/tutumsec.png"
                alt="TutumSec Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 whitespace-nowrap">
              <NavbarDropdown
                title={t("nav.menu.services")}
                items={serviciosItems}
              />
              <NavbarDropdown
                title={t("nav.menu.products")}
                items={productosItems}
              />
              <NavbarDropdown
                title={t("nav.menu.industries")}
                items={industriasItems}
              />
              <NavbarDropdown
                title={t("nav.menu.resources")}
                items={recursosItems}
              />
              <NavbarDropdown
                title={t("nav.menu.about")}
                items={sobreNosotrosItems}
              />
              <Link
                to={L("/contacto")}
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
              >
                {t("nav.menu.contact")}
              </Link>
            </div>
          </div>

          {/* Right / CTA (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a
              href="https://calendly.com/ayub-tutumsec/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-white font-medium transition-colors whitespace-nowrap"
              style={{
                background: "linear-gradient(to bottom, #5eb9f0, #3886f4)",
              }}
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label={isMenuOpen ? t("nav.aria.close") : t("nav.aria.open")}
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
            {[
              {
                key: "servicios",
                title: t("nav.menu.services"),
                items: serviciosItems,
              },
              {
                key: "productos",
                title: t("nav.menu.products"),
                items: productosItems,
              },
              {
                key: "industrias",
                title: t("nav.menu.industries"),
                items: industriasItems,
              },
              {
                key: "recursos",
                title: t("nav.menu.resources"),
                items: recursosItems,
              },
              {
                key: "sobreNosotros",
                title: t("nav.menu.about"),
                items: sobreNosotrosItems,
              },
            ].map(({ key, title, items }) => (
              <div key={key} className="space-y-1">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 transition-colors"
                >
                  {title}
                  {expandedSections[key] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {expandedSections[key] &&
                  items.map((item, index) => (
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
            ))}

            {/* Contacto */}
            <Link
              to={L("/contacto")}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              {t("nav.menu.contact")}
            </Link>

            {/* Selector de idioma en menú móvil */}
            <div className="px-3 mt-3">
              <LanguageSelector />
            </div>

            {/* CTA */}
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
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
