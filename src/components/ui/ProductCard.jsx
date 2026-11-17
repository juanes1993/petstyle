import PetArt from "./PetArt";
import { NOMBRES_COLECCION } from "../../data/productos";
import { formatearPrecio } from "../../utils/formato";

function ProductCard({ producto }) {
  const { nombre, coleccion, precio, precioAntes, fondo, arte } = producto;

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden" style={{ backgroundColor: fondo }}>
        <PetArt {...arte} titulo={nombre} className="w-[82%] transition duration-300 group-hover:scale-105" />
        {precioAntes && (
          <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">Oferta</span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-suave">{NOMBRES_COLECCION[coleccion]}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-tinta">{nombre}</h3>
        <p className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-bosque">{formatearPrecio(precio)}</span>
          {precioAntes && <span className="text-sm text-suave line-through">{formatearPrecio(precioAntes)}</span>}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
