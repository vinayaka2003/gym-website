import { Check } from "lucide-react";
import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    features: [
      "Gym Access",
      "Cardio Zone",
      "Locker Facility",
      "Free Trial Session",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "₹1,999",
    period: "/month",
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Consultation",
      "Unlimited Group Classes",
      "Body Composition Analysis",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "₹2,999",
    period: "/month",
    features: [
      "Everything in Premium",
      "1-on-1 Coaching",
      "Priority Support",
      "Premium Locker",
      "Nutrition Monitoring",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>MEMBERSHIP</span>

            <h2>Choose Your Fitness Plan</h2>

            <p>
              Flexible membership plans designed for everyone. <br/>
              <strong>Special Offer: Get 9% OFF on memberships with International Yoga Day sessions (7:15 AM – 8:30 AM).</strong>
            </p>
          </div>
        </FadeUp>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <FadeUp key={plan.name} delay={0.15 + index * 0.1}>
              <div
                className={`${styles.card} ${
                  plan.featured ? styles.featured : ""
                }`}
              >
                {plan.featured && (
                  <div className={styles.badge}>
                    Most Popular
                  </div>
                )}

                <h3>{plan.name}</h3>

                <div className={styles.price}>
                  {plan.price}
                  <span>{plan.period}</span>
                </div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/918867441378?text=Hi%20Goldstone%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button>Join Now</button>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}