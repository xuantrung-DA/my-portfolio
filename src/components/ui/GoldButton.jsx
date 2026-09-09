export default function GoldButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  download,
}) {
  const classes = `action-button action-button--${variant} ${className}`;

  const content = (
    <>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return (
      <a href={to} className={classes}>
        {content}
      </a>
    );
  }

  if (href) {
    const openInNewTab =
      !href.startsWith("mailto:") && !href.startsWith("tel:");
    return (
      <a
        href={href}
        target={download || !openInNewTab ? undefined : "_blank"}
        rel={download || !openInNewTab ? undefined : "noopener noreferrer"}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
