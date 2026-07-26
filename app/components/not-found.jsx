import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.content}>
        <span>404</span>

        <h1>Page Not Found</h1>

        <p>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}