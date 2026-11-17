import { useId } from "react";

/**
 * Ilustración vectorial plana de un perro o un gato con una prenda o accesorio.
 * Reemplazable por fotografías reales en la versión final.
 */
function PetArt({
  mascota = "dog",
  prenda = "ninguna", // sueter | impermeable | pechera | pijama | capa | ninguna
  accesorio = "ninguno", // bandana | corbatin | collar | ninguno
  color = "#2E5E22",
  detalle = "#C9DB3F",
  pelaje,
  orejas,
  className = "",
  titulo,
}) {
  const uid = useId().replace(/:/g, "");
  const esPerro = mascota === "dog";
  const piel = pelaje ?? (esPerro ? "#D9A066" : "#B7B2A6");
  const piel2 = orejas ?? (esPerro ? "#A86B3A" : piel);
  const cuerpo = prenda === "capa" ? "M40 220 C40 146 68 122 100 122 C132 122 160 146 160 220 Z" : "M52 220 C52 144 72 120 100 120 C128 120 148 144 148 220 Z";
  const tinte = prenda === "ninguna" || prenda === "pechera" ? piel : color;

  return (
    <svg viewBox="0 0 200 220" role="img" aria-label={titulo ?? (esPerro ? "Perro con ropa" : "Gato con ropa")} className={className}>
      <defs>
        <clipPath id={`cuerpo-${uid}`}>
          <path d={cuerpo} />
        </clipPath>
      </defs>

      {/* Cuerpo y prenda */}
      <path d={cuerpo} fill={tinte} />
      <g clipPath={`url(#cuerpo-${uid})`}>
        {prenda === "sueter" && (
          <>
            <path d="M0 184 H200 M0 200 H200" stroke={detalle} strokeWidth="7" />
            <rect x="66" y="118" width="68" height="20" rx="8" fill={detalle} opacity="0.9" />
          </>
        )}
        {prenda === "impermeable" && (
          <>
            <path d="M100 134 V220" stroke={detalle} strokeWidth="4" />
            <circle cx="100" cy="168" r="4" fill={detalle} />
            <circle cx="100" cy="188" r="4" fill={detalle} />
          </>
        )}
        {prenda === "pechera" && (
          <path d="M76 132 V220 M124 132 V220 M76 176 H124" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none" />
        )}
        {prenda === "pijama" && (
          <>
            <circle cx="78" cy="170" r="4" fill={detalle} />
            <circle cx="118" cy="162" r="4" fill={detalle} />
            <circle cx="100" cy="192" r="4" fill={detalle} />
            <circle cx="130" cy="200" r="3.5" fill={detalle} />
            <circle cx="70" cy="206" r="3.5" fill={detalle} />
          </>
        )}
        {prenda === "capa" && <path d="M0 196 Q100 176 200 196" stroke={detalle} strokeWidth="6" fill="none" />}
      </g>
      {prenda === "capa" && <circle cx="100" cy="138" r="6" fill={detalle} stroke="#1B3A14" strokeWidth="1.5" />}

      {esPerro ? (
        <>
          {/* Orejas, cabeza y hocico del perro */}
          <ellipse cx="58" cy="86" rx="17" ry="32" transform="rotate(14 58 86)" fill={piel2} />
          <ellipse cx="142" cy="86" rx="17" ry="32" transform="rotate(-14 142 86)" fill={piel2} />
          <ellipse cx="100" cy="88" rx="44" ry="40" fill={piel} />
          <ellipse cx="100" cy="106" rx="22" ry="16" fill="#F6E6CC" />
          <ellipse cx="100" cy="98" rx="8" ry="5.5" fill="#2A1B12" />
          <path d="M100 104 V111 M91 113 Q100 121 109 113" stroke="#2A1B12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M96 117 Q100 127 104 117 Z" fill="#E97A8B" />
          <circle cx="82" cy="80" r="4.8" fill="#2A1B12" />
          <circle cx="118" cy="80" r="4.8" fill="#2A1B12" />
          <circle cx="83.6" cy="78.4" r="1.5" fill="#fff" />
          <circle cx="119.6" cy="78.4" r="1.5" fill="#fff" />
        </>
      ) : (
        <>
          {/* Orejas, cabeza y rostro del gato */}
          <path d="M62 80 L66 38 L98 62 Z" fill={piel} />
          <path d="M138 80 L134 38 L102 62 Z" fill={piel} />
          <path d="M70 68 L71 50 L87 62 Z" fill="#E8A5B0" />
          <path d="M130 68 L129 50 L113 62 Z" fill="#E8A5B0" />
          <ellipse cx="100" cy="92" rx="42" ry="36" fill={piel} />
          <path d="M92 62 V72 M100 60 V72 M108 62 V72" stroke="#00000022" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="82" cy="90" rx="6.5" ry="7.5" fill="#A8D36B" />
          <ellipse cx="118" cy="90" rx="6.5" ry="7.5" fill="#A8D36B" />
          <ellipse cx="82" cy="90" rx="2.3" ry="6" fill="#1F2A1B" />
          <ellipse cx="118" cy="90" rx="2.3" ry="6" fill="#1F2A1B" />
          <path d="M95 102 H105 L100 108 Z" fill="#E8869A" />
          <path d="M100 108 Q94 116 87 112 M100 108 Q106 116 113 112" stroke="#1F2A1B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M70 100 L48 96 M70 106 L48 110 M130 100 L152 96 M130 106 L152 110" stroke="#FAF6EA" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* Accesorios al cuello */}
      {accesorio === "bandana" && (
        <g>
          <path d="M64 128 Q100 142 136 128 L100 176 Z" fill={color} />
          <circle cx="92" cy="144" r="2.6" fill={detalle} />
          <circle cx="108" cy="144" r="2.6" fill={detalle} />
          <circle cx="100" cy="158" r="2.6" fill={detalle} />
        </g>
      )}
      {accesorio === "corbatin" && (
        <g>
          <path d="M100 140 L72 126 L72 154 Z" fill={color} />
          <path d="M100 140 L128 126 L128 154 Z" fill={color} />
          <rect x="94" y="132" width="12" height="16" rx="4" fill={detalle} />
        </g>
      )}
      {accesorio === "collar" && (
        <g>
          <path d="M62 126 Q100 148 138 126 L138 138 Q100 160 62 138 Z" fill={color} />
          <path d="M80 136 l4 -6 l4 6 M96 140 l4 -6 l4 6 M112 136 l4 -6 l4 6" stroke={detalle} strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="158" r="7" fill="#E3B52B" stroke="#8A6A12" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

export default PetArt;
