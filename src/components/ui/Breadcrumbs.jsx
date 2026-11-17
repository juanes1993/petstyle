import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// crumbs: [{ label, to? }] — el último elemento es la página actual
export default function Breadcrumbs({ crumbs }) {
  const visibles = crumbs.filter((c) => c.label);
  return (
    <nav aria-label="Ruta de navegación" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-pet-ink/70">
      {visibles.map((c, i) => (
        <span key={`${c.label}-${i}`} className="flex items-center gap-1">
          {c.to && i < visibles.length - 1 ? (
            <Link to={c.to} className="hover:text-pet-leaf hover:underline">
              {c.label}
            </Link>
          ) : (
            <span aria-current={i === visibles.length - 1 ? "page" : undefined} className="font-semibold text-pet-ink">
              {c.label}
            </span>
          )}
          {i < visibles.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
        </span>
      ))}
    </nav>
  );
}
