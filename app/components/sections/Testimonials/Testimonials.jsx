"use client";

import { useState, useEffect } from "react";
import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import TestimonialsCarousel from "./TestimonialsCarousel";
import styles from "./Testimonials.module.css";

const testimonialsData = {
  kattigenahalli: [
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
      name: "Srikanth M",
      rating: 5,
      role: "Dedicated Member",
      review:
        "Goldstone Fitness Gym is hands down the **best gym experience** I've had! The equipment is **top-quality**, the environment is clean and motivating, and the **trainers genuinely care** about your progress. The vibe pushes you to give your best every single workout. **Highly recommend** to anyone serious about fitness!",
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
  ],
  jakkur: [
    {
      name: "Sanjana Nataraj",
      rating: 5,
      role: "Active Member",
      review:
        "Goldstone Fitness 02 is one of the **best places to transform yourself**, build confidence, and achieve your fitness goals. The atmosphere is energetic, motivating, and incredibly welcoming. The gym has **excellent equipment**, a great ambience, and a positive environment that inspires you to push beyond your limits. **Highly recommended!**",
    },
    {
      name: "Amruthamanjunath",
      rating: 5,
      role: "Dedicated Member",
      review:
        "Had a great experience at **Goldstone Fitness – 2nd Branch**! The gym has a **fantastic ambiance**, modern equipment, **excellent hygiene** and a well-maintained workout space. A great place for anyone looking to improve their fitness and maintain a healthy lifestyle. **Highly recommended!**",
    },
    {
      name: "Kamala Balu",
      rating: 5,
      role: "Fitness Member",
      review:
        "Goldstone Fitness 2nd branch in Jakkur is **one of the best gyms in the area**. The gym has **excellent equipment**, a clean and hygienic environment, and a **very motivating atmosphere**. The trainers are friendly, supportive, and knowledgeable.",
    },
    {
      name: "Deepika Deepu",
      rating: 5,
      role: "Beginner Fitness",
      review:
        "**Goldstone Fitness – 2nd Branch** is definitely one of the best places to begin your fitness journey! The gym has a **premium ambiance**, modern equipment, excellent cleanliness and a very **comfortable workout environment**.",
    },
    {
      name: "Latha Shivraj",
      rating: 5,
      role: "Regular Member",
      review:
        "One of the **best gyms in Jakkur**! Excellent atmosphere, **well-maintained equipment**, and a very clean environment. The trainers are **highly supportive, friendly, and knowledgeable**. They provide proper guidance and motivate you to push your limits.",
    },
    {
      name: "Shaik Irfan",
      rating: 5,
      role: "Strength Trainer",
      review:
        "Goldstone Fitness 02 is **one of the best gyms** I've experienced. The **atmosphere is motivating**, and the equipment is well maintained. The trainers are **very supportive, knowledgeable, and attentive** to proper posture.",
    },
    {
      name: "Nishanth S",
      rating: 5,
      role: "Fitness Enthusiast",
      review:
        "Goldstone Gym maintains **exceptional cleanliness** and an **aesthetically pleasing environment**, complemented by professional trainers and a **high-quality atmosphere** that makes it an ideal facility to frequent.",
    },
    {
      name: "Shabarish Gowda",
      rating: 5,
      role: "Personal Training Member",
      review:
        "Goldstone Fitness 2nd branch gym is **clean and well-maintained** with **modern fitness equipment**. The trainers provide **expert personal training** and dedicated guidance that has been truly helpful for my transformation.",
    },
    {
      name: "Sameeth Hegde",
      rating: 5,
      role: "Strength Athlete",
      review:
        "This is actually a **great gym and most recommended in Jakkur**! Wonderful trainers, **spotless equipment**, and a very clean, energetic environment is maintained throughout.",
    },
    {
      name: "V Vinay",
      rating: 5,
      role: "Active Member",
      review:
        "**Cleanest gym I have ever joined**! Great equipment, **friendly staff, zero intimidation**, and exceptional training guidance.",
    },
  ],
};

export default function Testimonials() {
  const [activeBranch, setActiveBranch] = useState("kattigenahalli");

  useEffect(() => {
    const checkInitial = () => {
      if (typeof window !== "undefined") {
        if (
          window.__SELECTED_BRANCH__ === 2 ||
          window.__SELECTED_BRANCH__ === "2" ||
          window.__SELECTED_BRANCH__ === "jakkur" ||
          window.location.hash.toLowerCase().includes("jakkur")
        ) {
          setActiveBranch("jakkur");
        }
      }
    };
    checkInitial();

    const handleSelectBranch = (e) => {
      const val = e?.detail;
      if (val === 2 || val === "2" || val === "jakkur") {
        setActiveBranch("jakkur");
      } else if (val === 1 || val === "1" || val === "kattigenahalli") {
        setActiveBranch("kattigenahalli");
      }
    };

    window.addEventListener("select-branch", handleSelectBranch);
    window.addEventListener("hashchange", checkInitial);

    return () => {
      window.removeEventListener("select-branch", handleSelectBranch);
      window.removeEventListener("hashchange", checkInitial);
    };
  }, []);

  const handleBranchSwitch = (branchKey) => {
    setActiveBranch(branchKey);
    if (typeof window !== "undefined") {
      window.__SELECTED_BRANCH__ = branchKey === "jakkur" ? 2 : 1;
      window.dispatchEvent(new CustomEvent("select-branch", { detail: branchKey }));
    }
  };

  const currentTestimonials =
    testimonialsData[activeBranch] || testimonialsData.kattigenahalli;

  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-heading">
      <Container>
        <FadeUp delay={0.25}>
          <div className={styles.heading}>
            <span>TESTIMONIALS</span>
            <h2 id="testimonials-heading">What Our Members Say</h2>
            <div className={styles.headingDivider}></div>
            <p>
              Real experiences from people who train with us every day.
            </p>
          </div>

          {/* ── Branch Switcher Tabs (Same style as Google Reviews & Training Experience) ── */}
          <div className={styles.tabContainer}>
            <div className={styles.tabList} role="tablist" aria-label="Select Branch for Testimonials">
              <div 
                className={styles.tabIndicator} 
                style={{ transform: activeBranch === 'kattigenahalli' ? 'translateX(0)' : 'translateX(100%)' }}
              />
              <button 
                className={`${styles.tabButton} ${activeBranch === 'kattigenahalli' ? styles.tabActiveGold : ''}`}
                onClick={() => handleBranchSwitch('kattigenahalli')}
                role="tab"
                aria-selected={activeBranch === 'kattigenahalli'}
              >
                Kattigenahalli
              </button>
              <button 
                className={`${styles.tabButton} ${activeBranch === 'jakkur' ? styles.tabActiveGold : ''}`}
                onClick={() => handleBranchSwitch('jakkur')}
                role="tab"
                aria-selected={activeBranch === 'jakkur'}
              >
                Jakkur
              </button>
            </div>
          </div>

          {/* Keyed carousel resets smoothly to card 0 upon branch switch */}
          <TestimonialsCarousel key={activeBranch} testimonials={currentTestimonials} />
        </FadeUp>
      </Container>
    </section>
  );
}
