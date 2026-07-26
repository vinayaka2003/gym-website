"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Hero.module.css";

import MagneticButton from "../../ui/MagneticButton/MagneticButton";

const WHATSAPP_URL =
  "https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym.";

const CURRENT_OFFER = "7 DAYS FREE TRIAL"; // Set to null to display the motivational line

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/gym.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Subtle Grain */}
      <div className={styles.grain}></div>

      {/* Glow Behind Heading */}
      <div className={styles.glow}></div>

      <Container>
        <FadeUp>
          <div className={styles.heroContent}>
            {/* Premium Badge / Offer Banner */}
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {CURRENT_OFFER ? (
                <>
                  <Sparkles size={16} className={styles.offerIcon} />
                  <span className={styles.offerText}>{CURRENT_OFFER}</span>
                </>
              ) : (
                <>
                  <span className={styles.badgeLine}></span>
                  WHERE STRENGTH MEETS DISCIPLINE
                  <span className={styles.badgeLine}></span>
                </>
              )}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              FIT <span className={styles.gold}>TODAY.</span><br />
              STRONG <span className={styles.gold}>FOREVER.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
            >
              Build strength, confidence and discipline with elite trainers,
              world-class equipment and personalised fitness programs designed
              to help you achieve your goals.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
            >
              <MagneticButton>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.joinBtn}
                >
                  JOIN MEMBERSHIP
                </a>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="secondary"
                  className={styles.secondaryBtn}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </FadeUp>
      </Container>

      {/* Scroll Indicator */}
    </section>
  );
}