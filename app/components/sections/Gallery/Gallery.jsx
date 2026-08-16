import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import GalleryGrid from "./GalleryGrid";
import styles from "./Gallery.module.css";

const images = [
  { src: "/images/gallery/gallery-1.webp", alt: "Goldstone Fitness Gym - Premium Cardio Zone and Treadmills in Kattigenahalli" },
  { src: "/images/gallery/gallery-2.webp", alt: "Goldstone Fitness Gym - Heavy Strength Training & Dumbbell Section" },
  { src: "/images/gallery/gallery-3.webp", alt: "Goldstone Fitness Gym - Advanced Plate-Loaded Strength Equipment" },
  { src: "/images/gallery/gallery-4.webp", alt: "Goldstone Fitness Gym - CrossFit Functional Rig & Turf Workout Area" },
  { src: "/images/gallery/gallery-5.webp", alt: "Goldstone Fitness Gym - Group Workout Classes and Aerobics Space" },
  { src: "/images/gallery/gallery-6.webp", alt: "Goldstone Fitness Gym - Certified Personal Trainers & Coaching Area" },
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

        {/* GalleryGrid is a Client island — receives plain serializable image data as props */}
        <GalleryGrid images={images} />
      </Container>
    </section>
  );
}