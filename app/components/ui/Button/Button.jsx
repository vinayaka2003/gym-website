import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className: customClassName,
  target,
  rel,
}) {
  const className = `${styles.button} ${styles[variant]} ${customClassName || ""}`.trim();

  if (href) {
    return (
      <Link href={href} className={className} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}