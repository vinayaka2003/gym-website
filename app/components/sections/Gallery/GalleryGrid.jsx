"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Gallery.module.css";

const ITEMS_PER_PAGE = 6;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function GalleryGrid({ branches, images }) {
  const [activeBranchId, setActiveBranchId] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.__SELECTED_BRANCH__ === 2 || window.__SELECTED_BRANCH__ === "2" || window.__SELECTED_BRANCH__ === "jakkur") {
        return "jakkur";
      }
      if (window.location.hash.toLowerCase().includes("jakkur")) {
        return "jakkur";
      }
    }
    return branches && branches.length > 0 ? branches[0].id : "kattigenahalli";
  });
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [index, setIndex] = useState(-1);

  // Sync with global branch selection (e.g., from opening popup or branch cards)
  useEffect(() => {
    const checkInitial = () => {
      if (
        window.__SELECTED_BRANCH__ === 2 ||
        window.__SELECTED_BRANCH__ === "2" ||
        window.__SELECTED_BRANCH__ === "jakkur" ||
        window.location.hash.toLowerCase().includes("jakkur")
      ) {
        setActiveBranchId("jakkur");
        setPage(0);
        setDirection(0);
      }
    };
    checkInitial();

    const handleSelectBranch = (e) => {
      const val = e?.detail;
      if (val === 2 || val === "2" || val === "jakkur") {
        window.__SELECTED_BRANCH__ = 2;
        setActiveBranchId("jakkur");
        setPage(0);
        setDirection(0);
      } else if (val === 1 || val === "1" || val === "kattigenahalli") {
        window.__SELECTED_BRANCH__ = 1;
        setActiveBranchId("kattigenahalli");
        setPage(0);
        setDirection(0);
      }
    };

    window.addEventListener("select-branch", handleSelectBranch);
    window.addEventListener("hashchange", checkInitial);

    return () => {
      window.removeEventListener("select-branch", handleSelectBranch);
      window.removeEventListener("hashchange", checkInitial);
    };
  }, []);

  const activeBranch = branches
    ? branches.find((b) => b.id === activeBranchId) || branches[0]
    : null;

  const activeImages = activeBranch ? activeBranch.images : images || [];

  // 6 photos per slide
  const totalPages = Math.ceil(activeImages.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = activeImages.slice(startIndex, endIndex);

  const handleBranchSwitch = (branchId) => {
    setActiveBranchId(branchId);
    setPage(0);
    setDirection(0);
    setIndex(-1);
  };

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage < 0 || newPage >= totalPages) return;
    setDirection(newDirection);
    setPage(newPage);
  };

  const jumpToPage = (targetPage) => {
    if (targetPage === page) return;
    setDirection(targetPage > page ? 1 : -1);
    setPage(targetPage);
  };

  return (
    <>
      {/* Sleek Segmented Control Branch Tabs (NO numbers) */}
      {branches && branches.length > 1 && (
        <FadeUp delay={0.15}>
          <div className={styles.branchTabsContainer}>
            <div
              className={styles.branchTabs}
              role="tablist"
              aria-label="Gallery Branches"
            >
              {branches.map((b, index) => {
                const isActive = b.id === activeBranchId;
                return (
                  <button
                    key={b.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`${styles.branchTab} ${
                      isActive ? styles.branchTabActive : ""
                    }`}
                    onClick={() => handleBranchSwitch(b.id)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight") {
                        const nextIndex = (index + 1) % branches.length;
                        handleBranchSwitch(branches[nextIndex].id);
                      } else if (e.key === "ArrowLeft") {
                        const prevIndex = (index - 1 + branches.length) % branches.length;
                        handleBranchSwitch(branches[prevIndex].id);
                      }
                    }}
                  >
                    {/* Animated background glider (220ms ease-out) */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTabGlider"
                        className={styles.activeTabGlider}
                        transition={{
                          duration: 0.22,
                          ease: "easeOut",
                        }}
                      />
                    )}
                    <span className={styles.tabBranchName}>
                      <span className={styles.tabLabel}>{b.name}</span>
                      {b.isNew && (
                        <sup className={styles.tabNewBadge} aria-label="New Branch">
                          NEW
                        </sup>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>
      )}

      {/* Sliding Photo Grid — 6 Photos at a time with smooth horizontal motion */}
      <div className={styles.sliderViewport}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${activeBranchId}-slide-${page}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.grid}
          >
            {currentImages.map((image, i) => {
              const globalImageIndex = startIndex + i;
              return (
                <div
                  key={image.src}
                  className={styles.card}
                  onClick={() => setIndex(globalImageIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open image: ${image.alt}`}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setIndex(globalImageIndex)
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority={page === 0 && i < 3}
                  />

                  <div className={styles.overlay}>
                    <span>View Image</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unified Luxury Slider Navigation Dock */}
      {totalPages > 1 && (
        <FadeUp delay={0.1}>
          <div className={styles.sliderControlsWrapper}>
            <div
              className={styles.sliderDock}
              role="toolbar"
              aria-label="Gallery Navigation"
            >
              <button
                type="button"
                className={`${styles.sliderNavBtn} ${
                  page === 0 ? styles.sliderNavDisabled : ""
                }`}
                onClick={() => paginate(-1)}
                disabled={page === 0}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} strokeWidth={2.4} />
              </button>

              <div className={styles.dockDivider} aria-hidden="true" />

              {/* Minimalist Progress Indicators */}
              <div
                className={styles.sliderDashes}
                role="tablist"
                aria-label="Slide Indicator"
              >
                {Array.from({ length: totalPages }, (_, idx) => {
                  const isCurrent = idx === page;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={`Slide ${idx + 1}`}
                      className={`${styles.sliderDash} ${
                        isCurrent ? styles.sliderDashActive : ""
                      }`}
                      onClick={() => jumpToPage(idx)}
                    />
                  );
                })}
              </div>

              {/* Refined Luxury Counter */}
              <div className={styles.sliderCounter} aria-hidden="true">
                <span className={styles.counterCurrent}>0{page + 1}</span>
                <span className={styles.counterSep}>/</span>
                <span className={styles.counterTotal}>0{totalPages}</span>
              </div>

              <div className={styles.dockDivider} aria-hidden="true" />

              <button
                type="button"
                className={`${styles.sliderNavBtn} ${
                  page === totalPages - 1 ? styles.sliderNavDisabled : ""
                }`}
                onClick={() => paginate(1)}
                disabled={page === totalPages - 1}
                aria-label="Next Slide"
              >
                <ChevronRight size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </FadeUp>
      )}

      {/* Lightbox — Synchronized with Active Branch Images */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={activeImages}
      />
    </>
  );
}
