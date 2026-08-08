"use client";

import Link from "next/link";
import Image from "next/image";
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
    let cachedOffset = 84; // Default fallback offset

    const updateOffset = () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const navbarTop = parseFloat(getComputedStyle(navbar).top) || 0;
        cachedOffset = navbarHeight + navbarTop + 12;
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      const currentScroll = window.scrollY;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const top = section.offsetTop - cachedOffset;
        const bottom = top + section.offsetHeight;

        if (currentScroll >= top && currentScroll < bottom) {
          setActive(link.href);
          break;
        }
      }
    };

    updateOffset();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateOffset, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <>
      <div className="container">
        <header
          className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        >
          <div className={styles.wrapper}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo/logo.svg"
                alt="Goldstone Fitness Logo"
                width={44}
                height={44}
                priority
                className={styles.logoImage}
              />
              <div className={styles.logoText}>
                <span>GOLDSTONE</span>
                <small>FITNESS</small>
              </div>
            </Link>

            <nav className={styles.nav} aria-label="Main Navigation">
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
              <div className={styles.joinWrap}>
                <Button
                  href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </Button>
              </div>

              <button
                type="button"
                className={styles.mobileMenu}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={menuOpen}
              >
                <div className={styles.barWrapper}>
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                </div>
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeSection={active.slice(1)} />
    </>
  );
}