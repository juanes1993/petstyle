import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, Minus, Plus, MessageCircle } from "lucide-react";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import ProductImage from "../components/product/ProductImage.jsx";
import ProductCard from "../components/product/ProductCard.jsx";
import Button from "../components/ui/Button.jsx";
import ErrorState from "../components/ui/ErrorState.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useProducts } from "../context/ProductsContext.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { menu, SIZES, CONTACT, COLLECTION_NAMES } from "../data/catalog.js";

export default function ProductPage() {
  const { id } = useParams();
  const { products, loading, error, reload } = useProducts();
  const product = products.find((p) => p.id === Number(id));
  useDocumentTitle(product ? product.name : "Producto");

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6" role="status" aria-live="polite">
        <span className="sr-only">Cargando producto…</span>
        <div className="grid animate-pulse gap-8 md:grid-cols-2" aria-hidden="true">
          <div className="aspect-square rounded-3xl bg-pet-cream" />
          <div className="space-y-4 pt-4">
            <div className="h-4 w-24 rounded-full bg-pet-cream" />
            <div className="h-9 w-3/4 rounded-full bg-pet-cream" />
            <div className="h-6 w-32 rounded-full bg-pet-cream" />
            <div className="h-20 rounded-2xl bg-pet-cream" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ErrorState error={error} onRetry={reload} />
      </section>
    );
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-5xl" aria-hidden="true">
          🐾
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-pet-green">Producto no encontrado</h1>
        <Link to="/tienda" className="mt-4 inline-block font-semibold underline">
          Volver a la tienda
        </Link>
      </section>
    );
  }

  // key: al pasar de un producto a otro se reinician la talla y la cantidad
  return <ProductDetail key={product.id} product={product} products={products} />;
}

function ProductDetail({ product, products }) {
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  const petItem = menu.find((m) => m.slug === product.pet);
  const subItem = petItem?.groups.flatMap((g) => g.links).find((l) => l.slug === product.cat);
  const related = products.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, 4);
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hola PetStyle, quiero consultar por: ${product.name}${product.sized ? ` (Talla ${size})` : ""}`
  )}`;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", to: "/" },
              { label: petItem?.label, to: petItem?.to },
              { label: subItem?.label, to: subItem?.to },
              { label: product.name },
            ]}
          />
          <div className="grid gap-8 md:grid-cols-2">
            <ProductImage product={product} className="aspect-square rounded-3xl" emojiSize="text-9xl" />

            <div>
              {product.collection && (
                <Link to={`/tienda/coleccion/${product.collection}`} className="mb-2 inline-block rounded-full bg-pet-cream px-3 py-1 text-xs font-semibold text-pet-leaf">
                  Colección {COLLECTION_NAMES[product.collection]}
                </Link>
              )}
              <h1 className="font-display text-3xl font-bold text-pet-green md:text-4xl">{product.name}</h1>
              <p className="mt-3 text-2xl">
                <span className="font-bold text-pet-green">S/ {product.price.toFixed(2)}</span>
                {product.oldPrice && <span className="ml-3 text-base text-pet-ink/50 line-through">S/ {product.oldPrice.toFixed(2)}</span>}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-pet-ink/80">
                Producto de la línea PetStyle para {product.pet}. Materiales suaves, resistentes y fáciles de lavar, pensados para la comodidad de tu
                mascota.{product.sized && " Consulta la guía de tallas para elegir la medida correcta."}
              </p>

              {product.sized && !product.soldOut && (
                <div className="mt-6">
                  <p className="mb-2 text-sm font-semibold">Talla</p>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        aria-pressed={size === s}
                        className={`h-11 w-11 rounded-xl border-2 text-sm font-semibold ${size === s ? "border-pet-green bg-pet-green text-white" : "border-pet-green/20 hover:border-pet-green"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <Link to="/guia-de-tallas" className="mt-2 inline-block text-xs text-pet-leaf underline">
                    Ver guía de tallas
                  </Link>
                </div>
              )}

              {product.soldOut ? (
                <p className="mt-6 rounded-xl bg-pet-cream p-4 text-sm font-semibold">Producto agotado por ahora. Escríbenos para avisarte cuando vuelva.</p>
              ) : (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center rounded-xl border border-pet-green/20">
                    <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Menos" className="p-3 hover:bg-pet-cream">
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-semibold">{qty}</span>
                    <button type="button" onClick={() => setQty(qty + 1)} aria-label="Más" className="p-3 hover:bg-pet-cream">
                      <Plus size={16} />
                    </button>
                  </div>
                  <Button variant="secondary" onClick={() => add(product, product.sized ? size : null, qty)} className="flex-1 sm:flex-none">
                    <ShoppingBag size={16} /> Agregar al carrito
                  </Button>
                </div>
              )}

              <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pet-green underline-offset-4 hover:underline">
                <MessageCircle size={16} /> Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-pet-cream">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="mb-6 font-display text-2xl font-bold text-pet-green">También te puede gustar</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
