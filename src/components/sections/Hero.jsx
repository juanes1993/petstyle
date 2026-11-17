import { PawPrint, Ruler, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import PetArt from "../ui/PetArt";

const PUNTOS = [
  { icono: PawPrint, texto: "Para perros y gatos" },
  { icono: Ruler, texto: "Tallas para cada mascota" },
  { icono: Sparkles, texto: "Diseños con personalidad" },
];

function Hero({ onElegir }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-crema">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-lima/60 px-4 py-1.5 text-sm font-bold text-profundo">
            <PawPrint size={16} strokeWidth={1.75} aria-hidden="true" />
            Moda para mascotas
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-bosque sm:text-5xl lg:text-6xl">
            Estilo y comodidad para tu <span className="italic text-coral">mejor amigo</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-suave">
            Ropa y accesorios para perros y gatos, pensados para que se vean increíbles y se sientan cómodos todo el día.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#colecciones">Ver colecciones</Button>
            <Button variante="secundario" onClick={() => onElegir("ofertas")}>
              Ver ofertas
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-bosque/15 pt-6">
            {PUNTOS.map(({ icono: Icono, texto }) => (
              <li key={texto} className="flex items-center gap-2 text-sm font-medium text-suave">
                <Icono size={18} strokeWidth={1.75} className="text-bosque" aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-x-6 top-6 bottom-0 rounded-full bg-lima/70 lg:inset-x-12" aria-hidden="true" />
          <PawPrint size={46} strokeWidth={1.5} className="absolute left-2 top-4 rotate-[-18deg] text-bosque/25" aria-hidden="true" />
          <PawPrint size={34} strokeWidth={1.5} className="absolute right-4 top-24 rotate-[16deg] text-coral/40" aria-hidden="true" />
          <div className="relative flex items-end justify-center gap-1 px-4 pt-10 sm:gap-4">
            <PetArt mascota="dog" prenda="sueter" color="#2E5E22" detalle="#C9DB3F" accesorio="ninguno" className="w-[48%]" titulo="Perro con suéter verde" />
            <PetArt mascota="cat" prenda="pijama" color="#5E9BC4" detalle="#FAF6EA" accesorio="corbatin" className="w-[44%]" titulo="Gato con pijama azul" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
