export default function Button({ children, variant = "dark", href = "#" }) {
  const colors =
    variant === "light" ? "bg-white text-ink" : "bg-ink text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-medium ${colors}`}
    >
      {children}
    </a>
  );
}
