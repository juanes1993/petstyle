import { CheckCircle2 } from "lucide-react";
import { benefits } from "../../data/catalog.js";

export default function Benefits() {
  return (
    <section id="nosotros" className="bg-pet-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-pet-leaf" size={26} />
            <div>
              <h3 className="font-semibold text-pet-green">{b.title}</h3>
              <p className="mt-1 text-sm text-pet-ink/80">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
