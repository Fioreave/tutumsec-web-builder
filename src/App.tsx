import { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WordPressBlog from "./pages/WordPressBlog";
import Admin from "./pages/Admin";
import PostEditor from "./pages/PostEditor";
import Contacto from "./pages/Contacto";
import ReservaConsultoria from "./pages/ReservaConsultoria";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SetupAdmin from "./pages/SetupAdmin";

// Servicios
import Servicios from "./pages/servicios/Servicios";
import ConsultoriaCiso from "./pages/servicios/ConsultoriaCiso";
import AuditoriaCompliance from "./pages/servicios/AuditoriaCompliance";
import TransformacionDigital from "./pages/servicios/TransformacionDigital";
import FormacionConcienciacionServicios from "./pages/servicios/FormacionConcienciacion";
import RespuestaIncidente from "./pages/servicios/RespuestaIncidente";
import OficinaSeguridad from "./pages/servicios/OficinaSeguridad";

// Productos
import Productos from "./pages/productos/Productos";
import Deteccion24x7 from "./pages/productos/Deteccion24x7";
import IncidenteRespuestaRetainer from "./pages/productos/IncidenteRespuestaRetainer";
import PrevencionRecuperacionBackup from "./pages/productos/PrevencionRecuperacionBackup";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog-admin-access" element={<Auth />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/setup-admin" element={<SetupAdmin />} />
          <Route path="/blog" element={<WordPressBlog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/es/blog" element={<WordPressBlog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/posts/new" element={<PostEditor />} />
          <Route path="/admin/posts/:id/edit" element={<PostEditor />} />
          
          {/* Páginas principales */}
          <Route path="/es/contacto" element={<Contacto />} />
          <Route path="/es/reserva-consultoria" element={<ReservaConsultoria />} />
          
          {/* Servicios */}
          <Route path="/es/servicios" element={<Servicios />} />
          <Route path="/es/servicios/consultoria-ciso" element={<ConsultoriaCiso />} />
          <Route path="/es/servicios/auditoria-compliance-nis2" element={<AuditoriaCompliance />} />
          <Route path="/es/servicios/transformacion-digital-estrategica" element={<TransformacionDigital />} />
          <Route path="/es/servicios/formacion-concienciacion" element={<FormacionConcienciacionServicios />} />
          <Route path="/es/servicios/oficina-seguridad-informacion-nis2" element={<OficinaSeguridad />} />
          
          {/* Productos */}
          <Route path="/es/productos" element={<Productos />} />
          <Route path="/es/productos/deteccion-24x7" element={<Deteccion24x7 />} />
          <Route path="/es/productos/incidente-respuesta-retainer" element={<IncidenteRespuestaRetainer />} />
          <Route path="/es/productos/prevencion-recuperacion-backup" element={<PrevencionRecuperacionBackup />} />
          
          {/* Industrias */}
          <Route path="/es/industrias" element={<Industrias />} />
          <Route path="/es/industrias/finanzas" element={<Finanzas />} />
          <Route path="/es/industrias/salud" element={<Salud />} />
          <Route path="/es/industrias/industrial-ot" element={<IndustrialOt />} />
          <Route path="/es/industrias/tecnologia-saas" element={<TecnologiaSaas />} />
          <Route path="/es/industrias/sector-publico" element={<SectorPublico />} />
          
          {/* Recursos */}
          <Route path="/es/recursos" element={<Recursos />} />
          <Route path="/es/recursos/whitepapers" element={<Whitepapers />} />
          <Route path="/es/recursos/casos-exito" element={<CasosExito />} />
          
          {/* Sobre Nosotros */}
          <Route path="/es/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/es/sobre-nosotros/historia" element={<Historia />} />
          <Route path="/es/sobre-nosotros/equipo-valores" element={<EquipoValores />} />
          <Route path="/es/sobre-nosotros/certificaciones-partners" element={<CertificacionesPartners />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
