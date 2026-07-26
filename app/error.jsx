"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.error}>
      <div className={styles.wrapper}>
        <h1>Something went wrong</h1>

        <p>
          We couldn&apos;t load this page. Please try again.
        </p>

        <button onClick={reset}>
          Try Again
        </button>
      </div>
    </main>
  );
}