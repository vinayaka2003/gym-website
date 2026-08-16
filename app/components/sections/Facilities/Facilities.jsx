import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import FacilitiesGrid from "./FacilitiesGrid";
import styles from "./Facilities.module.css";

const facilities = [
  {
    iconName: "Users",
    title: "Personal Training",
    description: "Get expert guidance with fully customised workout routines tailored to your specific goals, with one-on-one trainer attention.",
  },
  {
    iconName: "Activity",
    title: "Nutrition Knowledge",
    description: "Learn the right nutrition for your body type. Includes free generalised diet plans and advanced diet counselling.",
  },
  {
    iconName: "HeartPulse",
    title: "CrossFit",
    description: "High-intensity functional training sessions. Schedule: Friday & Thursday — Morning 7–8 AM | Evening 7–8 PM.",
  },
  {
    iconName: "HeartPulse",
    title: "Yoga",
    description: "Improve flexibility, reduce stress and build mental balance. Schedule: Thursday & Saturday — Morning 7–8 AM.",
  },
  {
    iconName: "Dumbbell",
    title: "Free General Training",
    description: "Access to complimentary baseline training sessions open to all members to build a strong foundation.",
  },
  {
    iconName: "ShowerHead",
    title: "Body Transformation",
    description: "Structured 90-day weight-loss & gain programs focused on sustainable, long-term results.",
  },
  {
    iconName: "Lock",
    title: "Zumba, Aerobics & Stepper Dance",
    description: "Fun, high-energy group classes for all levels. Dynamic routines that keep you moving — never static, always exciting!",
  },
  {
    iconName: "Users",
    title: "Outdoor Activities",
    description: "Take your fitness outside! Explore dynamic outdoor training sessions and group challenges beyond the gym walls.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className={styles.facilities}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>SERVICES OFFERED</span>

            <h2>Our Premium Fitness Services</h2>

            <p>
              We&apos;re here to guide you every step of the way with professional training, nutrition guidance, and an environment that inspires success.
            </p>
          </div>
        </FadeUp>

        {/* FacilitiesGrid is a Client island — receives static data as props */}
        <FacilitiesGrid facilities={facilities} />
      </Container>
    </section>
  );
}