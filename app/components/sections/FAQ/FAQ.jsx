"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Do you offer any free trial or day pass?",
    answer:
      "We do not offer free trials or day passes. All members are required to enroll with a paid membership plan to access our facilities.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Saturday from 5:00 AM to 10:00 PM and Sunday from 6:00 AM to 1:00 PM.",
  },
  {
    question: "Do you provide personal training?",
    answer:
      "Yes. Our certified trainers create personalised workout and nutrition plans based on your fitness goals.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, free parking is available for all members during gym hours.",
  },
  {
    question: "Do you have separate workout areas for women?",
    answer:
      "Yes. We provide a comfortable and secure environment with dedicated workout spaces where required.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.faq} id="faq">
      <Container>
        <FadeUp>
          <div className={styles.heading}>
            <span>FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Everything you need to know before joining Goldstone Fitness.
            </p>
          </div>

          <div className={styles.list}>
            {faqs.map((item, index) => (
              <div className={styles.item} key={index}>
                <button
                  className={styles.question}
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                >
                  <span>{item.question}</span>

                  {active === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                <div
                  className={`${styles.answer} ${
                    active === index ? styles.open : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}