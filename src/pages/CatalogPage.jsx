import { useMemo, useState } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import ProductCard from "../components/product/ProductCard.jsx";
import LoadingGrid from "../components/ui/LoadingGrid.jsx";
import ErrorState from "../components/ui/ErrorState.jsx";
import { menu, collections } from "../data/catalog.js";
import { useProducts } from "../context/ProductsContext.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { normalizar } from "../utils/text.js";

// Una sola página sirve para 5 rutas: tienda, categoría, colección, ofertas y búsqueda ("mode")
export default function CatalogPage({ mode }) {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  // key={pathname}: al cambiar de página se reinician los filtros
  return <CatalogView key={pathname} mode={mode} params={params} query={searchParams.get("q") ?? ""} />;
}

function CatalogView({ mode, params, query }) {
  const { products, loading, error, reload } = useProducts();
  const [sort, setSort] = useState("relevancia");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [hideSoldOut, setHideSoldOut] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);

  const { pet, sub, id } = params;
  const home = { label: "Inicio", to: "/" };
  let title = "Tienda";
  let subtitle = "Todos nuestros productos para perros y gatos.";
  let crumbs = [home, { label: "Tienda" }];
  let chips = null;

  const petItem = menu.find((m) => m.slug === pet);
  const subs = petItem ? petItem.groups.flatMap((g) => g.links) : [];
  const subItem = subs.find((s) => s.slug === sub);

  if (mode === "category") {
    title = petItem?.label || "Categoría";
    subtitle = `Moda y accesorios para ${petItem ? petItem.label.toLowerCase() : "tu mascota"}.`;
    crumbs = [home, { label: title, to: petItem?.to }];
    chips = { petTo: petItem?.to, items: subs, active: sub };
    if (sub) {
      title = subItem ? `${subItem.label} para ${petItem.label.toLowerCase()}` : title;
      crumbs = [home, { label: petItem?.label, to: petItem?.to }, { label: subItem?.label || sub }];
      subtitle = "";
    }
  } else if (mode === "collection") {
    const col = collections.find((c) => c.id === id);
    title = col?.title || "Colección";
    subtitle = col?.subtitle || "";
    crumbs = [home, { label: "Colecciones", to: "/tienda" }, { label: title }];
  } else if (mode === "offers") {
    title = "Ofertas";
    subtitle = "Precios especiales por tiempo limitado.";
    crumbs = [home, { label: "Ofertas" }];
  } else if (mode === "search") {
    title = query.trim() ? `Resultados para “${query}”` : "Buscar productos";
    subtitle = query.trim() ? "" : "Escribe en el buscador de arriba para encontrar productos.";
    crumbs = [home, { label: "Búsqueda" }];
  }
  useDocumentTitle(title);

  // 1) Lista base según la ruta
  const base = useMemo(() => {
    switch (mode) {
      case "category":
        return products.filter((p) => p.pet === pet && (!sub || p.cat === sub));
      case "collection":
        return products.filter((p) => p.collection === id);
      case "offers":
        return products.filter((p) => p.oldPrice);
      case "search": {
        const q = normalizar(query.trim());
        return q ? products.filter((p) => normalizar(`${p.name} ${p.cat} ${p.pet}`).includes(q)) : [];
      }
      default:
        return products;
    }
  }, [products, mode, pet, sub, id, query]);

  // 2) Filtros y orden elegidos por la persona
  const ceiling = base.length ? Math.ceil(Math.max(...base.map((p) => p.price)) / 10) * 10 : 0;
  const limit = Math.min(maxPrice ?? ceiling, ceiling);
  const hayFiltros = onlyOffers || hideSoldOut || limit < ceiling;

  const visible = useMemo(() => {
    const list = base.filter((p) => (!onlyOffers || p.oldPrice) && (!hideSoldOut || !p.soldOut) && p.price <= limit);
    if (sort === "menor") list.sort((a, b) => a.price - b.price);
    if (sort === "mayor") list.sort((a, b) => b.price - a.price);
    return list;
  }, [base, onlyOffers, hideSoldOut, limit, sort]);

  const limpiarFiltros = () => {
    setOnlyOffers(false);
    setHideSoldOut(false);
    setMaxPrice(null);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumbs crumbs={crumbs} />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-pet-green md:text-4xl">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-pet-ink/70">{subtitle}</p>}
          </div>
          {base.length > 0 && (
            <label className="flex items-center gap-2 text-sm text-pet-ink/70">
              Ordenar por
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-pet-green/20 bg-white px-3 py-2 text-sm">
                <option value="relevancia">Relevancia</option>
                <option value="menor">Menor precio</option>
                <option value="mayor">Mayor precio</option>
              </select>
            </label>
          )}
        </div>

        {chips && (
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to={chips.petTo}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${!chips.active ? "bg-pet-green text-white" : "bg-pet-cream text-pet-green hover:bg-pet-gold/30"}`}
            >
              Todo
            </Link>
            {chips.items.map((s) => (
              <Link
                key={s.slug}
                to={s.to}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${chips.active === s.slug ? "bg-pet-green text-white" : "bg-pet-cream text-pet-green hover:bg-pet-gold/30"}`}
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}

        {loading && <LoadingGrid />}
        {!loading && error && <ErrorState error={error} onRetry={reload} />}

        {!loading && !error && (
          <>
            {base.length > 0 && (
              <div role="group" aria-label="Filtros" className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-pet-green/10 bg-pet-cream/50 p-4 text-sm">
                {mode !== "offers" && (
                  <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" checked={onlyOffers} onChange={(e) => setOnlyOffers(e.target.checked)} className="h-4 w-4 accent-pet-green" />
                    Solo ofertas
                  </label>
                )}
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" checked={hideSoldOut} onChange={(e) => setHideSoldOut(e.target.checked)} className="h-4 w-4 accent-pet-green" />
                  Ocultar agotados
                </label>
                <label className="flex items-center gap-3">
                  Precio máximo
                  <input
                    type="range"
                    min={0}
                    max={ceiling}
                    step={5}
                    value={limit}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-32 accent-pet-green sm:w-44"
                  />
                  <span className="w-16 font-semibold text-pet-green">S/ {limit}</span>
                </label>
                {hayFiltros && (
                  <button type="button" onClick={limpiarFiltros} className="font-semibold text-pet-green underline underline-offset-4">
                    Limpiar filtros
                  </button>
                )}
              </div>
            )}

            <p className="mt-6 text-sm text-pet-ink/60" aria-live="polite">
              {visible.length} {visible.length === 1 ? "producto" : "productos"}
            </p>

            {visible.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                {visible.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              (mode !== "search" || query.trim()) && (
                <div className="py-16 text-center">
                  <p className="text-5xl" aria-hidden="true">
                    🐾
                  </p>
                  <p className="mt-3 font-semibold text-pet-green">
                    {hayFiltros ? "Ningún producto cumple estos filtros." : "No encontramos productos aquí."}
                  </p>
                  {hayFiltros ? (
                    <button type="button" onClick={limpiarFiltros} className="mt-4 inline-block text-sm font-semibold underline">
                      Limpiar filtros
                    </button>
                  ) : (
                    <Link to="/tienda" className="mt-4 inline-block text-sm font-semibold underline">
                      Ver toda la tienda
                    </Link>
                  )}
                </div>
              )
            )}
          </>
        )}
      </div>
    </section>
  );
}
