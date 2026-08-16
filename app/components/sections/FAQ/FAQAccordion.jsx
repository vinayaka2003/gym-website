"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

export default function FAQAccordion({ faqs }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.list}>
      {faqs.map((item, index) => {
        const isOpen = active === index;
        return (
          <div
            className={`${styles.item} ${isOpen ? styles.activeItem : ""}`}
            key={index}
          >
            <button
              className={styles.question}
              onClick={() => setActive(active === index ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
              />
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`${styles.answerWrapper} ${isOpen ? styles.answerExpanded : ""}`}
            >
              <div className={styles.answerInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
