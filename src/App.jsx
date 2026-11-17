import { Route, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ScrollManager from "./components/layout/ScrollManager.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppFloat from "./components/layout/WhatsAppFloat.jsx";
import CartDrawer from "./components/cart/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SizesPage from "./pages/SizesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <ScrollManager />
        {/* Header, Footer, carrito y WhatsApp se ven en todas las páginas: el menú es siempre el mismo */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<CatalogPage mode="all" />} />
            <Route path="/categoria/:pet" element={<CatalogPage mode="category" />} />
            <Route path="/categoria/:pet/:sub" element={<CatalogPage mode="category" />} />
            <Route path="/tienda/coleccion/:id" element={<CatalogPage mode="collection" />} />
            <Route path="/ofertas" element={<CatalogPage mode="offers" />} />
            <Route path="/buscar" element={<CatalogPage mode="search" />} />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="/guia-de-tallas" element={<SizesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            {/* Cualquier otra dirección muestra la página de error 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
      </CartProvider>
    </ProductsProvider>
  );
}
