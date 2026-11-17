import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ crumbs }) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-pet-ink/70">
      {crumbs.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1">
          {c.href && i < crumbs.length - 1 ? (
            <a href={c.href} className="hover:text-pet-leaf hover:underline">{c.label}</a>
          ) : (
            <span className="font-semibold text-pet-ink">{c.label}</span>
          )}
          {i < crumbs.length - 1 && <ChevronRight size={14} />}
        </span>
      ))}
    </nav>
  );
}
