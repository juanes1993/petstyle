import { useEffect, useState } from "react";

// Rutas (sin librerías externas):
//  #/                       -> Home
//  #/categoria/perros       -> todos los productos de perros
//  #/categoria/perros/polos -> subcategoría
//  #/coleccion/cozy         -> colección
//  #/ofertas  #/tienda  #/buscar
//  #/producto/12            -> detalle de producto
export function parseRoute(hash) {
  if (!hash.startsWith("#/")) return { name: "home", params: {} };
  const [seg, a, b] = hash.slice(2).split("/").map(decodeURIComponent);
  switch (seg) {
    case "categoria":
      return { name: "category", params: { pet: a, sub: b } };
    case "coleccion":
      return { name: "collection", params: { id: a } };
    case "ofertas":
      return { name: "offers", params: {} };
    case "tienda":
      return { name: "all", params: {} };
    case "buscar":
      return { name: "search", params: {} };
    case "producto":
      return { name: "product", params: { id: Number(a) } };
    default:
      return { name: "home", params: {} };
  }
}

export function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return { hash, ...parseRoute(hash) };
}
