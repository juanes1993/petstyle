import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import { CONTACT } from "../data/catalog.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function ContactPage() {
  useDocumentTitle("Contacto");

  const datos = [
    { icono: Phone, etiqueta: "WhatsApp", valor: CONTACT.whatsappLabel, href: `https://wa.me/${CONTACT.whatsapp}` },
    { icono: Mail, etiqueta: "Correo", valor: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icono: Clock, etiqueta: "Horario de atención", valor: CONTACT.hours },
    { icono: MapPin, etiqueta: "Ubicación", valor: CONTACT.address },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumbs crumbs={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]} />
        <h1 className="font-display text-3xl font-bold text-pet-green md:text-4xl">Contacto</h1>
        <p className="mt-1 text-sm text-pet-ink/70">¿Dudas sobre una talla, un pedido o un producto? Escríbenos y te ayudamos.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <ul className="space-y-4 lg:col-span-2">
            {datos.map(({ icono: Icono, etiqueta, valor, href }) => (
              <li key={etiqueta} className="flex gap-4 rounded-2xl bg-pet-cream p-5">
                <Icono className="mt-0.5 shrink-0 text-pet-leaf" size={22} aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-pet-ink/60">{etiqueta}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-pet-green hover:underline">
                      {valor}
                    </a>
                  ) : (
                    <p className="font-semibold text-pet-green">{valor}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
