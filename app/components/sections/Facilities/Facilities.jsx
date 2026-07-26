import {
  Dumbbell,
  Activity,
  HeartPulse,
  Users,
  Lock,
  ShowerHead,
} from "lucide-react";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import SplitText from "../../ui/Motion/SplitText";
import styles from "./Facilities.module.css";

const facilities = [
  {
    icon: Users,
    title: "Personal Training",
    description: "Get expert guidance with customized workout routines tailored to your goals.",
  },
  {
    icon: Activity,
    title: "Nutrition Knowledge",
    description: "Learn the right nutrition for your body. Eat smart, achieve more.",
  },
  {
    icon: HeartPulse,
    title: "CrossFit & Yoga",
    description: "High-intensity group workouts, flexibility, stress reduction, and mental balance.",
  },
  {
    icon: Dumbbell,
    title: "Free General Training",
    description: "Access to complimentary baseline training sessions to build a strong base.",
  },
  {
    icon: ShowerHead,
    title: "Body Transformation",
    description: "Tracked weight-loss programs focused on sustainable, long-term health improvements.",
  },
  {
    icon: Lock,
    title: "Stronger Everyday",
    description: "Build strength, gain confidence, and become the best version of you.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className={styles.facilities}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>SERVICES OFFERED</span>

            <h2>
              <SplitText>Train Smart. Eat Right. Live Strong.</SplitText>
            </h2>

            <p>
              We&apos;re here to guide you every step of the way with professional training, nutrition guidance, and an environment that inspires success.
            </p>
          </div>
        </FadeUp>

        <div className={styles.grid}>
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <FadeUp key={facility.title} delay={0.15 + index * 0.1}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <Icon size={34} />
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}