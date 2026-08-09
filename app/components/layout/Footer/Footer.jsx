import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import Container from "../../ui/Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <h2 className={styles.logo}>Goldstone Fitness</h2>

            <p>
              Elevate your lifestyle. Join Goldstone Fitness for an unparalleled training experience. It starts with you.
            </p>

            <div className={styles.locations}>
              <h3>Our Locations</h3>
              <ul>
                <li>📍 Kattigenahalli</li>
                <li>📍 Jakkur (Opening Soon)</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#branches">Branches</Link>
              </li>
              <li>
                <Link href="#facilities">Facilities</Link>
              </li>
              <li>
                <Link href="#gallery">Gallery</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3>Operating Hours</h3>
            <div className={styles.hours}>
              <div className={styles.hourRow}>
                <span className={styles.day}>Mon-Sat</span>
                <span className={styles.time}>5:00 AM - 10:00 PM</span>
              </div>
              <div className={styles.hourRow}>
                <span className={styles.day}>Sunday</span>
                <span className={styles.time}>
                  7:00 AM - 11:00 AM
                  <br />
                  4:00 PM - 9:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3>Connect With Us</h3>

            <p className={styles.contactText}>
              Reach us through phone, WhatsApp or Instagram.
            </p>

            <div className={styles.socials}>
              {/* Phone */}
              <a
                href="tel:+918867441378"
                aria-label="Call"
                title="Call"
              >
                <FaPhoneAlt size={20} color="#e7c171" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp size={20} color="#25D366" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/goldstone_fitness_01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram size={20} color="#E1306C" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} Goldstone Fitness. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}