import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

// Página de error 404: se muestra cuando la dirección no coincide con ninguna ruta
export default function NotFoundPage() {
  const { pathname } = useLocation();
  useDocumentTitle("Página no encontrada");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <p className="text-7xl" aria-hidden="true">
          🐾
        </p>
        <p className="mt-4 font-display text-6xl font-bold text-pet-gold-dark">404</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-pet-green">¡Ups! Esta página se escapó</h1>
        <p className="mt-3 text-pet-ink/70">
          No encontramos <span className="break-all font-semibold">{pathname}</span>. Puede que el enlace esté mal escrito o que la página ya no exista.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Ir al inicio</Button>
          <Button to="/tienda" variant="outline">
            Ver la tienda
          </Button>
        </div>
      </div>
    </section>
  );
}
