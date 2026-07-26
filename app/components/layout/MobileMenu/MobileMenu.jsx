"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../../ui/Button/Button";
import styles from "./MobileMenu.module.css";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { x: "100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  visible: { x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 } },
};

const linkVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
          />

          <motion.aside
            className={styles.menu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Menu</h2>
              <button
                className={styles.close}
                onClick={onClose}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav>
              {links.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={styles.link}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={linkVariants} className={styles.bottom}>
              <Button 
                href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym." 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={onClose} 
                className={styles.joinBtn}
              >
                Join Now
              </Button>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}