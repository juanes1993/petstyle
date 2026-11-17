import { useState } from "react";

/**
 * Manejo de formularios con validación.
 * rules:      { campo: (valor, todosLosValores) => "mensaje de error" | "" }
 * formatters: { campo: (valor) => valorFormateado }
 */
export function useForm(initial, rules, formatters = {}) {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});

  const errors = Object.fromEntries(Object.keys(rules).map((campo) => [campo, rules[campo](values[campo], values)]));
  const isValid = Object.values(errors).every((e) => !e);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const bruto = type === "checkbox" ? checked : value;
    const final = formatters[name] ? formatters[name](bruto) : bruto;
    setValues((v) => ({ ...v, [name]: final }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const touchAll = () => setTouched(Object.fromEntries(Object.keys(rules).map((campo) => [campo, true])));

  const reset = () => {
    setValues(initial);
    setTouched({});
  };

  // Solo muestra el error de los campos que la persona ya tocó
  const errorVisible = (campo) => (touched[campo] ? errors[campo] : "");

  return { values, isValid, handleChange, handleBlur, touchAll, reset, errorVisible };
}
