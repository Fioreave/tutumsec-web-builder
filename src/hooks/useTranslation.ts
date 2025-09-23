import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

type Language = "es" | "ca" | "en" | "fr";
type Dict = Record<string, string>;

const SUPPORTED: Language[] = ["es", "ca", "en", "fr"];

async function loadDict(locale: Language): Promise<Dict> {
  // importa solo el diccionario del idioma actual
  const mod = await import(`../locales/${locale}/common.json`);
  return mod.default || mod;
}

function detectBrowserLanguage(): Language {
  const l = navigator.language.toLowerCase();
  if (l.startsWith("ca")) return "ca";
  if (l.startsWith("en")) return "en";
  if (l.startsWith("fr")) return "fr";
  return "es";
}

export function useTranslation() {
  const params = useParams(); // lee :locale de la URL
  const navigate = useNavigate();
  const location = useLocation();
  const urlLocale = (params.locale as Language) || null;

  const [locale, setLocale] = useState<Language>(
    (urlLocale && SUPPORTED.includes(urlLocale) ? urlLocale : null) ||
      (localStorage.getItem("locale") as Language) ||
      detectBrowserLanguage()
  );
  const [dict, setDict] = useState<Dict>({});

  // Cargar diccionario cuando cambia el idioma
  useEffect(() => {
    loadDict(locale).then(setDict);
    localStorage.setItem("locale", locale);
  }, [locale]);

  // Cambiar idioma actual y sincronizar URL /:locale/...
  const changeLanguage = (next: Language) => {
    setLocale(next);
    const base = location.pathname.replace(/^\/(es|en|ca|fr)/, "");
    navigate(`/${next}${base}${location.search}`, { replace: true });
  };

  const t = useMemo(() => (key: string) => dict[key] ?? key, [dict]);

  return {
    t,
    currentLanguage: locale,
    changeLanguage,
    availableLanguages: SUPPORTED,
  };
}
