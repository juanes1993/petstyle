import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTACT } from "../data/catalog.js";
import { useProducts } from "./ProductsContext.jsx";

const CartContext = createContext(null);
const STORAGE_KEY = "petstyle-cart";

export function CartProvider({ children }) {
  const { products } = useProducts();
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  // Guarda el carrito para que no se pierda al recargar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* sin almacenamiento disponible */
    }
  }, [items]);

  const add = (product, size = null, qty = 1) => {
    const key = `${product.id}-${size || "unica"}`;
    setItems((prev) => {
      const found = prev.find((i) => i.key === key);
      return found
        ? prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
        : [...prev, { key, id: product.id, size, qty }];
    });
    setOpen(true);
  };

  const setQty = (key, qty) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i))
    );
  const remove = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const clear = () => setItems([]);

  const value = useMemo(() => {
    // Las líneas combinan lo guardado en el carrito con los datos que llegaron de la API
    const lines = items
      .map((i) => ({ ...i, product: products.find((p) => p.id === i.id) }))
      .filter((l) => l.product);
    const count = items.reduce((n, i) => n + i.qty, 0);
    const total = lines.reduce((s, l) => s + l.qty * l.product.price, 0);

    const text =
      "Hola PetStyle, quiero hacer este pedido:%0A" +
      lines
        .map((l) =>
          encodeURIComponent(
            `• ${l.qty} x ${l.product.name}${l.size ? ` (Talla ${l.size})` : ""} – S/ ${(l.qty * l.product.price).toFixed(2)}`
          )
        )
        .join("%0A") +
      "%0A" +
      encodeURIComponent(`Total: S/ ${total.toFixed(2)}`);
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${text}`;

    return { lines, count, total, whatsappUrl, open, setOpen, add, setQty, remove, clear };
  }, [items, products, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
