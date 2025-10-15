// CookiePreferences.tsx
import React, { useEffect, useMemo, useState } from "react";

/* ==================== Config ==================== */
const GA_MEASUREMENT_ID = "G-NXH71RK7F4";
const CONSENT_COOKIE = "cookie_prefs_v2";
const CONSENT_META_COOKIE = CONSENT_COOKIE + "_meta";
const COOKIE_EXPIRES_DAYS = 180; // ~6 meses

type ConsentState = {
  necessary: true; // literal true (no editable)
  analytics: boolean; // analytics_storage
  advertising: boolean; // ad_storage, ad_user_data, ad_personalization
  functional: boolean; // functionality_storage
};

// default conservando los literales
const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  advertising: false,
  functional: true, // si no usas cookies funcionales, ponlo en false
} as const satisfies ConsentState;

/* ==================== Utils ==================== */
function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

function delCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}; SameSite=Lax`;
}

function ensureConsentStub() {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function () {
    (window as any).dataLayer.push(arguments);
  };
  (window as any).gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

function applyConsentToGtag(state: ConsentState) {
  (window as any).gtag?.("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: state.advertising ? "granted" : "denied",
    ad_user_data: state.advertising ? "granted" : "denied",
    ad_personalization: state.advertising ? "granted" : "denied",
    functionality_storage: state.functional ? "granted" : "denied",
  });
}

function loadGA() {
  if (document.getElementById("ga4-src")) return;
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  (window as any).gtag?.("js", new Date());
  (window as any).gtag?.("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
}

function sendInitialPageView() {
  (window as any).gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

/* Borrar cookies GA si el usuario retira consentimiento */
function wipeGA() {
  ["_ga", "_gid", "_gat"].forEach(delCookie);
  // Añade aquí otros terceros si los usas (Meta, Hotjar, etc.)
}

/* ==================== Componente ==================== */
export default function CookiePreferences() {
  const [openPrefs, setOpenPrefs] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);

  // Inicialización: stub + lee cookie existente
  useEffect(() => {
    ensureConsentStub();

    const raw = getCookie(CONSENT_COOKIE);
    if (!raw) {
      setShowBanner(true);
      return;
    }
    try {
      // Parsea y reconstruye asegurando el literal 'necessary: true'
      const saved = JSON.parse(
        decodeURIComponent(raw)
      ) as Partial<ConsentState>;
      const fixed: ConsentState = {
        necessary: true,
        analytics: !!saved.analytics,
        advertising: !!saved.advertising,
        functional: !!saved.functional,
      };
      setConsent(fixed);
      applyConsentToGtag(fixed);
      if (fixed.analytics) {
        loadGA();
        sendInitialPageView();
      } else {
        wipeGA();
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsentCookie = (state: ConsentState) => {
    setCookie(CONSENT_COOKIE, JSON.stringify(state), COOKIE_EXPIRES_DAYS);
    setCookie(
      CONSENT_META_COOKIE,
      JSON.stringify({
        ts: new Date().toISOString(),
        version: "2025-10-13",
        origin: "preferences",
      }),
      COOKIE_EXPIRES_DAYS
    );
  };

  const acceptAll = () => {
    const nextState: ConsentState = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
    };
    setConsent(nextState);
    applyConsentToGtag(nextState);
    saveConsentCookie(nextState);
    loadGA();
    sendInitialPageView();
    setShowBanner(false);
    setOpenPrefs(false);
  };

  const rejectAll = () => {
    const nextState: ConsentState = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
    };
    setConsent(nextState);
    applyConsentToGtag(nextState);
    saveConsentCookie(nextState);
    wipeGA();
    setShowBanner(false);
    setOpenPrefs(false);
  };

  const saveSelection = () => {
    const nextState: ConsentState = {
      ...consent,
      necessary: true, // reafirma el literal
    };
    applyConsentToGtag(nextState);
    saveConsentCookie(nextState);
    if (nextState.analytics) {
      loadGA();
      sendInitialPageView();
    } else {
      wipeGA();
    }
    setShowBanner(false);
    setOpenPrefs(false);
  };

  const Banner = useMemo(
    () =>
      showBanner ? (
        <div className="fixed mx-6 my-2 inset-x-0 bottom-0 z-[2147483647]">
          <div className="mx-auto p-4 rounded-xl bg-slate-900/95 text-white shadow-lg">
            <p className="text-sm sm:text-base">
              Usamos cookies para finalidades técnicas, analíticas y de
              publicidad. Puedes aceptarlas todas, rechazarlas o ajustar tus
              preferencias. Más info en nuestra{" "}
              <a
                target="_blank"
                href="/politica-de-cookies"
                className="underline"
              >
                Política de cookies
              </a>
              .
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={() => setOpenPrefs(true)}
                className="px-4 py-2 rounded-lg bg-transparent ring-1 ring-white/30"
              >
                Preferencias
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg bg-slate-800"
              >
                Rechazar
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      ) : null,
    [showBanner]
  );

  const Modal = useMemo(
    () =>
      openPrefs ? (
        <div className="fixed inset-0 z-[2147483647] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenPrefs(false)}
            aria-hidden
          />
          <div className="relative mx-4 w-full max-w-2xl rounded-2xl bg-white text-slate-900 shadow-2xl">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Preferencias de cookies</h3>
              <p className="text-sm text-slate-600 mt-1">
                Controla qué categorías permites. Puedes cambiarlas en cualquier
                momento.
              </p>
            </div>

            <div className="p-6 space-y-5">
              {/* Necesarias */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="mt-1 cursor-not-allowed"
                />
                <div>
                  <div className="font-medium">Necesarias</div>
                  <div className="text-sm text-slate-600">
                    Imprescindibles para que el sitio funcione (seguridad,
                    sesión, balanceo).
                  </div>
                </div>
              </div>

              {/* Analítica */}
              <div className="flex items-start gap-4">
                <input
                  id="chk-analytics"
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent((s) => ({ ...s, analytics: e.target.checked }))
                  }
                  className="mt-1"
                />
                <label htmlFor="chk-analytics" className="cursor-pointer">
                  <div className="font-medium">Analítica</div>
                  <div className="text-sm text-slate-600">
                    Nos ayuda a medir el uso del sitio (p. ej., Google Analytics
                    4).
                  </div>
                </label>
              </div>

              {/* Publicidad */}
              <div className="flex items-start gap-4">
                <input
                  id="chk-ads"
                  type="checkbox"
                  checked={consent.advertising}
                  onChange={(e) =>
                    setConsent((s) => ({ ...s, advertising: e.target.checked }))
                  }
                  className="mt-1"
                />
                <label htmlFor="chk-ads" className="cursor-pointer">
                  <div className="font-medium">Publicidad</div>
                  <div className="text-sm text-slate-600">
                    Permite personalizar anuncios y medir campañas (Google Ads,
                    remarketing).
                  </div>
                </label>
              </div>

              {/* Funcionales */}
              <div className="flex items-start gap-4">
                <input
                  id="chk-func"
                  type="checkbox"
                  checked={consent.functional}
                  onChange={(e) =>
                    setConsent((s) => ({ ...s, functional: e.target.checked }))
                  }
                  className="mt-1"
                />
                <label htmlFor="chk-func" className="cursor-pointer">
                  <div className="font-medium">Funcionales</div>
                  <div className="text-sm text-slate-600">
                    Mejoran la experiencia (p. ej., recordar preferencias).
                  </div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t flex flex-wrap gap-2 justify-end">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg bg-slate-100"
              >
                Rechazar todas
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white"
              >
                Aceptar todas
              </button>
              <button
                onClick={saveSelection}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
              >
                Guardar selección
              </button>
            </div>
          </div>
        </div>
      ) : null,
    [openPrefs, consent]
  );

  return (
    <>
      {/* Botón flotante para reabrir gestión */}
      <button
        type="button"
        onClick={() => setOpenPrefs(true)}
        className="fixed bottom-6 right-6 z-[2147483647] px-3 py-2 rounded bg-white/90 text-sm text-slate-900 shadow"
        aria-label="Gestionar cookies"
      >
        Gestionar cookies
      </button>

      {Banner}
      {Modal}
    </>
  );
}
