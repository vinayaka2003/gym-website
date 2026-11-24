"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
  const activeIndexRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  // Mouse drag state for smooth desktop drag
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (!cards || !cards.length) return;

    const scrollLeft = container.scrollLeft;

    // If at the very start, strictly card 0
    if (scrollLeft <= 20) {
      if (activeIndexRef.current !== 0) {
        activeIndexRef.current = 0;
        setActiveIndex(0);
      }
      return;
    }

    // If at the very end, strictly last card
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (scrollLeft >= maxScroll - 20) {
      const lastIndex = cards.length - 1;
      if (activeIndexRef.current !== lastIndex) {
        activeIndexRef.current = lastIndex;
        setActiveIndex(lastIndex);
      }
      return;
    }

    // Find card closest to current scroll position
    const baseOffset = cards[0].offsetLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const cardLeft = cards[i].offsetLeft - baseOffset;
      const distance = Math.abs(cardLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeIndexRef.current) {
      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  }, []);

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards && cards[index]) {
      const baseOffset = cards[0].offsetLeft;
      const targetScroll = cards[index].offsetLeft - baseOffset;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveIndex(index);
      activeIndexRef.current = index;
    }
  };

  // Mouse drag handlers for smooth desktop interactions
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStartRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
      scrollRef.current.style.scrollSnapType = "none";
    }
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = "x mandatory";
    }
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.scrollContainer}
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            className={`${styles.card} ${activeIndex === index ? styles.cardActive : ""}`}
            onClick={() => {
              if (!hasDraggedRef.current) {
                scrollToCard(index);
              }
            }}
          >
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

      {/* Clean stretching pill pagination (no arrows) */}
      <div className={styles.navigationControls}>
        <div className={styles.pagination} role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((item, index) => (
            <button
              key={index}
              role="tab"
              type="button"
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
