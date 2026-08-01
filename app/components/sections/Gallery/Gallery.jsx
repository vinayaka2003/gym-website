"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Gallery.module.css";

const images = [
  { src: "/images/Gallery/gallery-1.jpg", alt: "Goldstone Fitness Gym - Premium Cardio Zone and Treadmills in Yelahanka" },
  { src: "/images/Gallery/gallery-2.jpg", alt: "Goldstone Fitness Gym - Heavy Strength Training & Dumbbell Section" },
  { src: "/images/Gallery/gallery-3.jpg", alt: "Goldstone Fitness Gym - Advanced Plate-Loaded Strength Equipment" },
  { src: "/images/Gallery/gallery-4.jpg", alt: "Goldstone Fitness Gym - CrossFit Functional Rig & Turf Workout Area" },
  { src: "/images/Gallery/gallery-5.jpg", alt: "Goldstone Fitness Gym - Group Workout Classes and Aerobics Space" },
  { src: "/images/Gallery/gallery-6.jpg", alt: "Goldstone Fitness Gym - Certified Personal Trainers & Coaching Area" },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>GALLERY</span>

            <h2>Take A Look Inside</h2>


          </div>
        </FadeUp>

        <div className={styles.grid}>
          {images.map((image, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.1}>
              <div
                className={styles.card}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  loading="lazy"
                />

                <div className={styles.overlay}>
                  <span>View Image</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images}
        />
      </Container>
    </section>
  );
}