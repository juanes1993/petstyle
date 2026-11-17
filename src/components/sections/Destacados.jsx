import { useMemo } from "react";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";
import SectionTitle from "../ui/SectionTitle";
import { FILTROS } from "../../data/colecciones";
import { PRODUCTOS } from "../../data/productos";

function Destacados({ filtro, onFiltro }) {
  const visibles = useMemo(
    () =>
      PRODUCTOS.filter((p) => {
        if (filtro === "todos") return true;
        if (filtro === "ofertas") return Boolean(p.precioAntes);
        return p.coleccion === filtro;
      }),
    [filtro]
  );

  return (
    <section id="destacados" className="bg-crema py-20">
      <Container>
        <SectionTitle etiqueta="Destacados" titulo="Productos que a todos les encantan" descripcion="Prendas y accesorios para lucir cada día." />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar productos por colección">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onFiltro(f.id)}
              aria-pressed={filtro === f.id}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition ${
                filtro === f.id ? "bg-bosque text-crema" : "bg-white text-bosque ring-1 ring-bosque/20 hover:bg-arena"
              }`}
            >
              {f.nombre}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-suave" aria-live="polite">
          {visibles.length} {visibles.length === 1 ? "producto" : "productos"}
        </p>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibles.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Destacados;
