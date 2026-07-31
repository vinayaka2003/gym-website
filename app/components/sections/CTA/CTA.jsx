import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.tag}>
          START YOUR FITNESS JOURNEY
        </span>

        <h2>
          Transform Your Body.
          <br />
          Transform Your Life.
        </h2>

        <p>
          Join Goldstone Fitness and train with expert coaches,
          premium equipment, and a motivating community.
        </p>

        <div className={styles.buttons}>
          <Link href="#contact" className={styles.primary}>
            Join Now
          </Link>

          <a
            href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
            className={styles.secondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}