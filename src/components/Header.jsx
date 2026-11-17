import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, PawPrint } from "lucide-react";
import Navbar from "./Navbar.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Header({ query = "", onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count: cartCount, setOpen: openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Barra de anuncio */}
      <div className="bg-pet-green px-4 py-2 text-center text-xs font-medium text-white">
        🚚 Envíos a todo el Perú · Compras por WhatsApp: <span className="text-pet-gold">+51 927 783 533</span>
      </div>

      {/* Fila superior: logo, buscador, cuenta y carrito */}
      <div className="bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-pet-green md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <a href="#inicio" className="flex items-center gap-2 text-pet-green" aria-label="PetStyle, ir al inicio">
            <PawPrint className="text-pet-gold" size={26} />
            <span className="font-display text-2xl font-bold">PetStyle</span>
          </a>

          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.hash = "#/buscar";
            }}
            className="mx-auto hidden max-w-md flex-1 items-center rounded-full border border-pet-green/20 bg-pet-cream px-4 sm:flex"
          >
            <Search size={18} className="text-pet-green/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Busca tus productos favoritos"
              aria-label="Buscar productos"
              className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-pet-ink/50"
            />
          </form>

          <div className="ml-auto flex items-center gap-1 sm:ml-0">
            <a href="#contacto" className="hidden items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-pet-green hover:bg-pet-cream lg:flex">
              <User size={18} /> Ingresar
            </a>
            <button
              type="button"
              onClick={() => openCart(true)}
              aria-label={`Abrir carrito, ${cartCount} productos`}
              className="relative rounded-full p-2 text-pet-green hover:bg-pet-cream"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-pet-gold text-xs font-bold text-pet-ink">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Buscador móvil */}
        <div className="px-4 pb-3 sm:hidden">
          <div className="flex items-center rounded-full border border-pet-green/20 bg-pet-cream px-4">
            <Search size={18} className="text-pet-green/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Busca tus productos favoritos"
              aria-label="Buscar productos"
              className="w-full bg-transparent px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <Navbar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
