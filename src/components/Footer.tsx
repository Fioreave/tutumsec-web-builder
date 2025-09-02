import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    "Auditorías de Seguridad",
    "Implementación del RGPD",
    "Monitorización 24/7",
    "Formación y Concienciación",
    "Respuesta ante Incidentes",
    "Consultoría Estratégica",
  ];

  const company = [
    "Sobre Nosotros",
    "Nuestro Equipo",
    "Certificaciones",
    "Casos de Éxito",
    "Blog",
    "Carreras",
  ];

  const resources = [
    "Documentación",
    "Whitepapers",
    "Webinars",
    "Centro de Ayuda",
    "Contacto",
    "Soporte Técnico",
  ];

  const certifications = [
    "ISO 27001 Certificado",
    "Cumplimiento RGPD",
    "SOC 2 Tipo II",
    "Equipo Certificado CISSP",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 lg:mb-6 group">
              <img
                src="/uploads/tutumsec-negativo.png"
                alt="TutumSec Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto mr-3 transition-all duration-500 group-hover:scale-110 filter brightness-110"
              />
            </div>
            <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-200 text-sm lg:text-base">
              La seguridad digital es nuestro hilo conductor. Expertos en
              ciberseguridad y cumplimiento normativo para empresas que exigen
              más.
            </p>
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">hola@tutumsec.io</span>
              </div>
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+376 862-762</span>
              </div>
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <MapPin className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Barcelona, Cataluña</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">
              Servicios
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">
              Empresa
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">
              Recursos
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 animate-fade-in">
              Mantente Informado
            </h3>
            <p
              className="text-gray-300 max-w-2xl mx-auto animate-fade-in text-sm sm:text-base"
              style={{ animationDelay: "0.2s" }}
            >
              Suscríbete a nuestra newsletter para recibir las últimas noticias
              sobre ciberseguridad y nuestras soluciones
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Input
              placeholder="Tu correo electrónico"
              className="flex-1 bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400 rounded-full px-4 sm:px-6 py-2 sm:py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 focus:scale-105 text-sm sm:text-base"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center text-xs sm:text-sm text-green-400 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-gentle-bounce flex-shrink-0"
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></div>
                <span className="text-center sm:text-left">{cert}</span>
              </div>
            ))}
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs sm:text-sm text-gray-400 text-center md:text-left order-2 md:order-1">
              © 2025 TutumSec. Todos los derechos reservados. |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300 ml-1"
              >
                Política de Privacidad
              </a>{" "}
              |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300 ml-1"
              >
                Términos y Condiciones
              </a>
            </div>

            <div className="flex space-x-3 sm:space-x-4 order-1 md:order-2">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
