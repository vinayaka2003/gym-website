"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { smoothScrollTo } from "../../../utils/scroll";
import styles from "./MobileMenu.module.css";
import Button from "../../ui/Button/Button";

const links = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Branches",   href: "#branches" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery",    href: "#gallery" },
  { name: "Contact",    href: "#contact" },
];

const sheetVariants = {
  hidden: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants = {
  hidden: { x: 24, opacity: 0, scale: 0.98 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.05 + i * 0.03, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MobileMenu({ open, onClose, activeSection }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Frosted backdrop */}
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Right-side Drawer Sidebar */}
          <motion.aside
            className={styles.sheet}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Drawer Header with Close Button only */}
            <div className={styles.header}>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close Menu"
              >
                <X size={22} className={styles.closeIcon} />
              </button>
            </div>

            {/* Nav list */}
            <nav className={styles.nav}>
              {links.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                    onClick={(e) => {
                      document.body.style.overflow = "";
                      onClose();
                      setTimeout(() => smoothScrollTo(e, link.href), 80);
                    }}
                  >
                    <span className={styles.linkName}>{link.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Join Button (slight upside relative to bottom layout) */}
            <div className={styles.footer}>
              <Button
                href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinBtn}
                onClick={onClose}
              >
                Join Now
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}