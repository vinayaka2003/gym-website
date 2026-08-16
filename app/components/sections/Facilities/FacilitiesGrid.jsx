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
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Facilities.module.css";

// Resolve icon name strings → Lucide components (avoids passing functions across Server→Client boundary)
const ICON_MAP = {
  Dumbbell,
  Activity,
  HeartPulse,
  Users,
  Lock,
  ShowerHead,
};

export default function FacilitiesGrid({ facilities }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.grid}>
      {facilities.map((facility, index) => {
        const Icon = ICON_MAP[facility.iconName] ?? Dumbbell;
        const isExpanded = expandedIndex === index;

        return (
          <FadeUp key={facility.title} delay={0.15 + index * 0.05}>
            <div
              className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
              onClick={() => toggleExpand(index)}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`Toggle ${facility.title} details`}
              onKeyDown={(e) => e.key === "Enter" && toggleExpand(index)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>
                  <Icon size={34} aria-hidden="true" />
                </div>

                <h3>{facility.title}</h3>

                <ChevronDown size={18} className={styles.chevron} aria-hidden="true" />
              </div>

              <p className={styles.description}>{facility.description}</p>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
