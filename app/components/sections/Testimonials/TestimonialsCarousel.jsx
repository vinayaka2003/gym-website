"use client";

import { useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import styles from "./Testimonials.module.css";

// Parser to render **bold** markdown syntax
function formatReview(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={styles.highlight}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function getInitials(name) {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function TestimonialsCarousel({ testimonials }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const percentage = scrollLeft / maxScroll;
      const index = Math.min(
        testimonials.length - 1,
        Math.max(0, Math.round(percentage * (testimonials.length - 1)))
      );
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollTo = (index / (testimonials.length - 1)) * maxScroll;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.scrollContainer}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {testimonials.map((item) => (
          <div key={item.name} className={styles.card}>
            {/* Watermark Quote Icon */}
            <div className={styles.quoteIcon} aria-hidden="true">
              <Quote size={64} strokeWidth={1.5} />
            </div>

            <div>
              <div className={styles.cardHeader}>
                <div className={styles.stars} aria-label={`${item.rating} stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="none" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p className={styles.review}>
                &ldquo;{formatReview(item.review)}&rdquo;
              </p>
            </div>

            <div className={styles.memberInfo}>
              <div className={styles.avatar} aria-hidden="true">
                {getInitials(item.name)}
              </div>
              <div className={styles.meta}>
                <h4>{item.name}</h4>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navigationControls}>
        <div className={styles.pagination} role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((item, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to testimonial by ${item.name}`}
              className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ""}`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
