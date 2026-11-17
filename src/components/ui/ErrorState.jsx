import { RefreshCw } from "lucide-react";
import Button from "./Button.jsx";

// Estado de error: explica qué pasó y permite reintentar
export default function ErrorState({ error, onRetry }) {
  return (
    <div role="alert" className="mx-auto my-10 max-w-lg rounded-3xl border border-pet-green/15 bg-pet-cream/60 p-8 text-center">
      <p className="text-5xl" aria-hidden="true">
        🐾
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold text-pet-green">No pudimos cargar los productos</h2>
      <p className="mt-2 text-sm text-pet-ink/80">{error?.message || "Ocurrió un problema al conectar con el servidor."}</p>
      {import.meta.env.DEV && (
        <p className="mt-2 text-xs text-pet-ink/60">
          Si estás en tu computadora, revisa que la API esté encendida con <code className="rounded bg-white px-1.5 py-0.5">npm run api</code>.
        </p>
      )}
      {onRetry && (
        <Button variant="secondary" onClick={onRetry} className="mt-5">
          <RefreshCw size={16} aria-hidden="true" /> Reintentar
        </Button>
      )}
    </div>
  );
}
