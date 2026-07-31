"use client";

import { useState } from "react";
import {
  Dumbbell,
  Activity,
  HeartPulse,
  Users,
  Lock,
  ShowerHead,
  ChevronDown,
} from "lucide-react";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import SplitText from "../../ui/Motion/SplitText";
import styles from "./Facilities.module.css";

const facilities = [
  {
    icon: Users,
    title: "Personal Training",
    description: "Get expert guidance with fully customised workout routines tailored to your specific goals, with one-on-one trainer attention.",
  },
  {
    icon: Activity,
    title: "Nutrition Knowledge",
    description: "Learn the right nutrition for your body type. Includes free generalised diet plans and advanced diet counselling.",
  },
  {
    icon: HeartPulse,
    title: "CrossFit",
    description: "High-intensity functional training sessions. Schedule: Friday & Thursday — Morning 7–8 AM | Evening 7–8 PM.",
  },
  {
    icon: HeartPulse,
    title: "Yoga",
    description: "Improve flexibility, reduce stress and build mental balance. Schedule: Thursday & Saturday — Morning 7–8 AM.",
  },
  {
    icon: Dumbbell,
    title: "Free General Training",
    description: "Access to complimentary baseline training sessions open to all members to build a strong foundation.",
  },
  {
    icon: ShowerHead,
    title: "Body Transformation",
    description: "Structured 90-day weight-loss & gain programs focused on sustainable, long-term results.",
  },
  {
    icon: Lock,
    title: "Zumba, Aerobics & Stepper Dance",
    description: "Fun, high-energy group classes for all levels. Dynamic routines that keep you moving — never static, always exciting!",
  },
  {
    icon: Users,
    title: "Outdoor Activities",
    description: "Take your fitness outside! Explore dynamic outdoor training sessions and group challenges beyond the gym walls.",
  },
];

export default function Facilities() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="facilities" className={styles.facilities}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>SERVICES OFFERED</span>

            <p>
              We&apos;re here to guide you every step of the way with professional training, nutrition guidance, and an environment that inspires success.
            </p>
          </div>
        </FadeUp>

        <div className={styles.grid}>
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            const isExpanded = expandedIndex === index;

            return (
              <FadeUp key={facility.title} delay={0.15 + index * 0.05}>
                <div
                  className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.icon}>
                      <Icon size={34} />
                    </div>

                    <h3>{facility.title}</h3>

                    <ChevronDown size={18} className={styles.chevron} />
                  </div>

                  <p className={styles.description}>{facility.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}