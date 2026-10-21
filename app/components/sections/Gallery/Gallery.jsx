import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import GalleryGrid from "./GalleryGrid";
import styles from "./Gallery.module.css";

const kattigenahalliImages = [
  { src: "/images/gallery/gallery-1.webp", alt: "Goldstone Fitness Gym - Premium Cardio Zone and Treadmills in Kattigenahalli" },
  { src: "/images/gallery/gallery-2.webp", alt: "Goldstone Fitness Gym - Heavy Strength Training & Dumbbell Section" },
  { src: "/images/gallery/gallery-3.webp", alt: "Goldstone Fitness Gym - Advanced Plate-Loaded Strength Equipment" },
  { src: "/images/gallery/gallery-4.webp", alt: "Goldstone Fitness Gym - CrossFit Functional Rig & Turf Workout Area" },
  { src: "/images/gallery/gallery-5.webp", alt: "Goldstone Fitness Gym - Group Workout Classes and Aerobics Space" },
  { src: "/images/gallery/gallery-6.webp", alt: "Goldstone Fitness Gym - Certified Personal Trainers & Coaching Area" },
];

const jakkurImages = [
  { src: "/images/gallery/gallery2-4.webp", alt: "Goldstone Fitness Jakkur - Plate-Loaded Leg Press & Lower Body Strength" },
  { src: "/images/gallery/gallery2-1.webp", alt: "Goldstone Fitness Jakkur - Premium Olympic Sprint Turf & Functional Track" },
  { src: "/images/gallery/gallery2-2.webp", alt: "Goldstone Fitness Jakkur - Heavy Dumbbell Section & Free Weights Training Zone" },
  { src: "/images/gallery/gallery2-3.webp", alt: "Goldstone Fitness Jakkur - Advanced Pin-Selected Biomechanics Machines" },
  { src: "/images/gallery/gallery2-5.webp", alt: "Goldstone Fitness Jakkur - Custom Power Racks, Squat Stations & Olympic Barbells" },
  { src: "/images/gallery/gallery2-6.webp", alt: "Goldstone Fitness Jakkur - Commercial Cardio Suite, Incline Treadmills & Rowers" },
  { src: "/images/gallery/gallery2-7.webp", alt: "Goldstone Fitness Jakkur - Spacious Functional Movement & Kettlebell Training Floor" },
  { src: "/images/gallery/gallery2-8.webp", alt: "Goldstone Fitness Jakkur - Dedicated Glute & Hamstring Development Machines" },
  { src: "/images/gallery/gallery2-9.webp", alt: "Goldstone Fitness Jakkur - State-of-the-Art Lat Pulldown & Upper Body Cable Stations" },
  { src: "/images/gallery/gallery2-10.webp", alt: "Goldstone Fitness Jakkur - Elite Coaching Area & Dynamic Athletic Conditioning" },
  { src: "/images/gallery/gallery2-11.webp", alt: "Goldstone Fitness Jakkur - Premium Ambient Lighting & Modern Interior" },
  { src: "/images/gallery/gallery2-12.webp", alt: "Goldstone Fitness Jakkur - High-Density Rubber Impact Flooring & Weight Platforms" },
  { src: "/images/gallery/gallery2-13.webp", alt: "Goldstone Fitness Jakkur - Complete Dumbbell Suite Ranging to Heavy Weights" },
  { src: "/images/gallery/gallery2-14.webp", alt: "Goldstone Fitness Jakkur - Chest & Shoulder Machine Lineup" },
  { src: "/images/gallery/gallery2-15.webp", alt: "Goldstone Fitness Jakkur - Luxury Locker, Changing Facilities & Hydration Area" },
];

const branches = [
  {
    id: "kattigenahalli",
    branchNumber: 1,
    name: "Kattigenahalli Branch",
    shortName: "Kattigenahalli",
    isNew: false,
    tagline: "Operational Flagship • Bagalur Main Road",
    address: "#No 62, KFC Building, Dwaraka Nagar, Bagalur Main Road",
    badges: ["Cardio Zone", "CrossFit Rig", "Strength Deck"],
    images: kattigenahalliImages,
  },
  {
    id: "jakkur",
    branchNumber: 2,
    name: "Jakkur Branch",
    shortName: "Jakkur",
    isNew: true,
    tagline: "Brand New Branch • K V Jairam Road",
    address: "Above Kotak Mahindra Bank, K V Jairam Road, MCECHS Layout",
    badges: ["Olympic Turf", "Biomechanics Suites", "5,000+ Sq Ft"],
    images: jakkurImages,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>GALLERY</span>

            <h2>Take A Look Inside</h2>
          </div>
        </FadeUp>

        {/* GalleryGrid handles Branch 1 & Branch 2 tabs seamlessly */}
        <GalleryGrid branches={branches} images={kattigenahalliImages} />
      </Container>
    </section>
  );
}