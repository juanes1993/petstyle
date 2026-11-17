import { PawPrint } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="bg-pet-cream">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 md:py-8">
        {/* Banner principal */}
        <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-pet-green to-pet-leaf p-8 text-white md:col-span-2 md:min-h-[420px] md:p-12">
          <PawPrint size={260} className="absolute -right-10 -top-6 text-white/10" aria-hidden="true" />
          <span className="mb-4 inline-block w-fit rounded-full bg-pet-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-pet-ink">
            Nueva colección
          </span>
          <h1 className="relative max-w-md font-display text-4xl font-bold leading-tight md:text-5xl">
            Cozy Otoño: moda con estilo para tu engreído
          </h1>
          <p className="relative mt-4 max-w-md text-white/90">
            Sudaderas, casacas y pijamas suaves para perros y gatos.
          </p>
          <div className="relative mt-7 flex flex-wrap gap-3">
            <Button to="/tienda/coleccion/cozy" variant="primary">Ver colección</Button>
            <Button to="/guia-de-tallas" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-pet-green">
              Guía de tallas
            </Button>
          </div>
        </div>

        {/* Banners secundarios */}
        <div className="grid gap-4">
          <div className="flex flex-col justify-center rounded-3xl bg-pet-gold p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-pet-green">Lanzamiento</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-pet-green">Rain Impermeables</h2>
            <p className="mt-1 text-sm text-pet-ink/80">Listos para los días de lluvia.</p>
            <Button to="/tienda/coleccion/rain" variant="secondary" className="mt-4 w-fit">Ver lanzamiento</Button>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-white p-7 ring-1 ring-pet-green/15">
            <p className="text-xs font-bold uppercase tracking-wide text-pet-leaf">Ofertas</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-pet-green">Hasta 20% dscto.</h2>
            <p className="mt-1 text-sm text-pet-ink/80">Precios especiales por tiempo limitado.</p>
            <Button to="/ofertas" variant="outline" className="mt-4 w-fit">Ver ofertas</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
