import { useProducts } from "../../context/ProductsContext.jsx";
import LoadingGrid from "./LoadingGrid.jsx";
import ErrorState from "./ErrorState.jsx";

// Muestra "cargando" o "error" mientras no haya productos; cuando están listos, muestra su contenido.
export default function ProductsGate({ children, skeleton = <LoadingGrid /> }) {
  const { loading, error, reload } = useProducts();
  if (loading) return skeleton;
  if (error) return <ErrorState error={error} onRetry={reload} />;
  return children;
}
