"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, Dumbbell, ShieldCheck, ChevronRight } from "lucide-react";
import styles from "./WhatsAppButton.module.css";
import { trackGAEvent } from "../Analytics/track";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close popup when clicking anywhere outside this component
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Floating Chat Menu */}
      {isOpen && (
        <div className={styles.chatMenu}>
          <div className={styles.menuHeader}>
            <div className={styles.headerAvatar}>
              <Dumbbell size={16} />
            </div>
            <div className={styles.headerTitle}>
              <strong>Goldstone Desk</strong>
              <span className={styles.statusText}>Member Support & Feedback</span>
            </div>
          </div>

          <div className={styles.menuBody}>
            <p className={styles.introText}>
              Select a channel to open a direct WhatsApp chat:
            </p>

            <div className={styles.menuItems}>
              <a
                href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuItemSales}
                onClick={() => {
                  trackGAEvent("whatsapp_click", { channel: "membership_sales", location: "whatsapp_widget" });
                  setIsOpen(false);
                }}
              >
                <div className={styles.itemIconWrapperSales}>
                  <Dumbbell size={16} className={styles.itemIcon} />
                </div>
                <div className={styles.itemMeta}>
                  <strong>Membership & Sales</strong>
                  <span>Inquire about fees & slots</span>
                </div>
                <ChevronRight size={16} className={styles.chevron} />
              </a>

              <a
                href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I%20have%20some%20feedback/concern%20about%20the%20gym."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuItemFeedback}
                onClick={() => {
                  trackGAEvent("whatsapp_click", { channel: "owner_hotline", location: "whatsapp_widget" });
                  setIsOpen(false);
                }}
              >
                <div className={styles.itemIconWrapperFeedback}>
                  <ShieldCheck size={16} className={styles.itemIcon} />
                </div>
                <div className={styles.itemMeta}>
                  <strong>Direct Owner Hotline</strong>
                  <span>Share feedback or concerns</span>
                </div>
                <ChevronRight size={16} className={styles.chevron} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.whatsapp} ${isOpen ? styles.activeTrigger : ""}`}
        aria-label={isOpen ? "Close Support Menu" : "Open Support Menu"}
      >
        {isOpen ? <X size={24} /> : <FaWhatsapp size={28} />}
      </button>
    </div>
  );
}