import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { WHATSAPP_URL } from "../data/catalog.js";

export default function CtaBanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) setSent(true);
  };

  return (
    <section id="contacto" className="bg-pet-gold">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-pet-green md:text-4xl">
          ¡No dejes a tu engreído sin sorpresas!
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pet-ink/80">
          Suscríbete para recibir ofertas exclusivas o escríbenos y te ayudamos a elegir la talla perfecta.
        </p>

        {sent ? (
          <p className="mt-6 rounded-xl bg-white/70 p-4 font-semibold text-pet-green">¡Gracias por suscribirte! 🐾</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              aria-label="Correo electrónico"
              className="flex-1 rounded-xl border-0 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pet-green"
            />
            <button
              type="submit"
              className="rounded-xl bg-pet-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pet-green/90"
            >
              Suscribirme ahora
            </button>
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
