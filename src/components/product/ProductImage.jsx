import { getImage } from "../../data/images.js";

// Muestra la imagen del producto; si no existe el archivo, usa el emoji de respaldo.
export default function ProductImage({ product, className = "", emojiSize = "text-6xl" }) {
  const src = product.imageUrl || getImage(product.image);
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`} style={{ background: product.color }}>
      {src ? (
        <img src={src} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span aria-hidden="true" className={emojiSize}>{product.emoji}</span>
      )}
    </div>
  );
}
