export default function Card({
  children,
  className = "",
  as: Component = "div",
  interactive = false,
}) {
  return (
    <Component
      className={`surface-card ${interactive ? "surface-card--interactive" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
