"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Stats.module.css";

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Happy Members",
  },
  {
    number: 15,
    suffix: "+",
    title: "Certified Trainers",
  },
  {
    number: 8,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Open Support",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div
            key={index}
            className={styles.card}
          >
            <h2>
              {inView && (
                <CountUp
                  end={item.number}
                  duration={2}
                />
              )}
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}