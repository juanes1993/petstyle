import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard.jsx";

// Sección con título y una fila de productos. Se reutiliza para cada colección y para las ofertas.
export default function CollectionSection({ id, title, subtitle, products, to = "/tienda", alt = false }) {
  return (
    <section id={id} className={alt ? "bg-pet-cream" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-pet-green">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-pet-ink/70">{subtitle}</p>}
          </div>
          <Link to={to} className="text-sm font-semibold text-pet-green underline-offset-4 hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
