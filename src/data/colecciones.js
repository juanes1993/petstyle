export const COLECCIONES = [
  {
    id: "perros",
    nombre: "Perros",
    descripcion: "Suéteres, impermeables y pecheras para los paseos de cada día.",
    fondo: "#E6EFC2",
    arte: { mascota: "dog", prenda: "sueter", color: "#2E5E22", detalle: "#C9DB3F" },
  },
  {
    id: "gatos",
    nombre: "Gatos",
    descripcion: "Pijamas, capas y corbatines suaves, cómodos y con estilo.",
    fondo: "#DCEAF3",
    arte: { mascota: "cat", prenda: "pijama", color: "#5E9BC4", detalle: "#FAF6EA" },
  },
  {
    id: "accesorios",
    nombre: "Accesorios",
    descripcion: "Bandanas, collares y detalles para completar el look.",
    fondo: "#F6E3C4",
    arte: { mascota: "dog", prenda: "ninguna", accesorio: "bandana", color: "#BC401B", detalle: "#FAF6EA" },
  },
  {
    id: "ofertas",
    nombre: "Ofertas",
    descripcion: "Prendas seleccionadas con precio especial por tiempo limitado.",
    fondo: "#F3D7CC",
    arte: { mascota: "cat", prenda: "capa", color: "#BC401B", detalle: "#C9DB3F" },
  },
];

export const FILTROS = [{ id: "todos", nombre: "Todos" }, ...COLECCIONES.map(({ id, nombre }) => ({ id, nombre }))];
