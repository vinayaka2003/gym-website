"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import { trackGAEvent } from "../../ui/Analytics/track";
import styles from "./Hero.module.css";

const WHATSAPP_URL =
  "https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym.";

// One stagger sequence instead of four separately-timed motion.divs —
// badge, headline, rule, copy, and actions read as a single reveal.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Delay loading video to optimize initial LCP
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : item;

  return (
    <section id="home" className={styles.hero}>
      {/* Background Media with Poster Fallback */}
      {reduceMotion || !loadVideo ? (
        <Image
          src="/images/gallery/gallery-1.webp"
          alt="Goldstone Fitness Gym Background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/gallery/gallery-1.webp"
          className={styles.bgVideo}
        >
          <source src="/videos/gym.mp4" type="video/mp4" />
        </video>
      )}

      {/* Mask Overlay */}
      <div className={styles.overlay} aria-hidden="true"></div>

      {/* Subtle Grain */}
      <div className={styles.grain} aria-hidden="true"></div>

      <Container>
        <FadeUp>
          <motion.div
            className={styles.heroContent}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Promotional Ticker */}
            <motion.div className={styles.ticker} variants={variants}>
              <div className={styles.tickerTrack}>
                <div className={styles.tickerGroup}>
                  <span>INDEPENDENCE MONTH — </span>
                  <span className={styles.tickerHighlight}>10% OFF</span>
                  <span> MEMBERSHIPS — TRAIN HARD. STAY GOLDEN. </span>
                  <span className={styles.tickerArrow}>→</span>
                </div>
                <div className={styles.tickerGroup} data-marquee-hidden="true" aria-hidden="true">
                  <span>INDEPENDENCE MONTH — </span>
                  <span className={styles.tickerHighlight}>10% OFF</span>
                  <span> MEMBERSHIPS — TRAIN HARD. STAY GOLDEN. </span>
                  <span className={styles.tickerArrow}>→</span>
                </div>
                <div className={styles.tickerGroup} data-marquee-hidden="true" aria-hidden="true">
                  <span>INDEPENDENCE MONTH — </span>
                  <span className={styles.tickerHighlight}>10% OFF</span>
                  <span> MEMBERSHIPS — TRAIN HARD. STAY GOLDEN. </span>
                  <span className={styles.tickerArrow}>→</span>
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={variants}>
              FIT <span className={styles.gold}>TODAY.</span>
              <br />
              STRONG <span className={styles.gold}>FOREVER.</span>
            </motion.h1>

            {/* Chisel rule */}
            <motion.div
              className={styles.divider}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
            />

            {/* Description */}
            <motion.p variants={variants}>
              Elite coaching, competition-grade equipment, and programming
              built around your numbers not a franchise template.
            </motion.p>

            {/* Buttons & Discover More */}
            <motion.div className={styles.actionsRow} variants={variants}>
              <div className={styles.buttons}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                  aria-label="Book a paid session on WhatsApp"
                  onClick={() => trackGAEvent("booking_click", { location: "hero_primary" })}
                >
                  Book a Paid Session
                </a>

                <a
                  href="#facilities"
                  className={styles.outlineBtn}
                  aria-label="See the facility"
                >
                  See the Facility
                </a>
              </div>

            </motion.div>
          </motion.div>
        </FadeUp>
      </Container>

      {/* Pulsing scroll-down indicator at the bottom center */}
      <a
        href="#about"
        className={styles.scrollDownIndicator}
        aria-label="Scroll down to about section"
      >
        <ChevronDown size={28} className={styles.scrollArrow} />
      </a>
    </section>
  );
}
