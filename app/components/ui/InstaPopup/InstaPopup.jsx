"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import styles from "./InstaPopup.module.css";
import Image from "next/image";
import MagneticButton from "../MagneticButton/MagneticButton";
import { trackGAEvent } from "../Analytics/track";

export default function InstaPopup() {
  const [show, setShow] = useState(false);
  const [activeBranch, setActiveBranch] = useState(1);

  useEffect(() => {
    const syncBranch = () => {
      if (
        window.__SELECTED_BRANCH__ === 2 ||
        window.__SELECTED_BRANCH__ === "2" ||
        window.__SELECTED_BRANCH__ === "jakkur" ||
        window.location.hash.toLowerCase().includes("jakkur")
      ) {
        setActiveBranch(2);
      } else {
        setActiveBranch(1);
      }
    };

    syncBranch();
    const handleSelectBranch = (event) => {
      const value = event?.detail;
      setActiveBranch(
        value === 2 || value === "2" || value === "jakkur" ? 2 : 1
      );
    };
    window.addEventListener("select-branch", handleSelectBranch);
    window.addEventListener("hashchange", syncBranch);

    // Check localStorage (shown within last 7 days)
    const lastShown = localStorage.getItem("insta-popup-last-shown");
    const now = Date.now();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    
    if (lastShown && now - parseInt(lastShown, 10) < sevenDaysInMs) {
      return;
    }

    let timer;
    let scrollListener;

    const showPopup = () => {
      setShow(true);
      localStorage.setItem("insta-popup-last-shown", now.toString());
      cleanup();
    };

    // Trigger after 15 seconds
    timer = setTimeout(showPopup, 15000);

    // Trigger after 50% scroll
    scrollListener = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollPercent = (window.scrollY / totalHeight) * 100;
        if (scrollPercent >= 50) {
          showPopup();
        }
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", scrollListener);
    };

    return () => {
      cleanup();
      window.removeEventListener("select-branch", handleSelectBranch);
      window.removeEventListener("hashchange", syncBranch);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const instagram =
    activeBranch === 2
      ? {
          href: "https://instagram.com/goldstone_fitness_02",
          label: "@goldstone_fitness_02",
        }
      : {
          href: "https://instagram.com/goldstone_fitness_01",
          label: "@goldstone_fitness_01",
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
                src="/logo/logo pop.svg"
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
            href={instagram.href}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.followBtn}
            onClick={() => {
              trackGAEvent("instagram_click");
              handleClose();
            }}
          >
            <FaInstagram size={18} style={{ marginRight: '8px' }} />
            Follow {instagram.label}
          </a>
        </MagneticButton>
      </div>
    </div>
      )}
    </>
  );
}
