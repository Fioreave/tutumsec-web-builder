import { useEffect, useMemo, useRef, useState } from "react";
// 👇 importa el mismo NS que usa loadNamespace
import { useLanguage, loadNamespace, type NS } from "./LanguageContext";

type Dict = Record<string, string>;

/** Reemplaza {{var}} en cadenas */
function interpolate(str: string, vars?: Record<string, string | number>) {
  if (!vars) return str;
  return str.replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, k: string) =>
    vars[k] !== undefined ? String(vars[k]) : `{{${k}}}`
  );
}

export function useTranslations(namespaces: NS[] | NS = "common" as NS) {
  const nsList: NS[] = Array.isArray(namespaces) ? namespaces : [namespaces];
  const { language } = useLanguage();

  const [dict, setDict] = useState<Dict>({});
  const [readyKey, setReadyKey] = useState<string>("");
  const pending = useRef<string>("");

  useEffect(() => {
    let cancelled = false;
    const nsKey = `${language}::${nsList.slice().sort().join("|")}`;
    pending.current = nsKey;

    (async () => {
      // Carga todos los namespaces y hace merge plano (último gana)
      const parts = await Promise.all(
        nsList.map((ns) => loadNamespace(language, ns)) // <- ns es del mismo tipo NS
      );
      const merged = Object.assign({}, ...parts);
      if (!cancelled && pending.current === nsKey) {
        setDict(merged);
        setReadyKey(nsKey);
      }
    })();

    return () => {
      cancelled = true;
    };
    // deps estables aunque cambie el orden
  }, [language, JSON.stringify(nsList)]);

  /**
   * t("clave", "fallback")
   * t("clave", { name: "Ana" })
   * t("clave", { name: "Ana" }, "fallback")
   */
  const t = useMemo(() => {
    return (
      key: string,
      varsOrFallback?: Record<string, string | number> | string,
      maybeFallback?: string
    ) => {
      // si todavía no está listo el pack exacto, devolvemos fallback/clave
      if (!readyKey.startsWith(`${language}::`)) {
        if (typeof varsOrFallback === "string") return varsOrFallback || key;
        return maybeFallback || key;
      }

      const raw = dict[key];
      if (raw === undefined) {
        if (typeof varsOrFallback === "string") return varsOrFallback || key;
        return maybeFallback || key;
      }

      if (typeof varsOrFallback === "object" && varsOrFallback !== null) {
        return interpolate(
          raw,
          varsOrFallback as Record<string, string | number>
        );
      }

      return raw;
    };
  }, [dict, readyKey, language]);

  return { t };
}
