import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import ProductImage from "../product/ProductImage.jsx";

export default function CartDrawer() {
  const { open, setOpen, lines, count, total, setQty, remove, clear, whatsappUrl } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} aria-hidden="true" />
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between bg-pet-green px-5 py-4 text-white">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold">
            <ShoppingBag size={20} className="text-pet-gold" /> Tu carrito ({count})
          </h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar carrito" className="rounded-full p-1 hover:bg-white/10">
            <X size={24} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="text-6xl" aria-hidden="true">🛒</span>
            <p className="font-semibold text-pet-green">Tu carrito está vacío</p>
            <Link
              to="/tienda"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-pet-gold px-6 py-3 text-sm font-semibold text-pet-ink hover:bg-pet-gold-dark"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-pet-green/10 overflow-y-auto px-5">
              {lines.map((l) => (
                <li key={l.key} className="flex gap-3 py-4">
                  <Link to={`/producto/${l.product.id}`} onClick={() => setOpen(false)}>
                    <ProductImage product={l.product} className="h-20 w-20 rounded-xl" emojiSize="text-3xl" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold leading-snug">{l.product.name}</p>
                    {l.size && <p className="text-xs text-pet-ink/60">Talla {l.size}</p>}
                    <p className="text-sm font-medium text-pet-green">S/ {l.product.price.toFixed(2)}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-lg border border-pet-green/20">
                        <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label="Quitar uno" className="p-1.5 hover:bg-pet-cream">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{l.qty}</span>
                        <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label="Agregar uno" className="p-1.5 hover:bg-pet-cream">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button type="button" onClick={() => remove(l.key)} aria-label={`Eliminar ${l.product.name}`} className="p-1.5 text-pet-ink/50 hover:text-pet-gold-dark">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-pet-green/10 p-5">
              <div className="mb-4 flex items-center justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-pet-green">S/ {total.toFixed(2)}</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                <MessageCircle size={18} /> Finalizar pedido por WhatsApp
              </a>
              <div className="mt-3 flex justify-between text-sm">
                <button type="button" onClick={() => setOpen(false)} className="font-medium text-pet-green underline-offset-4 hover:underline">
                  Seguir comprando
                </button>
                <button type="button" onClick={clear} className="text-pet-ink/60 underline-offset-4 hover:underline">
                  Vaciar carrito
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
