import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import ExternalRedirect from "./components/ExternalRedirect";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contacto from "./pages/Contacto";
import ReservaConsultoria from "./pages/ReservaConsultoria";

// Servicios
import Servicios from "./pages/servicios/Servicios";
import ConsultoriaCiso from "./pages/servicios/ConsultoriaCiso";
import AuditoriaCompliance from "./pages/servicios/AuditoriaCompliance";
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
import Pymes from "./pages/industrias/Pymes";

import Historia from "./pages/sobre-nosotros/Historia";
import EquipoValores from "./pages/sobre-nosotros/EquipoValores";

// Recursos
import Recursos from "./pages/recursos/Recursos";
import CasosExito from "./pages/recursos/CasosExito";

// Legal & layout
import CookieBanner from "./pages/CookieBanner";
import ScrollToTop from "./ScrollToTop";
import AvisoLegal from "./components/AvisoLegal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PoliticaCookies from "./components/PoliticaCookies";

import {
  LanguageProvider,
  useLanguage,
  Language,
} from "./i18n/LanguageContext";

const queryClient = new QueryClient();
const SUPPORTED_LANGS = ["es", "ca", "fr", "en"] as const;
type Supported = (typeof SUPPORTED_LANGS)[number];
const DEFAULT_LANG: Supported = "es";

// Detecta idioma del navegador (dos letras) y lo normaliza a Supported
function detectDefaultLang(): Supported {
  const raw =
    typeof navigator !== "undefined" && navigator.language
      ? navigator.language.toLowerCase()
      : DEFAULT_LANG;
  const two = raw.slice(0, 2) as Supported;
  return SUPPORTED_LANGS.includes(two) ? two : DEFAULT_LANG;
}

// Redirige "/" -> "/:lang/"
function RootRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(`/${detectDefaultLang()}/`, { replace: true });
  }, [navigate]);
  return null;
}

// Valida :lang, sincroniza LanguageContext y <html lang>
function LangGuard() {
  const params = useParams();
  const urlLang = (params.lang || "") as Supported;
  const { language, changeLanguage } = useLanguage();

  // Si el lang de la URL no es válido, normaliza a default
  if (!SUPPORTED_LANGS.includes(urlLang)) {
    return <Navigate to={`/${DEFAULT_LANG}/`} replace />;
  }

  React.useEffect(() => {
    document.documentElement.lang = urlLang;
    if (language !== urlLang) changeLanguage(urlLang as Language);
  }, [urlLang, language, changeLanguage]);

  return <Outlet />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <CookieBanner />

          <Routes>
            {/* Raíz -> idioma detectado */}
            <Route path="/" element={<RootRedirect />} />

            <Route
              path="/blog/*"
              element={
                <ExternalRedirect to={`${window.location.origin}/blog`} />
              }
            />

            {/* Segmento de idioma */}
            <Route path="/:lang" element={<LangGuard />}>
              {/* Home */}
              <Route index element={<Index />} />

              {/* Legal */}
              <Route path="aviso-legal" element={<AvisoLegal />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="politica-de-cookies" element={<PoliticaCookies />} />

              {/* Páginas principales */}
              <Route path="contacto/" element={<Contacto />} />
              <Route
                path="reserva-consultoria/"
                element={<ReservaConsultoria />}
              />

              {/* Servicios */}
              <Route path="servicios/" element={<Servicios />} />
              <Route
                path="servicios/consultoria-ciso/"
                element={<ConsultoriaCiso />}
              />
              <Route
                path="servicios/auditoria-compliance-nis2/"
                element={<AuditoriaCompliance />}
              />
              <Route
                path="servicios/respuesta-incidentes/"
                element={<RespuestaIncidentes />}
              />
              <Route
                path="servicios/formacion-concienciacion/"
                element={<FormacionConcienciacion />}
              />
              <Route
                path="servicios/transformacion-digital-estrategica/"
                element={<TransformacionDigital />}
              />
              <Route
                path="servicios/oficina-seguridad-informacion-nis2/"
                element={<OficinaSeguridad />}
              />

              {/* Productos */}
              <Route path="productos/" element={<Productos />} />
              <Route
                path="productos/deteccion-24x7/"
                element={<Deteccion24x7Product />}
              />
              <Route
                path="productos/prevencion/"
                element={<PrevencionBackup />}
              />
              <Route
                path="productos/incidente-respuesta-retainer/"
                element={<IncidenteRespuestaRetainer />}
              />
              <Route
                path="productos/recuperacion-backup/"
                element={<RecuperacionBackup />}
              />

              {/* Industrias */}
              <Route path="industrias/" element={<Industrias />} />
              <Route path="industrias/finanzas/" element={<Finanzas />} />
              <Route path="industrias/salud/" element={<Salud />} />
              <Route
                path="industrias/industrial-ot/"
                element={<IndustrialOt />}
              />
              <Route
                path="industrias/tecnologia-saas/"
                element={<TecnologiaSaas />}
              />
              <Route
                path="industrias/sector-publico/"
                element={<SectorPublico />}
              />
              <Route path="industrias/pymes/" element={<Pymes />} />

              {/* Sobre Nosotros */}

              <Route path="sobre-nosotros/historia/" element={<Historia />} />
              <Route
                path="sobre-nosotros/equipo-valores/"
                element={<EquipoValores />}
              />

              {/* Recursos */}
              <Route path="recursos/" element={<Recursos />} />
              <Route path="recursos/casos-exito/" element={<CasosExito />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
