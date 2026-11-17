const variants = {
  primary: "bg-pet-gold text-pet-ink hover:bg-pet-gold-dark",
  secondary: "bg-pet-green text-white hover:bg-pet-green/90",
  outline: "border-2 border-pet-green text-pet-green hover:bg-pet-green hover:text-white",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pet-gold focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
