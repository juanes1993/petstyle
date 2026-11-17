import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { menu } from "../data/catalog.js";

export default function Navbar({ mobileOpen, onClose }) {
  const [hover, setHover] = useState(null); // submenú abierto en escritorio
  const [acc, setAcc] = useState(null); // acordeón abierto en móvil

  return (
    <nav aria-label="Navegación principal" className="bg-pet-green">
      {/* ===== Escritorio ===== */}
      <ul className="relative mx-auto hidden max-w-6xl items-center gap-1 px-6 md:flex">
        {menu.map((item) => (
          <li
            key={item.label}
            onMouseEnter={() => setHover(item.label)}
            onMouseLeave={() => setHover(null)}
            className="static"
          >
            <a
              href={item.href}
              onFocus={() => setHover(item.label)}
              className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white transition-colors hover:text-pet-gold"
            >
              {item.label}
              {item.groups && <ChevronDown size={14} />}
            </a>

            {item.groups && hover === item.label && (
              <div className="absolute left-0 top-full z-40 w-full border-t-4 border-pet-gold bg-white shadow-xl">
                <div className="grid gap-8 px-8 py-6" style={{ gridTemplateColumns: `repeat(${item.groups.length}, minmax(0, 1fr))` }}>
                  {item.groups.map((g) => (
                    <div key={g.title}>
                      <h3 className="mb-2 font-display text-lg font-bold text-pet-green">{g.title}</h3>
                      <ul className="space-y-1.5">
                        {g.links.map((l) => (
                          <li key={l.label}>
                            <a href={l.href} onClick={() => setHover(null)} className="text-sm text-pet-ink/80 hover:text-pet-leaf hover:underline">
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* ===== Móvil ===== */}
      {mobileOpen && (
        <ul id="menu-movil" className="max-h-[70vh] overflow-y-auto px-4 pb-4 md:hidden">
          {menu.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              {item.groups ? (
                <>
                  <button
                    type="button"
                    onClick={() => setAcc(acc === item.label ? null : item.label)}
                    aria-expanded={acc === item.label}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-white"
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform ${acc === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {acc === item.label && (
                    <div className="pb-3 pl-3">
                      <a href={item.href} onClick={onClose} className="mb-1 block py-1.5 text-sm font-semibold text-pet-gold">
                        Ver todo {item.label.toLowerCase()}
                      </a>
                      {item.groups.map((g) => (
                        <div key={g.title} className="mb-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-pet-gold">{g.title}</p>
                          {g.links.map((l) => (
                            <a key={l.label} href={l.href} onClick={onClose} className="block py-1.5 text-sm text-white/90">
                              {l.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} onClick={onClose} className="block py-3 text-base font-medium text-white">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
