import { Heart, Shirt, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import PetArt from "../ui/PetArt";
import SectionTitle from "../ui/SectionTitle";

const VALORES = [
  { icono: Shirt, texto: "Comodidad" },
  { icono: Sparkles, texto: "Estilo" },
  { icono: Heart, texto: "Cuidado" },
];

function Nosotros() {
  return (
    <section id="nosotros" className="bg-crema py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionTitle etiqueta="Nosotros" titulo="Porque las mascotas también merecen lucir bien" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-suave">
            PetStyle nace de una idea simple: tu mascota es parte de la familia y debe sentirse cómoda y verse genial. Creamos ropa y accesorios para
            perros y gatos con diseños cuidados, colores alegres y materiales suaves.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {VALORES.map(({ icono: Icono, texto }) => (
              <li key={texto} className="flex items-center gap-2 rounded-full bg-arena px-5 py-2.5 font-bold text-bosque">
                <Icono size={18} strokeWidth={1.75} aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 mx-auto flex w-full max-w-sm items-end justify-center overflow-hidden rounded-[2.5rem] bg-lima/60 px-6 pt-10 lg:order-2 lg:max-w-md">
          <PetArt mascota="dog" prenda="impermeable" color="#E3B52B" detalle="#1B3A14" pelaje="#C98A55" orejas="#8F5A30" className="w-full" titulo="Perro con impermeable amarillo" />
        </div>
      </Container>
    </section>
  );
}

export default Nosotros;
