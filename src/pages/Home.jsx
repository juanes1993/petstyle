import Hero from "../components/home/Hero.jsx";
import CollectionSection from "../components/home/CollectionSection.jsx";
import Benefits from "../components/home/Benefits.jsx";
import SizeGuide from "../components/home/SizeGuide.jsx";
import CtaBanner from "../components/home/CtaBanner.jsx";
import LoadingGrid from "../components/ui/LoadingGrid.jsx";
import ProductsGate from "../components/ui/ProductsGate.jsx";
import { collections } from "../data/catalog.js";
import { useProducts } from "../context/ProductsContext.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

// Las secciones que dependen de la API (colecciones y ofertas)
function Collections() {
  const { products } = useProducts();
  const offers = products.filter((p) => p.oldPrice).slice(0, 4);

  return (
    <>
      {collections.map((c, i) => (
        <CollectionSection
          key={c.id}
          id={c.id}
          title={c.title}
          subtitle={c.subtitle}
          products={products.filter((p) => p.collection === c.id).slice(0, 4)}
          to={`/tienda/coleccion/${c.id}`}
          alt={i % 2 === 0}
        />
      ))}
      <CollectionSection id="ofertas" title="Ofertas" subtitle="Precios especiales por tiempo limitado." products={offers} to="/ofertas" alt />
    </>
  );
}

export default function Home() {
  useDocumentTitle(null);

  return (
    <>
      <Hero />
      <div id="tienda" />
      <ProductsGate
        skeleton={
          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <LoadingGrid count={4} />
            </div>
          </section>
        }
      >
        <Collections />
      </ProductsGate>
      <Benefits />
      <SizeGuide />
      <CtaBanner />
    </>
  );
}
