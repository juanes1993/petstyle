import { useEffect, useState } from "react";

// Devuelve el id de la sección que está visible en la parte alta de la pantalla
export function useActiveSection(ids) {
  const [activa, setActiva] = useState(ids[0]);

  useEffect(() => {
    let pendiente = false;

    const calcular = () => {
      pendiente = false;
      const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (alFinal) {
        setActiva(ids[ids.length - 1]);
        return;
      }
      let actual = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) actual = id;
      }
      setActiva(actual);
    };

    const alHacerScroll = () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(calcular);
      }
    };

    window.addEventListener("scroll", alHacerScroll, { passive: true });
    window.addEventListener("resize", alHacerScroll);
    requestAnimationFrame(calcular);
    return () => {
      window.removeEventListener("scroll", alHacerScroll);
      window.removeEventListener("resize", alHacerScroll);
    };
  }, [ids]);

  return activa;
}
