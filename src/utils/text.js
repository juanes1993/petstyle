// Quita tildes y mayúsculas para comparar textos (búsqueda "polo" encuentra "Polo", "pólo", etc.)
export const normalizar = (texto) =>
  String(texto)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
