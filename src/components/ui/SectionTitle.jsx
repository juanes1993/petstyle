function SectionTitle({ etiqueta, titulo, descripcion, oscuro = false, centrado = false }) {
  return (
    <div className={`max-w-2xl ${centrado ? "mx-auto text-center" : ""}`}>
      {etiqueta && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-widest ${oscuro ? "text-lima" : "text-coral"}`}>{etiqueta}</p>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${oscuro ? "text-crema" : "text-bosque"}`}>{titulo}</h2>
      {descripcion && <p className={`mt-4 text-lg leading-relaxed ${oscuro ? "text-crema/80" : "text-suave"}`}>{descripcion}</p>}
    </div>
  );
}

export default SectionTitle;
