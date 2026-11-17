import { useState } from "react";
import { MessageCircle } from "lucide-react";
import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import { CONTACT } from "../../data/catalog.js";
import { useForm } from "../../hooks/useForm.js";
import { formatearTelefono, requerido, validarCorreo, validarMensaje, validarNombre, validarTelefonoOpcional } from "../../utils/validators.js";

const MAX_MENSAJE = 500;
const ASUNTOS = ["Consulta de tallas", "Estado de mi pedido", "Información de un producto", "Cambios y devoluciones", "Otro"];

const REGLAS = {
  nombre: validarNombre,
  correo: validarCorreo,
  telefono: validarTelefonoOpcional,
  asunto: requerido("Elige un asunto."),
  mensaje: (v) => validarMensaje(v, 10, MAX_MENSAJE),
};
const INICIAL = { nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" };

// Formulario de contacto con validación en cada campo (onChange, onBlur y onSubmit)
export default function ContactForm() {
  const form = useForm(INICIAL, REGLAS, { telefono: formatearTelefono });
  const [enviado, setEnviado] = useState(null);

  const enviar = (e) => {
    e.preventDefault();
    form.touchAll(); // muestra todos los errores pendientes
    if (!form.isValid) return;
    // Simulación: aquí iría la llamada a un servicio de correo o a tu backend
    setEnviado({ ...form.values });
    form.reset();
  };

  if (enviado) {
    const texto = `Hola PetStyle, soy ${enviado.nombre.trim()}. ${enviado.asunto}: ${enviado.mensaje.trim()}`;
    return (
      <div role="status" className="rounded-3xl bg-pet-cream p-8 text-center">
        <p className="text-5xl" aria-hidden="true">
          🐾
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-pet-green">¡Gracias, {enviado.nombre.trim().split(" ")[0]}!</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-pet-ink/80">
          Recibimos tu mensaje y te responderemos a {enviado.correo.trim()}. Si es urgente, también puedes escribirnos por WhatsApp.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(texto)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            <MessageCircle size={18} /> Continuar por WhatsApp
          </a>
          <Button variant="outline" onClick={() => setEnviado(null)}>
            Enviar otro mensaje
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="grid gap-5 rounded-3xl border border-pet-green/10 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <FormField
        className="sm:col-span-2"
        label="Nombre completo"
        name="nombre"
        autoComplete="name"
        placeholder="Ej. María Pérez"
        value={form.values.nombre}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errorVisible("nombre")}
      />
      <FormField
        label="Correo electrónico"
        name="correo"
        type="email"
        autoComplete="email"
        placeholder="nombre@correo.com"
        value={form.values.correo}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errorVisible("correo")}
      />
      <FormField
        label="Celular (opcional)"
        name="telefono"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder="999 888 777"
        value={form.values.telefono}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errorVisible("telefono")}
      />
      <FormField
        as="select"
        className="sm:col-span-2"
        label="Asunto"
        name="asunto"
        value={form.values.asunto}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errorVisible("asunto")}
      >
        <option value="">Selecciona un asunto…</option>
        {ASUNTOS.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </FormField>
      <FormField
        as="textarea"
        className="sm:col-span-2"
        label="Mensaje"
        name="mensaje"
        rows={5}
        maxLength={MAX_MENSAJE}
        placeholder="Cuéntanos en qué podemos ayudarte…"
        value={form.values.mensaje}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errorVisible("mensaje")}
        hint={`${form.values.mensaje.length}/${MAX_MENSAJE} caracteres`}
      />
      <div className="sm:col-span-2">
        <Button variant="secondary" type="submit" className="w-full sm:w-auto">
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
}
