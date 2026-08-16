import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import TestimonialsCarousel from "./TestimonialsCarousel";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Karishma Shylendra",
    rating: 5,
    role: "Active Member",
    review:
      "A **clean, well-equipped gym** with an **amazing coaching team**. The trainers are supportive, knowledgeable, and always motivate you to improve. It's also a **safe and welcoming environment for women**. Goldstone Fitness truly becomes your comfort space.",
  },
  {
    name: "Prerana",
    rating: 5,
    role: "Fitness Enthusiast",
    review:
      "**Premium equipment**, modern interiors, spotless cleanliness, and **professional trainers**. Whether it's cardio, strength training, or functional workouts, Goldstone Fitness offers everything needed to **achieve your fitness goals**.",
  },
  {
    name: "Partheesh Reddy",
    rating: 5,
    role: "Strength Trainer",
    review:
      "An exceptional gym with **modern equipment**, professional trainers, and an **energetic atmosphere**. The **personalized guidance** and positive community make every workout motivating. Highly recommended for anyone serious about fitness.",
  },
  {
    name: "Srikanth M",
    rating: 5,
    role: "Dedicated Member",
    review:
      "Goldstone Fitness Gym is hands down the **best gym experience** I've had! The equipment is **top-quality**, the environment is clean and motivating, and the **trainers genuinely care** about your progress. The vibe pushes you to give your best every single workout. **Highly recommend** to anyone serious about fitness!",
  },
  {
    name: "Shani Jasni",
    rating: 5,
    role: "Weight Loss Achiever",
    review:
      "One of the **best gyms** in the area. The trainers are knowledgeable, the equipment is well maintained, and the atmosphere is positive. I joined for **weight loss** and have already achieved **great results**.",
  },
  {
    name: "Manoj Kumar",
    rating: 5,
    role: "Strength Athlete",
    review:
      "I've been a member of Goldstone Fitness for 6 months now. The **trainers are top notch** and the **customized diets** worked wonders for my stamina and strength. **Cleanest gym in Bengaluru**!",
  },
  {
    name: "Rohan Sharma",
    rating: 5,
    role: "CrossFit Practitioner",
    review:
      "The **group zumba and crossfit** sessions are **highly energetic and addictive**. The coaches are super friendly and ensure everyone is doing workouts with the **right posture**. Best place to train!",
  },
  {
    name: "Ananya Sen",
    rating: 5,
    role: "Active Competitor",
    review:
      "As a beginner, I was intimidated to start, but the **general training team** guided me step-by-step. The **facilities are modern**, very clean, and the **equipment is state-of-the-art**.",
  },
  {
    name: "Vikram Malhotra",
    rating: 5,
    role: "VIP Member",
    review:
      "**Excellent equipment**, highly skilled trainers, and **spacious floors**. Highly recommend their **Personal Training program** if you want real, **sustainable transformation results**.",
  },
  {
    name: "Nisha Nair",
    rating: 5,
    role: "Yoga Practitioner",
    review:
      "Goldstone has a **great atmosphere**. The **yoga sessions are fantastic** for mental balance and flexibility. Supportive staff and **pristine locker rooms** make it a perfect gym experience.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-heading">
      <Container>
        <FadeUp delay={0.25}>
          <div className={styles.heading}>
            <span>TESTIMONIALS</span>
            <h2 id="testimonials-heading">What Our Members Say</h2>
            <div className={styles.headingDivider}></div>
            <p>
              Real experiences from people who train with us every day.
            </p>
          </div>

          {/* TestimonialsCarousel is a Client island — receives plain serializable data as props */}
          <TestimonialsCarousel testimonials={testimonials} />
        </FadeUp>
      </Container>
    </section>
  );
}