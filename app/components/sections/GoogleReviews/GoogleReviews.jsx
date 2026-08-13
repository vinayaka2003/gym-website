"use client";

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./GoogleReviews.module.css";

const GOOGLE_REVIEW_URL = "https://g.page/r/CbWD-eKcp-8BEBM/review";

export default function GoogleReviews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      id="google-reviews"
      className={styles.googleReviews}
      aria-labelledby="google-reviews-title"
    >
      {/* Ambient background glows */}
      <div className={`${styles.glow} ${styles.glowLeft}`} aria-hidden="true"></div>
      <div className={`${styles.glow} ${styles.glowRight}`} aria-hidden="true"></div>

      {/* Floating Review Card 1 */}
      <div className={`${styles.floatingReview} ${styles.float1}`} aria-hidden="true">
        <div className={styles.floatingHeader}>
          <div className={styles.avatarMini}>KS</div>
          <div className={styles.floatingMeta}>
            <strong>Karishma Shylendra</strong>
            <span>Active Member</span>
          </div>
          <svg viewBox="0 0 24 24" width="14" height="14" className={styles.googleBadge}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
          </svg>
        </div>
        <div className={styles.floatingStars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill="#fbbf24" stroke="none" />
          ))}
        </div>
        <p className={styles.floatingText}>
          &ldquo;Clean, well-equipped gym with an amazing coaching team. supportive & motivative.&rdquo;
        </p>
      </div>

      {/* Floating Review Card 2 */}
      <div className={`${styles.floatingReview} ${styles.float2}`} aria-hidden="true">
        <div className={styles.floatingHeader}>
          <div className={styles.avatarMini}>BB</div>
          <div className={styles.floatingMeta}>
            <strong>Benju Babu</strong>
            <span>Dedicated Member</span>
          </div>
          <svg viewBox="0 0 24 24" width="14" height="14" className={styles.googleBadge}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
          </svg>
        </div>
        <div className={styles.floatingStars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill="#fbbf24" stroke="none" />
          ))}
        </div>
        <p className={styles.floatingText}>
          &ldquo;Excellent gym with Motivating environment, quality equipment & expert guidance.&rdquo;
        </p>
      </div>

      <Container>
        <FadeUp delay={0.2}>
          <div className={styles.grid}>
            {/* Left Column: Reviews Content */}
            <div className={styles.content}>
              <span className={styles.eyebrow}>GOOGLE REVIEWS</span>

              <h2 id="google-reviews-title" className={styles.heading}>
                Love Your Experience at Goldstone Fitness?
              </h2>

              <p className={styles.description}>
                Your feedback helps us grow. Share your experience with us on Google.
              </p>

              {/* Rating block */}
              <div className={styles.ratingBlock}>
                {/* Overall Score */}
                <div className={styles.ratingSummary}>
                  <div className={styles.ratingValue}>
                    <span>
                      {inView ? <CountUp start={0} end={4.9} decimals={1} duration={2} /> : "4.9"} ★
                    </span>
                  </div>
                  <div className={styles.stars} aria-label="5 stars rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#fbbf24"
                        stroke="none"
                      />
                    ))}
                  </div>
                  <span className={styles.reviewCount}>
                    {inView ? <CountUp start={0} end={418} duration={2.2} /> : "418"}+ Reviews on Google
                  </span>
                </div>

                {/* Rating Distribution Breakdown */}
                <div className={styles.breakdown}>
                  {[
                    { stars: 5, pct: 98 },
                    { stars: 4, pct: 1.5 },
                    { stars: 3, pct: 0.5 },
                    { stars: 2, pct: 0 },
                    { stars: 1, pct: 0 },
                  ].map((row) => (
                    <div key={row.stars} className={styles.breakdownRow}>
                      <span className={styles.breakdownLabel}>{row.stars}</span>
                      <div className={styles.barContainer}>
                        <div
                          className={styles.barFill}
                          style={{ width: inView ? `${row.pct}%` : "0%" }}
                        ></div>
                      </div>
                      <span className={styles.breakdownPct}>{row.pct > 0 ? `${row.pct}%` : "0%"}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Rating Pills */}
              <div className={styles.categories}>
                {[
                  { name: "Cleanliness", rating: "4.9" },
                  { name: "Coaching", rating: "4.9" },
                  { name: "Equipment", rating: "5.0" },
                  { name: "Atmosphere", rating: "4.9" },
                ].map((cat) => (
                  <div key={cat.name} className={styles.pill}>
                    <span className={styles.pillName}>{cat.name}</span>
                    <span className={styles.pillRating}>{cat.rating} ★</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA button */}
              <a
                href={GOOGLE_REVIEW_URL}
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write a Google Review for Goldstone Fitness (opens in a new tab)"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.googleColorIconInline}
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
                Write a Google Review
              </a>
            </div>

            {/* Right Column: Dynamic Layered QR Code Card */}
            <div className={styles.qrColumn}>
              <div className={styles.qrCardContainer}>
                {/* Rotating Stamp */}
                <div className={styles.rotatingStamp}>
                  <svg viewBox="0 0 100 100" width="85" height="85">
                    <path
                      id="stampCirclePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className={styles.stampText}>
                      <textPath href="#stampCirclePath" startOffset="0%">
                        • SCAN TO REVIEW • GOLDSTONE FITNESS •
                      </textPath>
                    </text>
                    <circle cx="50" cy="50" r="11" fill="#d4af37" />
                    <polygon points="50,43 52,48 58,49 54,53 55,59 50,56 45,59 46,53 42,49 48,48" fill="#ffffff" />
                  </svg>
                </div>

                {/* Layered peeking cards behind */}
                <div className={`${styles.bgCard} ${styles.bgCard2}`}></div>
                <div className={`${styles.bgCard} ${styles.bgCard1}`}></div>

                {/* Main Review Card */}
                <div className={styles.qrCard}>
                  <div className={styles.cardHeader}>
                    <svg
                      viewBox="0 0 24 24"
                      width="42"
                      height="42"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                    <div className={styles.cardHeaderTitle}>
                      <span>Review us</span>
                      <strong>on Google</strong>
                    </div>
                  </div>

                  <div className={styles.qrImageWrapper}>
                    <Image
                      src="/images/google-review-qr.png"
                      alt="Goldstone Fitness Google Review QR Code"
                      width={516}
                      height={516}
                      className={styles.qrImage}
                      priority
                    />
                  </div>

                  <p className={styles.qrCardText}>
                    Scan the above QR code with your smartphone and make our day by leaving us a review on Google!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
