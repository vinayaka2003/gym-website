"use client";

import CountUpClient from "../../ui/CountUpClient/CountUpClient";
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
    number: 2,
    suffix: " Locations",
    title: "Kattigenahalli & Jakkur",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2>
              <CountUpClient
                end={item.number}
                duration={2}
                staticValue={String(item.number)}
              />
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}