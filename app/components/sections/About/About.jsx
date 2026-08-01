import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./About.module.css";

const features = [
  "Personal Training & Nutrition",
  "Free General Training",
  "CrossFit & Yoga",
  "Zumba & Mat Pilates",
  "Free Generalised Diet",
  "Body Transformation",
  "Functional & Sports Fitness",
  "Group Classes",
  "90 Days Transformation",
  "Injury Recovery Program",
  "Membership Freezing & Transfer",
  "3500 sqft. Premium Gym",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Image
                src="/images/about/about.jpg"
                alt="Goldstone Fitness Gym Interior - Premium Workout Equipment in Yelahanka, Bengaluru"
                width={550}
                height={650}
              />
            </div>

            <div className={styles.content}>
              <span className={styles.subtitle}>YOUR GOALS, OUR MISSION</span>

              <h2>
                Fitness isn&apos;t a destination
                <br />
                It&apos;s a way of life.
              </h2>

              <p>
                Every Rep Counts. Every Day Matters
              </p>

              <div className={styles.features}>
                {features.map((feature) => (
                  <div key={feature} className={styles.feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button href="#gallery">Visit Our Gym</Button>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}