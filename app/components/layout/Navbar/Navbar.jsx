"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "../../ui/Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import { smoothScrollTo } from "../../../utils/scroll";

import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.offsetHeight : 72;
      const navbarTop = navbar ? parseFloat(getComputedStyle(navbar).top) || 0 : 0;
      const totalOffset = navbarHeight + navbarTop + 12; // 12px buffer for visual alignment

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const top = section.offsetTop - totalOffset;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container">
        <header
          className={`${styles.navbar} ${scrolled ? styles.scrolled : ""
            }`}
        >
          <div className={styles.wrapper}>
            <Link href="/" className={styles.logo}>
              <img src="/logo/logo.png" alt="Goldstone Fitness" style={{ height: "44px", objectFit: "contain", borderRadius: "50%" }} />
              <div className={styles.logoText}>
                <span>GOLDSTONE</span>
                <small>FITNESS</small>
              </div>
            </Link>

            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => smoothScrollTo(e, link.href)}
                  className={active === link.href ? styles.active : ""}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className={styles.actions}>
              <Button href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym." target="_blank" rel="noopener noreferrer">
                Join Now
              </Button>

              <button
                type="button"
                className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
                onClick={() => setMenuOpen(true)}
                aria-label="Open Menu"
              >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}