"use client";

import { useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Karishma Shylendra",
    rating: 5,
    role: "Active Member",
    review:
      "A **clean, well-equipped gym** with an **amazing coaching team**. The trainers are supportive, knowledgeable, and always motivate you to improve. It's also a **safe and welcoming environment for women**. Goldstone Fitness truly becomes your comfort space.",
  },
  {
    name: "Prerana",
    rating: 5,
    role: "Fitness Enthusiast",
    review:
      "**Premium equipment**, modern interiors, spotless cleanliness, and **professional trainers**. Whether it's cardio, strength training, or functional workouts, Goldstone Fitness offers everything needed to **achieve your fitness goals**.",
  },
  {
    name: "Partheesh Reddy",
    rating: 5,
    role: "Strength Trainer",
    review:
      "An exceptional gym with **modern equipment**, professional trainers, and an **energetic atmosphere**. The **personalized guidance** and positive community make every workout motivating. Highly recommended for anyone serious about fitness.",
  },
  {
    name: "Benju Babu",
    rating: 5,
    role: "Dedicated Member",
    review:
      "Excellent gym with a motivating environment and **quality equipment**. Special thanks to **the coaching team** for their patience, **expert guidance**, and personalized workout plans that keep me consistent and confident.",
  },
  {
    name: "Shani Jasni",
    rating: 5,
    role: "Weight Loss Achiever",
    review:
      "One of the **best gyms** in the area. The trainers are knowledgeable, the equipment is well maintained, and the atmosphere is positive. I joined for **weight loss** and have already achieved **great results**.",
  },
  {
    name: "Manoj Kumar",
    rating: 5,
    role: "Strength Athlete",
    review:
      "I've been a member of Goldstone Fitness for 6 months now. The **trainers are top notch** and the **customized diets** worked wonders for my stamina and strength. **Cleanest gym in Bengaluru**!",
  },
  {
    name: "Rohan Sharma",
    rating: 5,
    role: "CrossFit Practitioner",
    review:
      "The **group zumba and crossfit** sessions are **highly energetic and addictive**. The coaches are super friendly and ensure everyone is doing workouts with the **right posture**. Best place to train!",
  },
  {
    name: "Ananya Sen",
    rating: 5,
    role: "Active Competitor",
    review:
      "As a beginner, I was intimidated to start, but the **general training team** guided me step-by-step. The **facilities are modern**, very clean, and the **equipment is state-of-the-art**.",
  },
  {
    name: "Vikram Malhotra",
    rating: 5,
    role: "VIP Member",
    review:
      "**Excellent equipment**, highly skilled trainers, and **spacious floors**. Highly recommend their **Personal Training program** if you want real, **sustainable transformation results**.",
  },
  {
    name: "Nisha Nair",
    rating: 5,
    role: "Yoga Practitioner",
    review:
      "Goldstone has a **great atmosphere**. The **yoga sessions are fantastic** for mental balance and flexibility. Supportive staff and **pristine locker rooms** make it a perfect gym experience.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync scroll position with active dot index
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

  // Helper function to extract initials
  const getInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Parser function to format bold text as styled strong elements
  const formatReview = (text) => {
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
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <Container>
        <FadeUp delay={0.25}>
          <div className={styles.heading}>
            <span>TESTIMONIALS</span>
            <h2>What Our Members Say</h2>
            <div className={styles.headingDivider}></div>
            <p>
              Real experiences from people who train with us every day.
            </p>
          </div>

          <div className={styles.carouselWrapper}>
            <div 
              className={styles.scrollContainer} 
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {testimonials.map((item) => (
                <div key={item.name} className={styles.card}>
                  {/* Watermark Quote Icon in Background */}
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <Quote size={64} strokeWidth={1.5} />
                  </div>

                  <div>
                    <div className={styles.cardHeader}>
                      <div className={styles.stars}>
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                        ))}
                      </div>
                    </div>

                    <p className={styles.review}>
                      &ldquo;{formatReview(item.review)}&rdquo;
                    </p>
                  </div>

                  <div className={styles.memberInfo}>
                    <div className={styles.avatar}>
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
              <div className={styles.pagination} role="tablist">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={activeIndex === index}
                    className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ""}`}
                    onClick={() => scrollToCard(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}