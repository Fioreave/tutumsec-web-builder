// Si usas JS puro puedes quitar los tipos.
const GA_ID = "G-NXH71RK7F4";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function loadGA() {
  // Evita carga doble
  if (document.getElementById("ga4-src")) return;

  // 1) Script de GA
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // 2) dataLayer + gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // 3) Init y desactivar auto page_view para SPA
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function pageview(path?: string) {
  if (!window.gtag) return;
  window.gtag("event", "page_view", path ? { page_path: path } : undefined);
}

// Opcional: borrar cookies GA si el usuario rechaza
export function eraseGACookies() {
  const gaCookies = [
    "_ga",
    "_ga_XXXX", // comodín; borraremos variantes
    "_gid",
    "_gat",
  ];
  const domains = [
    window.location.hostname,
    "." + window.location.hostname.replace(/^www\./, ""),
  ];

  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  gaCookies.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}`;
    });
    // sin domain
    document.cookie = `${name}=; expires=${expires}; path=/;`;
  });
}
