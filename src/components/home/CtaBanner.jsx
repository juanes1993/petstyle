import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "../ui/Button.jsx";
import { WHATSAPP_URL } from "../../data/catalog.js";
import { validarCorreo } from "../../utils/validators.js";

export default function CtaBanner() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  // El error solo se muestra después de que la persona tocó el campo o intentó enviar
  const error = touched ? validarCorreo(email) : "";

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (validarCorreo(email)) return; // hay un error: no se envía
    setSent(true); // simulación: aquí iría la llamada al servicio de correo
  };

  return (
    <section id="contacto" className="bg-pet-gold">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-pet-green md:text-4xl">¡No dejes a tu engreído sin sorpresas!</h2>
        <p className="mx-auto mt-3 max-w-xl text-pet-ink/80">
          Suscríbete para recibir ofertas exclusivas o escríbenos y te ayudamos a elegir la talla perfecta.
        </p>

        {sent ? (
          <p role="status" className="mt-6 rounded-xl bg-white/70 p-4 font-semibold text-pet-green">
            ¡Gracias por suscribirte! 🐾
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="mx-auto mt-6 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1 text-left">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="Ingresa tu email"
                  aria-label="Correo electrónico"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "error-newsletter" : undefined}
                  className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pet-green ${
                    error ? "border-red-600" : "border-transparent"
                  }`}
                />
                {error && (
                  <p id="error-newsletter" className="mt-1.5 rounded-md bg-white/80 px-2 py-1 text-xs font-semibold text-red-700">
                    {error}
                  </p>
                )}
              </div>
              <button type="submit" className="rounded-xl bg-pet-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pet-green/90">
                Suscribirme ahora
              </button>
            </div>
          </form>
        )}

        <div className="mt-5">
          <Button href={WHATSAPP_URL} variant="outline" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> Escríbenos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
