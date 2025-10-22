// src/components/Footer.tsx
import React from "react";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";
import { useLangLink } from "@/i18n/useLangLink";

const Footer: React.FC = () => {
  const { t } = useTranslations(["common"]);
  const L = useLangLink();

  const certifications = [
    t("footer.certs.iso27001"),
    t("footer.certs.rgpd"),
    t("footer.certs.soc2"),
    t("footer.certs.cissp"),
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <img
                src="/uploads/tutumsec-negativo.png"
                alt={t("footer.logoAlt")}
                className="h-16 w-auto mr-3 transition-all duration-500 group-hover:scale-110 filter brightness-110"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-200">
              {t("footer.brandCopy")}
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">{t("footer.email")}</span>
              </div>

              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">{t("footer.location")}</span>
              </div>

              <div className="pt-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.linkedinAria")}
                  href="https://www.linkedin.com/company/tutumsec/posts/?feedView=all"
                  className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.col.services")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/servicios/consultoria-ciso")}>
                  {t("footer.links.consultoriaCiso")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/servicios/auditoria-compliance-nis2")}>
                  {t("footer.links.auditoriaNis2")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/servicios/transformacion-digital-estrategica")}>
                  {t("footer.links.transformacionDigital")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/servicios/formacion-concienciacion")}>
                  {t("footer.links.formacion")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/servicios/oficina-seguridad-informacion-nis2")}>
                  {t("footer.links.oficinaSeguridad")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.col.products")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/productos/deteccion-24x7")}>
                  {t("footer.links.deteccion")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/productos/prevencion")}>
                  {t("footer.links.prevencion")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/productos/incidente-respuesta-retainer")}>
                  {t("footer.links.respuesta")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/productos/recuperacion-backup")}>
                  {t("footer.links.recuperacion")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t("footer.col.company")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/sobre-nosotros/historia")}>
                  {t("footer.links.historia")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/sobre-nosotros/equipo-valores")}>
                  {t("footer.links.equipoValores")}
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/recursos/blog")}>{t("footer.links.blog")}</Link>
              </li>
              <li className="hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                <Link to={L("/contacto")}>{t("footer.links.contacto")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-green-400 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-gentle-bounce"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                {cert}
              </div>
            ))}
          </div>

          {/* Social & legal */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} TutumSec. {t("footer.rights")} |
              <a
                target="_blank"
                href={L("/privacy-policy")}
                className="hover:text-blue-400 transition-colors duration-300 ml-1"
              >
                {t("footer.privacy")}
              </a>{" "}
              |
              <a
                target="_blank"
                href={L("/aviso-legal")}
                className="hover:text-blue-400 transition-colors duration-300 ml-1"
              >
                {t("footer.legal")}
              </a>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center gap-4">
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/uploads/certifications/iso27001.svg"
                    alt={t("footer.isoAlt")}
                    className="h-12 px-2 py-2 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/uploads/certifications/incibe.svg"
                    alt={t("footer.incibeAlt")}
                    className="h-12 px-2 py-2 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/uploads/certifications/ASCICAT.svg"
                    alt={t("footer.ascicatAlt")}
                    className="h-12 px-2 py-2 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/uploads/certifications/agenciacat.svg"
                    alt={t("footer.agenciacatAlt")}
                    className="h-12 px-2 py-2 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
              {/* redes extra opcionales */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
