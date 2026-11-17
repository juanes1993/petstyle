import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../services/api.js";

const ProductsContext = createContext(null);

// Carga los productos desde la API una sola vez y los comparte con toda la app.
// Estados: "loading" (cargando) · "success" (listo) · "error" (falló la petición)
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0); // al aumentar, se repite la petición

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal })
      .then((list) => {
        setProducts(list);
        setStatus("success");
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // la petición se canceló a propósito
        setError(err);
        setStatus("error");
      });

    return () => controller.abort();
  }, [attempt]);

  const reload = useCallback(() => {
    setStatus("loading");
    setError(null);
    setAttempt((n) => n + 1);
  }, []);

  const value = useMemo(
    () => ({ products, loading: status === "loading", error, reload }),
    [products, status, error, reload]
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductsContext);
