"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        Have questions? We're online!
      </div>
      <a
        href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}