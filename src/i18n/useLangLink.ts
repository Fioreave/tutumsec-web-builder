import { useLanguage } from "./LanguageContext";

export function useLangLink() {
  const { language } = useLanguage();

  const NO_PREFIX = ["/blog"];
  const SUPPORTED = ["es", "en", "ca", "fr"];

  return (path: string) => {
    const clean = path ? (path.startsWith("/") ? path : `/${path}`) : "/";

    if (/^https?:\/\//i.test(clean)) return clean;

    if (NO_PREFIX.some((p) => clean === p || clean.startsWith(`${p}/`))) {
      return clean;
    }

    if (clean === "/") return `/${language}/`;

    const parts = clean.split("/").filter(Boolean);
    if (SUPPORTED.includes(parts[0])) parts.shift();
    const joined = parts.join("/");
    const needsSlash = clean.endsWith("/") || joined === "" ? "" : "/";

    return `/${language}/${joined}${needsSlash}`;
  };
}
