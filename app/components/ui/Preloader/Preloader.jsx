"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
          <Image
            src="/logo/logo.svg"
            alt="Goldstone Fitness Logo"
            width={130}
            height={130}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        <h2>Goldstone Fitness</h2>

        <div className={styles.loader}>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
}