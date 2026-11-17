import { Heart, Leaf, Ruler, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const BENEFICIOS = [
  { icono: Ruler, titulo: "Tallas para cada mascota", texto: "Una guía de tallas clara para elegir sin errores." },
  { icono: Leaf, titulo: "Telas suaves y cuidadas", texto: "Materiales cómodos pensados para el uso diario." },
  { icono: Sparkles, titulo: "Diseños con personalidad", texto: "Colecciones de temporada con estilo propio." },
  { icono: Heart, titulo: "Hecho con cariño", texto: "Atención cercana para ayudarte a elegir mejor." },
];

function Beneficios() {
  return (
    <section className="en-oscuro bg-bosque py-20 text-crema">
      <Container>
        <SectionTitle etiqueta="Por qué PetStyle" titulo="Pensado para ellos, diseñado para ti" oscuro />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map(({ icono: Icono, titulo, texto }) => (
            <li key={titulo}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lima text-profundo">
                <Icono size={28} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{titulo}</h3>
              <p className="mt-2 leading-relaxed text-crema/80">{texto}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Beneficios;
