"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.content}>
        <div className={styles.logo} style={{ marginBottom: "25px" }}>
          <img src="/logo/logo.png" alt="Goldstone Fitness Logo" style={{ height: "130px", objectFit: "contain" }} />
        </div>

        <h2>Goldstone Fitness</h2>

        <div className={styles.loader}>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
}