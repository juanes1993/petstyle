import { useEffect } from "react";

// Cambia el título de la pestaña según la página que se está viendo
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | PetStyle` : "PetStyle – Moda para Mascotas";
  }, [title]);
}
