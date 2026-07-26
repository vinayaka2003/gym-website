import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Karishma Shylendra",
    rating: 5,
    review:
      "A clean, well-equipped gym with an amazing coaching team. The trainers are supportive, knowledgeable, and always motivate you to improve. It's also a safe and welcoming environment for women. Goldstone Fitness truly becomes your comfort space.",
  },
  {
    name: "Prerana",
    rating: 5,
    review:
      "Premium equipment, modern interiors, spotless cleanliness, and professional trainers. Whether it's cardio, strength training, or functional workouts, Goldstone Fitness offers everything needed to achieve your fitness goals.",
  },
  {
    name: "Partheesh Reddy",
    rating: 5,
    review:
      "An exceptional gym with modern equipment, professional trainers, and an energetic atmosphere. The personalized guidance and positive community make every workout motivating. Highly recommended for anyone serious about fitness.",
  },
  {
    name: "Benju Babu",
    rating: 5,
    review:
      "Excellent gym with a motivating environment and quality equipment. Special thanks to Coach Srinivas for his patience, expert guidance, and personalized workout plans that keep me consistent and confident.",
  },
  {
    name: "Shani Jasni",
    rating: 5,
    review:
      "One of the best gyms in the area. The trainers are knowledgeable, the equipment is well maintained, and the atmosphere is positive. I joined for weight loss and have already achieved great results.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <Container>
        <FadeUp delay={0.25}>
          <div className={styles.heading}>
          <span>TESTIMONIALS</span>

          <h2>What Our Members Say</h2>

          <p>
            Real experiences from people who train with us every day.
          </p>
        </div>

          <div className={styles.grid}>
            {testimonials.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.stars}>
                {"★".repeat(item.rating)}
              </div>

              <p className={styles.review}>
                &ldquo;{item.review}&rdquo;
              </p>

              <h3>{item.name}</h3>
            </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}