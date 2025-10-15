import { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WordPressBlog from "./pages/WordPressBlog";
import Contacto from "./pages/Contacto";
import ReservaConsultoria from "./pages/ReservaConsultoria";

// Servicios
import Servicios from "./pages/servicios/Servicios";
import ConsultoriaCiso from "./pages/servicios/ConsultoriaCiso";
import AuditoriaCompliance from "./pages/servicios/AuditoriaCompliance";
//import Deteccion24x7Service from "./pages/servicios/Deteccion24x7";
import RespuestaIncidentes from "./pages/servicios/RespuestaIncidentes";
import FormacionConcienciacion from "./pages/servicios/FormacionConcienciacion";
import TransformacionDigital from "./pages/servicios/TransformacionDigital";
import OficinaSeguridad from "./pages/servicios/OficinaSeguridad";

// Productos
import Productos from "./pages/productos/Productos";
import Deteccion24x7Product from "./pages/productos/Deteccion24x7";
import PrevencionBackup from "./pages/productos/PrevencionBackup";
import IncidenteRespuestaRetainer from "./pages/productos/IncidenteRespuestaRetainer";
import RecuperacionBackup from "./pages/productos/RecuperacionBackup";

// Industrias
import Industrias from "./pages/industrias/Industrias";
import Finanzas from "./pages/industrias/Finanzas";
import Salud from "./pages/industrias/Salud";
import IndustrialOt from "./pages/industrias/IndustrialOt";
import TecnologiaSaas from "./pages/industrias/TecnologiaSaas";
import SectorPublico from "./pages/industrias/SectorPublico";

// Recursos
import Recursos from "./pages/recursos/Recursos";
import Whitepapers from "./pages/recursos/Whitepapers";
import CasosExito from "./pages/recursos/CasosExito";

// Sobre Nosotros
import SobreNosotros from "./pages/sobre-nosotros/SobreNosotros";
import Historia from "./pages/sobre-nosotros/Historia";
import EquipoValores from "./pages/sobre-nosotros/EquipoValores";
import CertificacionesPartners from "./pages/sobre-nosotros/CertificacionesPartners";
import CookieBanner from "./pages/CookieBanner";
import ScrollToTop from "./ScrollToTop";
import AvisoLegal from "./components/AvisoLegal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Pymes from "./pages/industrias/Pymes";
import PoliticaCookies from "./components/PoliticaCookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/es/" element={<Index />} />
          <Route path="/blog" element={<Navigate to="/blog" replace />} />

          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />

          {/* Páginas principales */}
          <Route path="/es/contacto/" element={<Contacto />} />
          <Route
            path="/es/reserva-consultoria/"
            element={<ReservaConsultoria />}
          />

          {/* Servicios */}
          <Route path="/es/servicios/" element={<Servicios />} />
          <Route
            path="/es/servicios/consultoria-ciso/"
            element={<ConsultoriaCiso />}
          />
          <Route
            path="/es/servicios/auditoria-compliance-nis2/"
            element={<AuditoriaCompliance />}
          />
          <Route
            path="/es/servicios/respuesta-incidentes/"
            element={<RespuestaIncidentes />}
          />
          <Route
            path="/es/servicios/formacion-concienciacion/"
            element={<FormacionConcienciacion />}
          />
          <Route
            path="/es/servicios/transformacion-digital-estrategica/"
            element={<TransformacionDigital />}
          />
          <Route
            path="/es/servicios/oficina-seguridad-informacion-nis2/"
            element={<OficinaSeguridad />}
          />

          {/* Productos */}
          <Route path="/es/productos/" element={<Productos />} />
          <Route
            path="/es/productos/deteccion-24x7/"
            element={<Deteccion24x7Product />}
          />
          <Route
            path="/es/productos/prevencion/"
            element={<PrevencionBackup />}
          />
          <Route
            path="/es/productos/incidente-respuesta-retainer/"
            element={<IncidenteRespuestaRetainer />}
          />
          <Route
            path="/es/productos/recuperacion-backup/"
            element={<RecuperacionBackup />}
          />

          {/* Industrias */}
          <Route path="/es/industrias/" element={<Industrias />} />
          <Route path="/es/industrias/finanzas/" element={<Finanzas />} />
          <Route path="/es/industrias/salud/" element={<Salud />} />
          <Route
            path="/es/industrias/industrial-ot/"
            element={<IndustrialOt />}
          />
          <Route
            path="/es/industrias/tecnologia-saas/"
            element={<TecnologiaSaas />}
          />
          <Route
            path="/es/industrias/sector-publico/"
            element={<SectorPublico />}
          />
          <Route path="/es/industrias/pymes/" element={<Pymes />} />

          {/* Recursos */}
          <Route path="/es/recursos/" element={<Recursos />} />
          <Route path="/es/recursos/blog/" element={<WordPressBlog />} />
          <Route
            path="/es/recursos/whitepapers-checklists/"
            element={<Whitepapers />}
          />
          <Route path="/es/recursos/casos-exito/" element={<CasosExito />} />

          {/* Sobre Nosotros */}
          <Route path="/es/sobre-nosotros/" element={<SobreNosotros />} />
          <Route path="/es/sobre-nosotros/historia/" element={<Historia />} />
          <Route
            path="/es/sobre-nosotros/equipo-valores/"
            element={<EquipoValores />}
          />
          <Route
            path="/es/sobre-nosotros/certificaciones-partners/"
            element={<CertificacionesPartners />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
