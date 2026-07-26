import { FaInstagram } from "react-icons/fa";
import styles from "./Trainers.module.css";

import FadeUp from "../../ui/Motion/FadeUp";
import SplitText from "../../ui/Motion/SplitText";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Strength Coach",
    experience: "8+ Years",
    image: "/trainers/trainer1.svg",
  },
  {
    name: "Priya Verma",
    role: "Fitness Expert",
    experience: "6+ Years",
    image: "/trainers/trainer2.svg",
  },
  {
    name: "Arjun Patel",
    role: "CrossFit Coach",
    experience: "10+ Years",
    image: "/trainers/trainer3.svg",
  },
];

export default function Trainers() {
  return (
    <section className={styles.section} id="trainers">
      <div className={styles.container}>
        <FadeUp delay={0.1}>
          <span className={styles.tag}>OUR TEAM</span>

          <h2>
            <SplitText>Meet Our Expert Trainers</SplitText>
          </h2>

          <p className={styles.subtitle}>
            Our certified coaches help you achieve your goals with
            personalized guidance and motivation.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {trainers.map((trainer, index) => (
            <FadeUp key={index} delay={0.15 + index * 0.1}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className={styles.image}
                    width={400}
                    height={500}
                    loading="lazy"
                  />
                </div>

                <div className={styles.content}>
                  <h3>{trainer.name}</h3>

                  <span>{trainer.role}</span>

                  <p>{trainer.experience}</p>

                  <div className={styles.socials}>
                    <a href="https://instagram.com/goldstone_fitness_01" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}