"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeUp from "../../ui/Motion/FadeUp";
import Container from "../../ui/Container/Container";
import styles from "./TrainingExperience.module.css";

/* ═══════════════════════════════════════════════════
   DATA (Individual 9 and 13 Points)
   ═══════════════════════════════════════════════════ */

const GENERAL_DATA = [
  { id: 'g1', title: "Dedicated Trainer Assignment", desc: "Management will assign a dedicated trainer to guide, monitor, and support each member throughout their fitness journey." },
  { id: 'g2', title: "Health & Safety Assessment", desc: "Your trainer will assess your general health condition, previous injuries, and relevant physical limitations before beginning your training." },
  { id: 'g3', title: "Free - Generalised Basic Training", desc: "Structured training guidance designed to help you build a healthy, active, and sustainable fitness routine." },
  { id: 'g4', title: "Proper Exercise Technique", desc: "Trainers will demonstrate and guide you through the correct exercise techniques to ensure safe and effective training." },
  { id: 'g5', title: "Form Correction", desc: "Continuous supervision and correction of exercise form to minimise the risk of injury and maximise workout effectiveness." },
  { id: 'g6', title: "Free - Basic Nutrition Guidance", desc: "Trainers will provide basic diet and nutrition suggestions to support your fitness goals and overall well-being." },
  { id: 'g7', title: "Member Follow-Up", desc: "Trainers will regularly follow up with irregular or inactive members to encourage consistency and maintain training discipline." },
  { id: 'g8', title: "Complete Workout Guidance", desc: "Training support covers the complete workout process—from warm-up and exercise execution to cool-down and final stretching." },
  { id: 'g9', title: "Continuous Support", desc: "General Training is not limited to one day or one week. Your assigned trainer will provide consistent guidance and support throughout the entire duration of your selected membership package, until the final day." }
];

const PERSONAL_DATA = [
  { id: 'p1', title: "Certified Trainer Assignment", desc: "A certified trainer is assigned by management to provide dedicated guidance and professional support throughout your training journey." },
  { id: 'p2', title: "Personalised Workout Plan", desc: "A structured workout programme designed specifically around your fitness level, goals, and individual requirements." },
  { id: 'p3', title: "Health & Fitness Assessment", desc: "Initial assessment to understand your current fitness level, health considerations, limitations, and training needs." },
  { id: 'p4', title: "Goal-Based Training", desc: "A focused training approach designed around your specific objectives, including fat loss, weight management, muscle development, strength, or overall fitness." },
  { id: 'p5', title: "Daily PT Session Follow-Up", desc: "Consistent daily follow-up to maintain session regularity, accountability, and training discipline." },
  { id: 'p6', title: "Proper Exercise Technique", desc: "Professional instruction and demonstration to help you perform exercises correctly and safely." },
  { id: 'p7', title: "Form Correction", desc: "Continuous monitoring and correction of exercise form to improve performance and minimise the risk of injury." },
  { id: 'p8', title: "Progress Tracking", desc: "Regular monitoring of key fitness parameters and training progress to evaluate results and make necessary adjustments." },
  { id: 'p9', title: "Personalised Diet Guidance", desc: "Practical nutrition guidance aligned with your individual fitness goals and training requirements." },
  { id: 'p10', title: "Progressive Workout Programming", desc: "Training intensity, exercises, and volume are progressively adjusted according to your development and performance." },
  { id: 'p11', title: "Regular Trainer Support", desc: "Ongoing professional guidance, motivation, accountability, and assistance throughout your PT programme." },
  { id: 'p12', title: "Flexible Training Approach", desc: "Training methods adapted to your schedule, fitness level, capabilities, and ongoing progress." },
  { id: 'p13', title: "Results-Oriented Training", desc: "A structured and disciplined approach focused on achieving measurable, sustainable, and long-term fitness results." }
];

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */

function Accordion({ item, index, isExpanded, onToggle }) {
  const number = (index + 1).toString().padStart(2, '0');
  
  return (
    <div className={`${styles.accordionItem} ${isExpanded ? styles.accordionItemActive : ''}`}>
      <button 
        className={styles.accordionHeader} 
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span className={styles.accordionNumber}>{number}</span>
        <span className={styles.accordionTitle}>{item.title}</span>
        <ChevronDown size={18} className={styles.accordionIcon} aria-hidden="true" />
      </button>
      
      <div className={styles.accordionContent}>
        <div className={styles.accordionInner}>
          <div>
            <div className={styles.reqItem}>
              <p className={styles.reqDesc}>{item.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrainingExperience() {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedGeneral, setExpandedGeneral] = useState(null);
  const [expandedPersonal, setExpandedPersonal] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Container>
        
        {/* ── HEADER ── */}
        <FadeUp>
          <div className={styles.header}>
            <span className={styles.eyebrow}>TRAINING GUIDANCE</span>
            <h2 className={styles.title}>MORE THAN JUST A WORKOUT.</h2>
            <p className={styles.subtitle}>
              The right guidance can make every session count. Choose the level of support that fits your fitness journey.
            </p>
          </div>
        </FadeUp>

        {/* ── MOBILE TABS ── */}
        <div className={styles.tabContainer}>
          <div className={styles.tabList} role="tablist">
            <div 
              className={styles.tabIndicator} 
              style={{ transform: activeTab === 'general' ? 'translateX(0)' : 'translateX(100%)' }}
            />
            <button 
              className={`${styles.tabButton} ${activeTab === 'general' ? styles.tabActiveGold : ''}`}
              role="tab" 
              aria-selected={activeTab === 'general'}
              onClick={() => setActiveTab('general')}
            >
              FREE GENERAL <span className={styles.tabBreak}>TRAINING</span>
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'personal' ? styles.tabActiveRed : ''}`}
              role="tab" 
              aria-selected={activeTab === 'personal'}
              onClick={() => setActiveTab('personal')}
            >
              PERSONAL <span className={styles.tabBreak}>TRAINING</span>
            </button>
          </div>
        </div>

        {/* ── EXPLORER GRID ── */}
        <div className={`${styles.contentGrid} ${activeTab === 'general' ? styles.gridShowGeneral : styles.gridShowPersonal}`}>
          
          {/* General Training Column */}
          <div className={`${styles.column} ${styles.colGold}`}>
            <div className={styles.columnHeader}>
              <span className={styles.columnEyebrow}>FREE - GENERAL TRAINING</span>
              <h3 className={styles.columnTitle}>COMPLETE FITNESS GUIDANCE</h3>
              <p className={styles.columnDesc}>Included with membership</p>
            </div>
            
            <div className={styles.accordionList}>
              {GENERAL_DATA.map((item, i) => (
                <Accordion 
                  key={item.id}
                  item={item}
                  index={i}
                  isExpanded={expandedGeneral === item.id}
                  onToggle={() => setExpandedGeneral(expandedGeneral === item.id ? null : item.id)}
                />
              ))}
            </div>
          </div>

          {/* Personal Training Column */}
          <div className={`${styles.column} ${styles.colRed}`}>
            <div className={styles.columnHeader}>
              <span className={styles.columnEyebrow}>PERSONAL TRAINING</span>
              <h3 className={styles.columnTitle}>Personalised Coaching</h3>
              <p className={styles.columnDesc}>Dedicated PT programme</p>
            </div>
            
            <div className={styles.accordionList}>
              {PERSONAL_DATA.map((item, i) => (
                <Accordion 
                  key={item.id}
                  item={item}
                  index={i}
                  isExpanded={expandedPersonal === item.id}
                  onToggle={() => setExpandedPersonal(expandedPersonal === item.id ? null : item.id)}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Simple Contact Link */}
        <FadeUp delay={0.2}>
          <div className={styles.ctaWrapper}>
            <a href="#contact" className={styles.simpleContactLink}>
              <span>Not sure which option is right for you? <strong className={styles.ctaHighlight}>Talk to our team</strong></span>
            </a>
          </div>
        </FadeUp>

      </Container>
    </div>
  );
}
