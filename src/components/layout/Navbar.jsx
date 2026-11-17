import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { menu } from "../../data/catalog.js";

export default function Navbar({ mobileOpen, onClose }) {
  const [hover, setHover] = useState(null); // submenú abierto en escritorio
  const [acc, setAcc] = useState(null); // acordeón abierto en móvil

  return (
    <nav aria-label="Navegación principal" className="bg-pet-green">
      {/* ===== Escritorio ===== */}
      <ul className="relative mx-auto hidden max-w-6xl items-center gap-1 px-6 md:flex">
        {menu.map((item) => {
          return (
            <li key={item.label} onMouseEnter={() => setHover(item.label)} onMouseLeave={() => setHover(null)} className="static">
              {/* NavLink sabe si la ruta actual está dentro de este enlace (ej. /tienda/coleccion/cozy pertenece a /tienda) */}
              <NavLink
                to={item.to}
                onFocus={() => setHover(item.label)}
                className={({ isActive }) =>
                  `flex items-center gap-1 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-pet-gold ${
                    isActive ? "border-pet-gold text-pet-gold" : "border-transparent text-white"
                  }`
                }
              >
                {item.label}
                {item.groups && <ChevronDown size={14} aria-hidden="true" />}
              </NavLink>

              {item.groups && hover === item.label && (
                <div className="absolute left-0 top-full z-40 w-full border-t-4 border-pet-gold bg-white shadow-xl">
                  <div className="grid gap-8 px-8 py-6" style={{ gridTemplateColumns: `repeat(${item.groups.length}, minmax(0, 1fr))` }}>
                    {item.groups.map((g) => (
                      <div key={g.title}>
                        <h3 className="mb-2 font-display text-lg font-bold text-pet-green">{g.title}</h3>
                        <ul className="space-y-1.5">
                          {g.links.map((l) => (
                            <li key={l.label}>
                              <Link to={l.to} onClick={() => setHover(null)} className="text-sm text-pet-ink/80 hover:text-pet-leaf hover:underline">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
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
                      <Link to={item.to} onClick={onClose} className="mb-1 block py-1.5 text-sm font-semibold text-pet-gold">
                        Ver todo {item.label.toLowerCase()}
                      </Link>
                      {item.groups.map((g) => (
                        <div key={g.title} className="mb-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-pet-gold">{g.title}</p>
                          {g.links.map((l) => (
                            <Link key={l.label} to={l.to} onClick={onClose} className="block py-1.5 text-sm text-white/90">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) => `block py-3 text-base font-medium ${isActive ? "text-pet-gold" : "text-white"}`}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
