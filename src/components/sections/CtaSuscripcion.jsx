import { useState } from "react";
import { Check, Mail } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { validarCorreo } from "../../utils/formato";

function CtaSuscripcion() {
  const [correo, setCorreo] = useState("");
  const [tocado, setTocado] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const error = tocado ? validarCorreo(correo) : "";

  const enviar = (e) => {
    e.preventDefault();
    setTocado(true);
    if (validarCorreo(correo)) return;
    // Simulación: aquí se conectaría con el servicio de correo
    setEnviado(true);
  };

  const reiniciar = () => {
    setCorreo("");
    setTocado(false);
    setEnviado(false);
  };

  return (
    <section id="suscripcion" className="bg-arena py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-lima px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-3xl font-bold text-profundo sm:text-4xl">Únete a la familia PetStyle</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-profundo/80">Recibe novedades, nuevas colecciones y ofertas directamente en tu correo.</p>

          {enviado ? (
            <div role="status" className="mt-8 flex flex-col items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-profundo text-lima">
                <Check size={26} strokeWidth={2.25} aria-hidden="true" />
              </span>
              <p className="text-lg font-bold text-profundo">¡Listo! Te escribiremos a {correo.trim()}</p>
              <button type="button" onClick={reiniciar} className="cursor-pointer text-sm font-bold text-profundo underline underline-offset-4">
                Usar otro correo
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} noValidate className="mx-auto mt-8 max-w-xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="flex-1 text-left">
                  <label htmlFor="correo-suscripcion" className="sr-only">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail size={20} strokeWidth={1.75} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-suave" aria-hidden="true" />
                    <input
                      id="correo-suscripcion"
                      type="email"
                      autoComplete="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      onBlur={() => setTocado(true)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "error-correo" : undefined}
                      className={`h-12 w-full rounded-full border-2 bg-white pl-12 pr-4 text-base text-tinta placeholder:text-suave/70 ${
                        error ? "border-coral" : "border-transparent"
                      }`}
                    />
                  </div>
                  {error && (
                    <p id="error-correo" className="mt-2 pl-4 text-sm font-bold text-coral">
                      {error}
                    </p>
                  )}
                </div>
                <Button type="submit" variante="primario" className="sm:w-auto">
                  Suscribirme
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

export default CtaSuscripcion;
