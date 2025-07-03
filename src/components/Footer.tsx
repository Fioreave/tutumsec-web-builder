
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Gobernanza & vCISO',
    'Auditorías & Pentesting', 
    'MDR / SOC 24×7',
    'Respuesta a Incidentes',
    'Formación & Awareness',
    'Compliance NIS2 · ENS · ISO 27001'
  ];

  const resources = [
    'Blog / Insights',
    'Preguntas frecuentes (FAQ)',
    'Glosario de Ciberseguridad'
  ];

  const company = [
    'Sobre nosotros',
    'Cultura y valores', 
    'Carreras (Trabaja con nosotros)',
    'Partners tecnológicos'
  ];

  const legal = [
    'Aviso legal',
    'Política de privacidad',
    'Política de seguridad',
    'Política de cookies',
    'Términos del servicio'
  ];

  const certifications = ['ISO 27001', 'INCIBE', 'Acció', 'ASCICAT'];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">TutumSec</h3>
              <p className="text-gray-400">
                Transformamos la ciberseguridad en ventaja competitiva
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Suscríbete y recibe ciberconsejos mensuales
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Tu email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Suscríbete
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Checklist de 10 acciones rápidas para reducir el riesgo
              </p>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Barcelona · Girona · Andorra</span>
              </div>
            </div>

            {/* Social */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="font-semibold mb-6">Reconocimientos</h4>
          <div className="flex flex-wrap gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-sm text-gray-400">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 TutumSec · Cybersecurity Consulting & Strategy
          </div>
          <div className="text-sm text-gray-500">
            By BDR Group
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
