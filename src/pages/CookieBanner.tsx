import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const COOKIE_NAME = "test_cookie_consent_force"; // nuevo nombre para ignorar cookies previas

// Carga GA solo tras aceptar
function loadGA() {
  if (document.getElementById("ga4-src")) return;
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-NXH71RK7F4";
  document.head.appendChild(s);

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function () {
    (window as any).dataLayer.push(arguments);
  };
  (window as any).gtag("js", new Date());
  (window as any).gtag("config", "G-NXH71RK7F4", { send_page_view: false });
}

export default function CookieBanner() {
  // Para verificar montaje
  useEffect(() => {
    console.log("[CookieBanner] montado");
  }, []);

  // Si ya aceptó antes (esta cookie nueva estará vacía la 1ª vez)
  useEffect(() => {
    if (getCookieConsentValue(COOKIE_NAME) === "true") {
      loadGA();
    }
  }, []);

  return (
    <CookieConsent
      cookieName={COOKIE_NAME}
      location="bottom"
      enableDeclineButton
      buttonText="Aceptar todas"
      declineButtonText="Rechazar"
      expires={180}
      debug={true} // MUESTRA el banner aunque exista cookie previa (para probar)
      style={{
        background: "#111",
        lineHeight: 1.5,
        zIndex: 2147483647,
        position: "fixed",
      }}
      buttonStyle={{ color: "#111", background: "#fff", fontWeight: 700 }}
      declineButtonStyle={{
        color: "#fff",
        background: "#444",
        fontWeight: 600,
      }}
      onAccept={() => {
        loadGA();
      }}
      onDecline={() => {
        // si hubiera cookies previas, aquí podrías borrarlas
      }}
    >
      Usamos cookies de analítica (GA4) para mejorar tu experiencia.
    </CookieConsent>
  );
}
