import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import PetArt from "../ui/PetArt";
import SectionTitle from "../ui/SectionTitle";
import { COLECCIONES } from "../../data/colecciones";

function Colecciones({ onElegir }) {
  return (
    <section id="colecciones" className="bg-arena py-20">
      <Container>
        <SectionTitle
          etiqueta="Colecciones"
          titulo="Encuentra el look ideal para tu mascota"
          descripcion="Elige una colección y mira solo los productos que buscas."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COLECCIONES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onElegir(c.id)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex h-44 items-end justify-center overflow-hidden" style={{ backgroundColor: c.fondo }}>
                <PetArt {...c.arte} titulo="" className="w-36 transition duration-300 group-hover:scale-105" />
              </span>
              <span className="block p-5">
                <span className="block font-display text-xl font-bold text-bosque">{c.nombre}</span>
                <span className="mt-1 block text-sm leading-relaxed text-suave">{c.descripcion}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-coral">
                  Ver productos
                  <ArrowRight size={16} strokeWidth={2} className="transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Colecciones;
