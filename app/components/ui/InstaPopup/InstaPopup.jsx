"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./InstaPopup.module.css";
import Image from "next/image";
import MagneticButton from "../MagneticButton/MagneticButton";

export default function InstaPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className={styles.overlay}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
              <X size={20} />
            </button>
            
            <div className={styles.iconWrapper}>
              <Image
                src="/logo/logo pop.png"
                alt="Goldstone Fitness Logo"
                width={90}
                height={90}
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
            </div>
        
        <h3 className={styles.title}>Connect With Us</h3>
        <p className={styles.text}>
          Follow us on Instagram for daily motivation, workout tips, and exclusive gym updates!
        </p>
        
        <MagneticButton>
          <a 
            href="https://instagram.com/goldstone_fitness_01" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.followBtn}
            onClick={handleClose}
          >
            <FaInstagram size={18} style={{ marginRight: '8px' }} />
            Follow on Instagram
          </a>
        </MagneticButton>
      </div>
    </div>
      )}
    </>
  );
}
