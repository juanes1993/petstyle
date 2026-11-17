// Archivo que "llama" a todas las imágenes de src/assets/images (cualquier subcarpeta).
// Cada producto usa el campo `image`. El nombre del archivo se compara SIN importar
// mayúsculas, tildes ni espacios: "Casaca Invierno.png" funciona igual que "casaca-invierno.jpg".
// Las fotos (.jpg/.png/.webp) tienen prioridad sobre los .svg de muestra.
const modules = import.meta.glob("../assets/images/**/*.{svg,avif,webp,png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const rank = (path) => (path.endsWith(".svg") ? 0 : 1); // svg primero, fotos reales después (las pisan)
const map = {};
Object.entries(modules)
  .sort(([a], [b]) => rank(a) - rank(b))
  .forEach(([path, url]) => {
    const file = path.split("/").pop().replace(/\.[^.]+$/, "");
    map[slugify(file)] = url;
  });

export const getImage = (name) => map[slugify(name)] || null;
