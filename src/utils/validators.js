const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NOMBRE = /^\p{L}[\p{L}\s'.-]*$/u;

export const validarNombre = (valor) => {
  const t = valor.trim();
  if (!t) return "Ingresa tu nombre.";
  if (t.length < 3) return "El nombre debe tener al menos 3 caracteres.";
  if (!NOMBRE.test(t)) return "El nombre solo puede contener letras y espacios.";
  return "";
};

export const validarCorreo = (valor) => {
  const t = valor.trim();
  if (!t) return "Ingresa tu correo electrónico.";
  if (!EMAIL.test(t)) return "Ingresa un correo válido, por ejemplo nombre@correo.com.";
  return "";
};

// Celular peruano: 9 dígitos y empieza con 9. Es opcional: vacío es válido.
export const validarTelefonoOpcional = (valor) => {
  const digitos = valor.replace(/\s/g, "");
  if (!digitos) return "";
  if (!/^9\d{8}$/.test(digitos)) return "Ingresa un celular válido de 9 dígitos que empiece con 9.";
  return "";
};

export const validarMensaje = (valor, min = 10, max = 500) => {
  const t = valor.trim();
  if (!t) return "Escribe tu mensaje.";
  if (t.length < min) return `El mensaje debe tener al menos ${min} caracteres.`;
  if (t.length > max) return `El mensaje no puede superar los ${max} caracteres.`;
  return "";
};

export const requerido = (mensaje) => (valor) => (valor ? "" : mensaje);

// Da formato 999 888 777 mientras se escribe
export const formatearTelefono = (valor) => {
  const d = valor.replace(/\D/g, "").slice(0, 9);
  return d.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
};
