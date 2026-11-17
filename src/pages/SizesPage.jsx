import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import SizeGuide from "../components/home/SizeGuide.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const CONSEJOS = [
  { titulo: "Cuello", texto: "Mide la base del cuello, donde apoya el collar, y deja pasar dos dedos entre la cinta y la piel." },
  { titulo: "Pecho", texto: "Rodea la parte más ancha del pecho, justo detrás de las patas delanteras." },
  { titulo: "Entre dos tallas", texto: "Si tu mascota queda entre dos medidas, elige la más grande para que esté cómoda." },
];

export default function SizesPage() {
  useDocumentTitle("Guía de tallas");

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <Breadcrumbs crumbs={[{ label: "Inicio", to: "/" }, { label: "Guía de tallas" }]} />
      </div>
      <SizeGuide asPage />
      <section className="bg-pet-cream">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3">
          {CONSEJOS.map((c) => (
            <div key={c.titulo}>
              <h2 className="font-display text-xl font-bold text-pet-green">{c.titulo}</h2>
              <p className="mt-2 text-sm leading-relaxed text-pet-ink/80">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
