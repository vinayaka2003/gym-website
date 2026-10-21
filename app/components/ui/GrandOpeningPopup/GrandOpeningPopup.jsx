"use client";

import { useState, useEffect } from "react";
import { X, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { trackGAEvent } from "../Analytics/track";
import styles from "./GrandOpeningPopup.module.css";

const JAKKUR_WHATSAPP_URL =
  "https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20new%20Jakkur%20branch.";

const JAKKUR_MAPS_URL =
  "https://maps.google.com/?q=13.072300729547326,77.60475883355028";

export default function GrandOpeningPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    let scrollListener;
    let isCleanedUp = false;
    const pageStartTime = Date.now();

    const triggerPopup = () => {
      if (isCleanedUp) return;
      setShow(true);
      cleanup();
    };

    // Smooth delay (6.5 seconds) so it doesn't pop instantly on page load
    timer = setTimeout(triggerPopup, 6500);

    // Or trigger if user scrolls down 30% after spending at least 3.5s
    scrollListener = () => {
      const timeSpent = Date.now() - pageStartTime;
      if (timeSpent < 3500) return;

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollPercent = (window.scrollY / totalHeight) * 100;
        if (scrollPercent >= 30) {
          triggerPopup();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      isCleanedUp = true;
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("keydown", handleKeyDown);
    };

    return cleanup;
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleExploreBranch = () => {
    trackGAEvent("opening_popup_click", { action: "explore_jakkur_gallery" });
    handleClose();

    // Select Jakkur branch in Gallery (branch id 2)
    if (typeof window !== "undefined") {
      window.__SELECTED_BRANCH__ = 2;
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
    }

    const scrollToGallery = () => {
      const galleryEl = document.getElementById("gallery");
      if (galleryEl) {
        const headerOffset = 76;
        const targetPos =
          galleryEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth",
        });
      } else {
        window.location.hash = "#gallery";
      }
    };

    scrollToGallery();
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
      scrollToGallery();
    }, 120);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
    }, 360);
  };

  const handleViewLocation = (e) => {
    if (e) e.preventDefault();
    trackGAEvent("opening_popup_click", { action: "view_jakkur_location" });
    handleClose();

    // Select Jakkur branch card in Branches / Locations section (branch id 2)
    if (typeof window !== "undefined") {
      window.__SELECTED_BRANCH__ = 2;
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
    }

    const scrollToBranches = () => {
      const jakkurCard =
        document.getElementById("branch-card-jakkur") ||
        document.getElementById("mobile-branch-card-jakkur") ||
        document.getElementById("branches");

      if (jakkurCard) {
        const headerOffset = 84;
        const targetPos =
          jakkurCard.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth",
        });
      } else {
        window.location.hash = "#branches";
      }
    };

    scrollToBranches();
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
      scrollToBranches();
    }, 120);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("select-branch", { detail: 2 }));
    }, 360);
  };

  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.bannerPopup}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Grand Opening Announcement"
      >
        {/* Sleek Minimalist Close Button */}
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close Announcement"
        >
          <X size={15} strokeWidth={1.75} />
        </button>

        {/* Content Section (Editorial Typography & Actions) */}
        <div className={styles.bannerContent}>
          <div className={styles.eyebrowBadge}>
            <span>NOW OPEN — JAKKUR BRANCH</span>
          </div>

          <h2 className={styles.title}>
            THE WORK <span className={styles.goldGradient}>STARTS HERE.</span>
          </h2>

          <p className={styles.desc}>
            Premium training facilities. Serious strength equipment. Expert coaching built around your goals.
          </p>

          <button
            type="button"
            className={styles.locationPill}
            onClick={handleViewLocation}
            aria-label="Navigate to Jakkur Branch Location"
          >
            <div className={styles.locationPillMain}>
              <MapPin size={13} className={styles.pinIcon} />
              <span className={styles.addressText}>Above Kotak Mahindra Bank, K V Jairam Rd</span>
            </div>
            <span className={styles.directionsHint}>View Location</span>
          </button>

          <div className={styles.actionRow}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={handleExploreBranch}
            >
              <span>Explore Branch</span>
            </button>

            <button
              type="button"
              className={styles.locationBtn}
              onClick={handleViewLocation}
            >
              <MapPin size={13} className={styles.btnPinIcon} />
              <span>View Location</span>
            </button>

            <a
              href={JAKKUR_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              onClick={() => {
                trackGAEvent("opening_popup_click", {
                  action: "whatsapp_inquiry",
                });
                handleClose();
              }}
            >
              <FaWhatsapp size={15} className={styles.whatsappIcon} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Visual Banner Showcase (Real Branch 2 Facility Photo) */}
        <div className={styles.bannerVisual}>
          <Image
            src="/images/gallery/gallery2-4.webp"
            alt="Goldstone Fitness Jakkur Branch - Real Facility Workout Section"
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className={styles.visualImg}
            priority
          />
          <div className={styles.visualGradientH} />
          <div className={styles.visualGradientV} />
        </div>
      </div>
    </div>
  );
}
