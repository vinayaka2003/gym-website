import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import FAQAccordion from "./FAQAccordion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Can I visit the gym before becoming a member?",
    answer:
      "Absolutely. You can visit your preferred Goldstone Fitness location to explore the facilities, understand the environment, and speak with our team before choosing a membership.",
  },
  {
    question: "What are your gym timings?",
    answer:
      "Our timings are designed to give you the flexibility to train around your daily schedule. Please check your preferred location for its current opening and closing hours.",
  },
  {
    question: "What does my membership include?",
    answer:
      "Your membership gives you access to the workout facilities and equipment at your chosen location. Membership inclusions may vary by plan, so our team can help you choose the right option.",
  },
  {
    question: "Do I need to be experienced to join?",
    answer:
      "Not at all. Goldstone Fitness welcomes everyone—from complete beginners to experienced lifters. Our team can help you get started with the right approach for your fitness level and goals.",
  },
  {
    question: "Can I get a personal trainer?",
    answer:
      "Yes. Personal training is available for members who want individual attention, structured workouts, and guidance tailored to their fitness goals.",
  },
  {
    question: "Can someone help me plan my workouts?",
    answer:
      "Yes. Our fitness team can help you understand the equipment, exercises, and training approach suited to your goals, so you can train with greater confidence and consistency.",
  },
  {
    question: "Is parking available at the gym?",
    answer:
      "Parking availability varies depending on the location. Please contact your preferred Goldstone Fitness branch for specific parking information.",
  },
  {
    question: "Do you have facilities for women?",
    answer:
      "Yes. We strive to provide a comfortable and welcoming environment for everyone. Facilities and arrangements may vary by location, so our team can provide details for your preferred branch.",
  },
  {
    question: "Can I choose a different Goldstone Fitness location?",
    answer:
      "Our locations are designed to make training more convenient. Speak with our team about the locations and membership options available to you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply choose your preferred Goldstone Fitness location and get in touch with our team. We'll guide you through the available memberships and help you take the first step toward your fitness goals.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-heading">
      <Container>
        <FadeUp>
          <div className={styles.heading}>
            <span>FAQ</span>

            <h2 id="faq-heading">Frequently Asked Questions</h2>

            <p>
              Everything you need to know before you get started.
            </p>
          </div>

          {/* FAQAccordion is a Client island — receives static data as props */}
          <FAQAccordion faqs={faqs} />

          <div className={styles.conversion}>
            <p>
              Still have a question? Our team is here to help.{" "}
              <a href="#contact" className={styles.contactLink}>
                Get in touch &rarr;
              </a>
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}