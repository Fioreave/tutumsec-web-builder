import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    'Auditorías de Seguridad',
    'Implementación del RGPD', 
    'Monitorización 24/7',
    'Formación y Concienciación',
    'Respuesta ante Incidentes',
    'Consultoría Estratégica'
  ];

  const company = [
    'Sobre Nosotros',
    'Nuestro Equipo',
    'Certificaciones',
    'Casos de Éxito',
    'Blog',
    'Carreras'
  ];

  const resources = [
    'Documentación',
    'Whitepapers',
    'Webinars',
    'Centro de Ayuda',
    'Contacto',
    'Soporte Técnico'
  ];

  const certifications = [
    'ISO 27001 Certificado',
    'Cumplimiento RGPD', 
    'SOC 2 Tipo II',
    'Equipo Certificado CISSP'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <img 
                src="/lovable-uploads/fb8d9ddd-cdaa-4f53-a077-13e62a21a942.png" 
                alt="TutumSec Logo" 
                className="h-16 w-auto mr-3 transition-all duration-500 group-hover:scale-110 filter brightness-110"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-200">
              La seguridad digital es nuestro hilo conductor. Expertos en ciberseguridad y cumplimiento normativo para empresas que exigen más.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">hola@tutumsec.io</span>
              </div>
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">+376 862-762</span>
              </div>
              <div className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">Barcelona, Cataluña</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recursos</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">
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
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in">Mantente Informado</h3>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Suscríbete a nuestra newsletter para recibir las últimas noticias sobre ciberseguridad y nuestras soluciones
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Input 
              placeholder="Tu correo electrónico"
              className="flex-1 bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 focus:scale-105"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center text-sm text-green-400 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-gentle-bounce" style={{ animationDelay: `${index * 0.5}s` }}></div>
                {cert}
              </div>
            ))}
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 TutumSec. Todos los derechos reservados. | 
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 ml-1">Política de Privacidad</a> | 
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 ml-1">Términos y Condiciones</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
