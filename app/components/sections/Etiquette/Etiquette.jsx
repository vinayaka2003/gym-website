import {
  Droplets,
  Dumbbell,
  Users,
  Smartphone,
  MoveHorizontal,
  Shirt,
  ArrowDownToLine,
  Clock,
  Bath,
  MessageCircleQuestion,
  Handshake,
  ClipboardCheck,
  ShoppingBag,
  Target,
} from "lucide-react";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Etiquette.module.css";

const rules = [
  {
    icon: Droplets,
    text: "Wipe down equipment after use.",
  },
  {
    icon: Dumbbell,
    text: "Re-rack weights and return dumbbells to their proper place.",
  },
  {
    icon: Users,
    text: "Share equipment during busy hours; allow others to work in.",
  },
  {
    icon: Smartphone,
    text: "Avoid excessive phone use on machines or benches.",
  },
  {
    icon: MoveHorizontal,
    text: "Respect personal space and avoid crowding others.",
  },
  {
    icon: Shirt,
    text: "Wear appropriate gym attire and clean shoes.",
  },
  {
    icon: ArrowDownToLine,
    text: "Do not drop weights unnecessarily unless the exercise requires it.",
  },
  {
    icon: Clock,
    text: "Limit your time on equipment when others are waiting.",
  },
  {
    icon: Bath,
    text: "Practice good hygiene—use deodorant and bring a towel.",
  },
  {
    icon: MessageCircleQuestion,
    text: "Ask before giving advice to other gym-goers.",
  },
  {
    icon: Handshake,
    text: "Be courteous and respectful to staff and members.",
  },
  {
    icon: ClipboardCheck,
    text: "Follow gym-specific rules and safety guidelines.",
  },
  {
    icon: ShoppingBag,
    text: "Keep walkways clear of bags, bottles, and equipment.",
  },
  {
    icon: Target,
    text: "Focus on your workout and avoid distracting others.",
  },
];

export default function Etiquette() {
  return (
    <section id="etiquette" className={styles.etiquette}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h2 className={styles.title}>GYM ETIQUETTE</h2>
              <p className={styles.subtitle}>
                RESPECT • CONSIDERATE • FOCUSED
              </p>
            </div>

            <div className={styles.banner}>
              <h3>A GREAT GYM STARTS WITH GREAT MEMBERS</h3>

              <div className={styles.policyBox}>
                <p>
                  <strong>DEAR MEMBER,</strong> as per our gym policy, access is
                  permitted <strong>ONLY ONCE PER DAY.</strong>
                </p>
              </div>
            </div>

            <div className={styles.rulesGrid}>
              {rules.map((rule, index) => {
                const Icon = rule.icon;

                return (
                  <div key={index} className={styles.ruleItem}>
                    <div className={styles.iconBox}>
                      <Icon size={24} />
                    </div>

                    <p>{rule.text}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.footer}>
              <p>BE RESPECTFUL. BE CONSIDERATE.</p>
              <h3>BE THE REASON WE ALL WIN.</h3>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}