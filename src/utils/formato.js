const moneda = new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" });

export const formatearPrecio = (valor) => moneda.format(valor);

export const validarCorreo = (valor) => {
  const t = valor.trim();
  if (!t) return "Ingresa tu correo electrónico.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t)) return "Ingresa un correo válido, por ejemplo nombre@correo.com.";
  return "";
};
