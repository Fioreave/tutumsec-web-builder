import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Si navegas a un ancla (#id), deja que el navegador salte ahí;
    // en cualquier otro caso, sube al principio.
    if (!hash) {
      // "instant" no es estándar, pero no rompe nada; usa "auto" si prefieres.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, search, hash]);

  return null;
}
