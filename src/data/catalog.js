// ===== Datos de contacto (cámbialos por los reales) =====
export const CONTACT = {
  whatsapp: "51927783533",
  whatsappLabel: "+51 927 783 533",
  email: "petstyle@gmail.com",
  hours: "Lunes a viernes de 09:00 a 18:00",
  address: "Chiclayo",
};
export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=Hola%20PetStyle%2C%20quiero%20hacer%20una%20consulta`;

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ===== Menú principal (cada enlace lleva a su propia página) =====
const petMenu = (label, groups) => {
  const slug = slugify(label);
  return {
    label,
    slug,
    to: `/categoria/${slug}`,
    groups: groups.map((g) => ({
      title: g.title,
      links: g.links.map((l) => ({ label: l, slug: slugify(l), to: `/categoria/${slug}/${slugify(l)}` })),
    })),
  };
};

export const menu = [
  petMenu("Perros", [
    { title: "Ropa", links: ["Bandanas", "Botas", "Casacas", "Pijamas", "Polos", "Sudaderas y abrigos"] },
    { title: "Paseo", links: ["Collares", "Correas", "Pecheras y arneses", "Placas de identificación"] },
    { title: "Más", links: ["Juguetes", "Camas", "Cuidado e higiene", "Bowls y bandejas"] },
  ]),
  petMenu("Gatos", [
    { title: "Ropa", links: ["Polos", "Pijamas", "Casacas"] },
    { title: "Accesorios", links: ["Collares", "Arnés + correa", "Placas de identificación"] },
    { title: "Hogar", links: ["Camas", "Rascadores", "Transportadores"] },
  ]),
  {
    label: "Colecciones",
    to: "/tienda",
    groups: [
      {
        title: "Temporada",
        links: [
          { label: "Cozy Otoño", to: "/tienda/coleccion/cozy" },
          { label: "Rain Impermeables", to: "/tienda/coleccion/rain" },
          { label: "Paseo & Aventura", to: "/tienda/coleccion/paseo" },
        ],
      },
    ],
  },
  { label: "Ofertas", to: "/ofertas" },
  { label: "Guía de tallas", to: "/guia-de-tallas" },
  { label: "Contacto", to: "/contacto" },
];

export const collections = [
  { id: "cozy", title: "Colección Cozy Otoño", subtitle: "Abrigos y sudaderas suaves para los días frescos." },
  { id: "paseo", title: "Paseo & Aventura", subtitle: "Collares, correas y pecheras resistentes y cómodas." },
  { id: "rain", title: "Rain Impermeables", subtitle: "Ultra resistentes al agua para los días de lluvia." },
];

// ===== Nombres de colecciones (los productos vienen de la API: public/db.json) =====
export const COLLECTION_NAMES = {
  cozy: "Cozy Otoño",
  rain: "Rain",
  paseo: "Paseo & Aventura",
};

export const sizeGuide = [
  { size: "XS", neck: "20–28 cm", chest: "30–40 cm", weight: "hasta 3 kg" },
  { size: "S", neck: "28–36 cm", chest: "38–48 cm", weight: "3–7 kg" },
  { size: "M", neck: "34–44 cm", chest: "46–60 cm", weight: "7–14 kg" },
  { size: "L", neck: "42–54 cm", chest: "58–76 cm", weight: "14–25 kg" },
  { size: "XL", neck: "50–64 cm", chest: "74–96 cm", weight: "25–40 kg" },
];

export const benefits = [
  { title: "Envíos a todo el país", text: "Recibe tu pedido en la puerta de tu casa." },
  { title: "Tallas para cada mascota", text: "Usa nuestra guía y elige sin equivocarte." },
  { title: "Telas suaves y seguras", text: "Materiales cómodos que cuidan su piel." },
  { title: "Compra 100% segura", text: "Pagos confiables y atención por WhatsApp." },
];
