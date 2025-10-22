import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Language = "es" | "ca" | "en" | "fr";
export const SUPPORTED: readonly Language[] = ["es", "ca", "en", "fr"] as const;

type Dict = Record<string, string>;
export type NS =
  | "common"
  | "home"
  | "ciso"
  | "audit"
  | "transformacion"
  | "formacion"
  | "oficina"
  | "deteccion"
  | "prevencion"
  | "respuesta"
  | "recuperacion"
  | "finanzas"
  | "salud"
  | "industrial"
  | "tecnologia"
  | "sectorpublico"
  | "pymes"
  | "historia"
  | "equipo"
  | "contacto"
  | "cookies"
  | "cookiebanner"
  | "legal"
  | "privacidad";

type CacheKey = `${Language}:${NS}`;
const nsCache = new Map<CacheKey, Dict>();

function getLanguageFromPath(pathname: string): Language {
  const seg = pathname.split("/").filter(Boolean)[0] as Language | undefined;
  if (seg && (SUPPORTED as readonly string[]).includes(seg))
    return seg as Language;

  // si no hay locale en la url, intenta localStorage o navegador
  const ls = (localStorage.getItem("locale") as Language) || null;
  if (ls && (SUPPORTED as readonly string[]).includes(ls)) return ls;

  const nav = (
    typeof navigator !== "undefined" ? navigator.language : "es"
  ).toLowerCase();
  if (nav.startsWith("ca")) return "ca";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("fr")) return "fr";
  return "es";
}

type Ctx = {
  language: Language;
  changeLanguage: (lng: Language) => void;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // idioma inicial derivado de la URL
  const [language, setLanguage] = useState<Language>(() =>
    getLanguageFromPath(location.pathname)
  );

  // si el usuario navega y cambia el primer segmento (:lang), sincroniza el estado
  useEffect(() => {
    const fromPath = getLanguageFromPath(location.pathname);
    if (fromPath !== language) {
      setLanguage(fromPath); // 👈 NO navegamos aquí para evitar bucles
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // persiste preferencia
  useEffect(() => {
    localStorage.setItem("locale", language);
  }, [language]);

  // cambia de idioma manteniendo la ruta actual (sin el primer segmento)
  const changeLanguage = (next: Language) => {
    if (next === language) return;

    const parts = location.pathname.split("/").filter(Boolean);
    // si el primer segmento es un lang soportado, lo quitamos
    if ((SUPPORTED as readonly string[]).includes(parts[0] ?? "")) {
      parts.shift();
    }
    const base = parts.length ? `/${parts.join("/")}` : "/";
    navigate(`/${next}${base}${location.search}`, { replace: true });
    setLanguage(next);
  };

  const value = useMemo(() => ({ language, changeLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

// Loader de namespaces con caché
export async function loadNamespace(lang: Language, ns: NS): Promise<Dict> {
  const key: CacheKey = `${lang}:${ns}`;
  if (nsCache.has(key)) return nsCache.get(key)!;

  const mod = await import(`../locales/${lang}/${ns}.json`);
  const dict = (mod as any).default ?? mod;
  nsCache.set(key, dict as Dict);
  return dict as Dict;
}
