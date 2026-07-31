"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { smoothScrollTo } from "../../../utils/scroll";
import styles from "./MobileMenu.module.css";

const links = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery",    href: "#gallery" },
  { name: "Etiquette",  href: "#etiquette" },
  { name: "Contact",    href: "#contact" },
];

const sheetVariants = {
  hidden: {
    x: "100%",
    transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
  },
  visible: {
    x: 0,
    transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
  },
};

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, delay: 0.15 + i * 0.06, ease: "easeOut" },
  }),
};

export default function MobileMenu({ open, onClose }) {
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
            transition={{ duration: 0.35 }}
            onClick={onClose}
          />

          {/* Right-side drawer */}
          <motion.aside
            className={styles.sheet}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Sheet header - close only */}
            <div className={styles.header}>
              <button
                className={styles.close}
                onClick={onClose}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className={styles.nav}>
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className={styles.link}
                  onClick={(e) => {
                    document.body.style.overflow = "";
                    onClose();
                    setTimeout(() => smoothScrollTo(e, link.href), 80);
                  }}
                >
                  <span className={styles.linkName}>{link.name}</span>
                  <span className={styles.linkArrow}>→</span>
                </motion.a>
              ))}

              {/* Join Now — gold gradient button below nav */}
              <motion.div
                custom={links.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className={styles.joinWrap}
              >
                <a
                  href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.joinBtn}
                  onClick={onClose}
                >
                  Join Now
                </a>
              </motion.div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}