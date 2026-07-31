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
  ShieldCheck,
  Megaphone,
} from "lucide-react";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Etiquette.module.css";

const rules = [
  { icon: Droplets,              text: "Wipe down equipment after use." },
  { icon: Dumbbell,              text: "Re-rack weights and return dumbbells to their proper place." },
  { icon: Users,                 text: "Share equipment during busy hours; allow others to work in." },
  { icon: Smartphone,            text: "Avoid excessive phone use on machines or benches." },
  { icon: MoveHorizontal,        text: "Respect personal space and avoid crowding others." },
  { icon: Shirt,                 text: "Wear appropriate gym attire and clean shoes." },
  { icon: ArrowDownToLine,       text: "Do not drop weights unnecessarily unless the exercise requires it." },
  { icon: Clock,                 text: "Limit your time on equipment when others are waiting." },
  { icon: Bath,                  text: "Practice good hygiene — use deodorant and bring a towel." },
  { icon: MessageCircleQuestion, text: "Ask before giving advice to other gym-goers." },
  { icon: Handshake,             text: "Be courteous and respectful to staff and members." },
  { icon: ClipboardCheck,        text: "Follow gym-specific rules and safety guidelines." },
  { icon: ShoppingBag,           text: "Keep walkways clear of bags, bottles, and equipment." },
  { icon: Target,                text: "Focus on your workout and avoid distracting others." },
];

export default function Etiquette() {
  return (
    <section id="etiquette" className={styles.etiquette}>
      <Container>
        <FadeUp delay={0.1}>

          {/* ── Header ─────────────────────────────── */}
          <div className={styles.header}>
            <span className={styles.badge}>GYM ETIQUETTE</span>
            <h2 className={styles.title}>
              Rules That Build<br />
              <span className={styles.titleAccent}>a Great Gym</span>
            </h2>
          </div>

          {/* ── Callout Cards ──────────────────────── */}
          <div className={styles.callouts}>
            <div className={styles.policyBox}>
              <div className={styles.calloutIconWrap}>
                <ShieldCheck size={20} />
              </div>
              <div className={styles.calloutBody}>
                <p className={styles.calloutTag}>GYM POLICY</p>
                <p className={styles.calloutText}>
                  Dear Member, as per our gym policy, access is permitted{" "}
                  <strong>only once per day.</strong>
                </p>
              </div>
            </div>

            <div className={styles.noticeBox}>
              <div className={styles.calloutIconWrap}>
                <Megaphone size={20} />
              </div>
              <div className={styles.calloutBody}>
                <p className={styles.calloutTag}>IMPORTANT NOTICE</p>
                <p className={styles.calloutText}>
                  Please do <strong>not share personal numbers</strong> or
                  engage in financial transactions with staff.
                </p>
              </div>
            </div>
          </div>

          {/* ── Rules Grid ─────────────────────────── */}
          <div className={styles.rulesGrid}>
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div key={index} className={styles.ruleCard}>
                  <div className={styles.ruleLeft}>
                    <span className={styles.ruleNum}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.iconBox}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <p className={styles.ruleText}>{rule.text}</p>
                </div>
              );
            })}
          </div>

        </FadeUp>
      </Container>
    </section>
  );
}