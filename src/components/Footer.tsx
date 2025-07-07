import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    'Auditories de Seguretat',
    'Implementació GDPR', 
    'Monitorització 24/7',
    'Formació i Awareness',
    'Resposta a Incidents',
    'Consultoria Estratègica'
  ];

  const company = [
    'Sobre Nosaltres',
    'El Nostre Equip',
    'Certificacions',
    'Casos d\'Èxit',
    'Blog',
    'Carreres'
  ];

  const resources = [
    'Documentació',
    'Whitepapers',
    'Webinars',
    'Centre d\'Ajuda',
    'Contacte',
    'Suport Tècnic'
  ];

  const certifications = [
    'ISO 27001 Certificat',
    'GDPR Compliant', 
    'SOC 2 Type II',
    'CISSP Certified Team'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/28486bc8-b0a7-48de-a3dd-49f71e4a3f41.png" 
                alt="TutumSec Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              La seguretat digital és el nostre fil conductor. Experts en ciberseguretat i compliance per a empreses que exigeixen més.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">info@tutumsec.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">+34 900 123 456</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">Barcelona, Catalunya</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Serveis</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
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
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
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
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
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
            <h3 className="text-2xl font-bold mb-4">Mantingues-te Informat</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscriu-te al nostre newsletter per rebre les últimes notícies sobre ciberseguretat i les nostres solucions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="El teu email"
              className="flex-1 bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
              Subscriu-te
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
              <div key={index} className="flex items-center text-sm text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                {cert}
              </div>
            ))}
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 TutumSec. Tots els drets reservats. | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Política de Privacitat</a> | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Termes i Condicions</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
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
