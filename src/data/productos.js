// "coleccion" define el filtro; si tiene "precioAntes", también aparece en Ofertas.
// Los precios y nombres son de ejemplo: cámbialos por los reales de la tienda.
export const PRODUCTOS = [
  {
    id: 1,
    nombre: "Suéter tejido Bosque",
    coleccion: "perros",
    precio: 59.9,
    fondo: "#E6EFC2",
    arte: { mascota: "dog", prenda: "sueter", color: "#2E5E22", detalle: "#C9DB3F" },
  },
  {
    id: 2,
    nombre: "Impermeable Lluvia Lima",
    coleccion: "perros",
    precio: 79.9,
    fondo: "#F4F0C8",
    arte: { mascota: "dog", prenda: "impermeable", color: "#E3B52B", detalle: "#1B3A14", pelaje: "#C98A55", orejas: "#8F5A30" },
  },
  {
    id: 3,
    nombre: "Pechera suave Arena",
    coleccion: "perros",
    precio: 54.9,
    precioAntes: 69.9,
    fondo: "#EFE8D5",
    arte: { mascota: "dog", prenda: "pechera", color: "#BC401B", detalle: "#FAF6EA", pelaje: "#EAD3AE", orejas: "#B98B57" },
  },
  {
    id: 4,
    nombre: "Pijama Luna",
    coleccion: "gatos",
    precio: 49.9,
    fondo: "#DCEAF3",
    arte: { mascota: "cat", prenda: "pijama", color: "#5E9BC4", detalle: "#FAF6EA" },
  },
  {
    id: 5,
    nombre: "Capa ligera de paseo",
    coleccion: "gatos",
    precio: 44.9,
    precioAntes: 59.9,
    fondo: "#F3D7CC",
    arte: { mascota: "cat", prenda: "capa", color: "#BC401B", detalle: "#C9DB3F", pelaje: "#D9B58C" },
  },
  {
    id: 6,
    nombre: "Corbatín de gala",
    coleccion: "gatos",
    precio: 29.9,
    fondo: "#E4E0EE",
    arte: { mascota: "cat", prenda: "ninguna", accesorio: "corbatin", color: "#1B3A14", detalle: "#C9DB3F", pelaje: "#6F6A62" },
  },
  {
    id: 7,
    nombre: "Bandana Coral",
    coleccion: "accesorios",
    precio: 24.9,
    fondo: "#F6E3C4",
    arte: { mascota: "dog", prenda: "ninguna", accesorio: "bandana", color: "#BC401B", detalle: "#FAF6EA" },
  },
  {
    id: 8,
    nombre: "Collar artesanal Hojas",
    coleccion: "accesorios",
    precio: 34.9,
    precioAntes: 44.9,
    fondo: "#E6EFC2",
    arte: { mascota: "dog", prenda: "ninguna", accesorio: "collar", color: "#2E5E22", detalle: "#C9DB3F", pelaje: "#B98B57", orejas: "#7A4E2A" },
  },
];

export const NOMBRES_COLECCION = {
  perros: "Perros",
  gatos: "Gatos",
  accesorios: "Accesorios",
};
