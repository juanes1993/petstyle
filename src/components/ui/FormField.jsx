import { useId } from "react";

const base =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-pet-ink placeholder:text-pet-ink/40 transition focus:outline-none focus:ring-2";

/**
 * Campo de formulario accesible: etiqueta, mensaje de error y pista.
 * as: "input" | "select" | "textarea"
 */
export default function FormField({ label, as: Tag = "input", error, hint, children, className = "", ...props }) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const estado = error
    ? "border-red-500 focus:ring-red-200"
    : "border-pet-green/20 focus:border-pet-green focus:ring-pet-gold/40";

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-pet-ink">
        {label}
      </label>
      <Tag id={id} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={`${base} ${estado}`} {...props}>
        {children}
      </Tag>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-semibold text-red-700">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-pet-ink/60">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
