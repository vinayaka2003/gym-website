"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.button} ${visible ? styles.show : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <ChevronsUp size={24} strokeWidth={2.5} />
    </button>
  );
}