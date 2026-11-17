// Estado de carga: tarjetas "esqueleto" con la misma forma que las de producto
export default function LoadingGrid({ count = 8 }) {
  return (
    <div role="status" aria-live="polite" className="mt-4">
      <span className="sr-only">Cargando productos…</span>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4" aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-2xl border border-pet-green/10 bg-white">
            <div className="aspect-square bg-pet-cream" />
            <div className="space-y-3 p-4">
              <div className="h-3 w-3/4 rounded-full bg-pet-cream" />
              <div className="h-3 w-1/3 rounded-full bg-pet-cream" />
              <div className="h-10 rounded-xl bg-pet-cream" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
