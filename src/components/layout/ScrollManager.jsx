import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router no mueve el scroll solo: al cambiar de página sube al inicio,
// y si la dirección trae un ancla (/#nosotros) baja hasta esa sección.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
