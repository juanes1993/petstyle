import { sizeGuide } from "../../data/catalog.js";

// asPage: cuando es la página principal de la ruta usa <h1>; dentro del Home usa <h2>
export default function SizeGuide({ asPage = false }) {
  const Heading = asPage ? "h1" : "h2";
  return (
    <section id="tallas" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Heading className="font-display text-3xl font-bold text-pet-green">Guía de tallas</Heading>
        <p className="mt-1 text-sm text-pet-ink/70">Mide el cuello y el pecho de tu mascota y elige la talla ideal.</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-pet-green/15">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-pet-green text-white">
              <tr>
                <th className="px-4 py-3">Talla</th>
                <th className="px-4 py-3">Cuello</th>
                <th className="px-4 py-3">Pecho</th>
                <th className="px-4 py-3">Peso aprox.</th>
              </tr>
            </thead>
            <tbody>
              {sizeGuide.map((r, i) => (
                <tr key={r.size} className={i % 2 ? "bg-pet-cream" : ""}>
                  <td className="px-4 py-3 font-bold text-pet-green">{r.size}</td>
                  <td className="px-4 py-3">{r.neck}</td>
                  <td className="px-4 py-3">{r.chest}</td>
                  <td className="px-4 py-3">{r.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
