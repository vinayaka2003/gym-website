import Image from "next/image";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./About.module.css";

const features = [
  "Personal Training & Nutrition",
  "Free General Training",
  "CrossFit & Yoga",
  "Zumba & Mat Pilates",
  "Body Transformation",
  "Functional Fitness",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Image
                src="/images/about/about.png"
                alt="Gym Interior"
                width={550}
                height={650}
              />
            </div>

            <div className={styles.content}>
              <span className={styles.subtitle}>YOUR GOALS, OUR MISSION</span>

              <h2>
                Fitness isn&apos;t a destination —
                <br />
                It&apos;s a way of life.
              </h2>

              <p>
                Every Rep Counts. Every Day Matters
              </p>

              <div className={styles.features}>
                {features.map((feature) => (
                  <div key={feature} className={styles.feature}>
                    ✓ {feature}
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