import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Button from "./Button.jsx";
import ProductImage from "./ProductImage.jsx";
import { SIZES } from "../data/catalog.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const { name, price, oldPrice, soldOut, sized, id } = product;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-pet-green/10 bg-white shadow-sm transition hover:shadow-md">
      <a href={`#/producto/${id}`} className="relative block" aria-label={`Ver ${name}`}>
        <ProductImage product={product} className="aspect-square" />
        {oldPrice && !soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-pet-gold px-3 py-1 text-xs font-bold text-pet-ink">En oferta</span>
        )}
        {soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-pet-ink px-3 py-1 text-xs font-bold text-white">Agotado</span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug">
          <a href={`#/producto/${id}`} className="hover:text-pet-leaf">{name}</a>
        </h3>
        <p>
          <span className="font-semibold text-pet-green">S/ {price.toFixed(2)}</span>
          {oldPrice && <span className="ml-2 text-xs text-pet-ink/50 line-through">S/ {oldPrice.toFixed(2)}</span>}
        </p>

        {sized && !soldOut && (
          <label className="mt-2 flex items-center gap-2 text-xs text-pet-ink/70">
            Talla
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="flex-1 rounded-lg border border-pet-green/20 bg-white px-2 py-1 text-sm"
            >
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        )}

        <Button
          variant={soldOut ? "outline" : "secondary"}
          onClick={soldOut ? undefined : () => add(product, sized ? size : null)}
          disabled={soldOut}
          className={`mt-3 w-full ${soldOut ? "cursor-not-allowed opacity-50 hover:!bg-transparent hover:!text-pet-green" : ""}`}
        >
          <ShoppingBag size={16} /> {soldOut ? "Agotado" : "Agregar"}
        </Button>
      </div>
    </article>
  );
}
