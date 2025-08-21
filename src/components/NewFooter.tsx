import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const NewFooter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const serviciosKey = [
    { title: 'Gobernanza & vCISO', path: '/es/servicios/consultoria-ciso' },
    { title: 'Auditorías & Pentesting', path: '/es/servicios/auditoria-compliance-nis2' },
    { title: 'Transformación digital estratégica', path: '/es/servicios/transformacion-digital-estrategica' },
    { title: 'Compliance NIS2 · ENS · ISO 27001', path: '/es/servicios/auditoria-compliance-nis2' },
    { title: 'MDR / SOC 24×7', path: '/es/servicios/deteccion-soc-mdr-xdr' },
    { title: 'Respuesta a Incidentes', path: '/es/servicios/respuesta-incidente' },
    { title: 'Formación & Awareness', path: '/es/retainer/formacion-concienciacion' }
  ];

  const recursos = [
    { title: 'Blog / Insights', path: '/blog' },
    { title: 'Preguntas frecuentes (FAQ)', path: '/#faq' },
    { title: 'Glosario de Ciberseguridad', path: '/glosario' }
  ];

  const empresa = [
    { title: 'Sobre nosotros', path: '/es/sobre-nosotros' },
    { title: 'Cultura y valores', path: '/es/sobre-nosotros/equipo-valores' },
    { title: 'Carreras (Trabaja con nosotros)', path: '/carreras' },
    { title: 'Partners tecnológicos', path: '/es/sobre-nosotros/certificaciones-partners' }
  ];

  const legal = [
    { title: 'Aviso legal', path: '/aviso-legal' },
    { title: 'Política de privacidad', path: '/politica-privacidad' },
    { title: 'Política de seguridad', path: '/politica-seguridad' },
    { title: 'Política de cookies', path: '/politica-cookies' },
    { title: 'Términos del servicio', path: '/terminos-servicio' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Recibirás ciber-consejos mensuales en tu email.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/28486bc8-b0a7-48de-a3dd-49f71e4a3f41.png" 
                alt="TutumSec Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              TutumSec – Transformamos la ciberseguridad en ventaja competitiva
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-primary-light flex-shrink-0" />
                <span>Barcelona · Girona · Andorra</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-primary-light flex-shrink-0" />
                <span>hola@tutumsec.io</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              {serviciosKey.map((servicio, index) => (
                <li key={index}>
                  <Link 
                    to={servicio.path} 
                    className="text-sm text-gray-300 hover:text-primary-light transition-colors duration-300 block"
                  >
                    {servicio.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recursos</h4>
            <ul className="space-y-3">
              {recursos.map((recurso, index) => (
                <li key={index}>
                  <Link 
                    to={recurso.path} 
                    className="text-sm text-gray-300 hover:text-primary-light transition-colors duration-300 block"
                  >
                    {recurso.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              {empresa.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-gray-300 hover:text-primary-light transition-colors duration-300 block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Suscríbete y recibe ciber-consejos mensuales
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white"
              >
                Suscríbete
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Incentivo: "Checklist de 10 acciones rápidas para reducir el riesgo"
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
          <div className="flex flex-wrap gap-4">
            {legal.map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className="text-sm text-gray-300 hover:text-primary-light transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Reconocimientos */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-white">Reconocimientos</h4>
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <span>• Certificaciones (ISO 27001)</span>
            <span>• INCIBE</span>
            <span>• Acció</span>
            <span>• ASCICAT</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 TutumSec · Cybersecurity Consulting & Strategy
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary-light" />
              </a>
              <span className="text-sm text-gray-400">By BDR Group</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;