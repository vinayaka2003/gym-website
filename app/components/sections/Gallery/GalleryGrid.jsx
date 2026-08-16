"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Gallery.module.css";

export default function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, i) => (
          <FadeUp key={i} delay={0.15 + i * 0.1}>
            <div
              className={styles.card}
              onClick={() => setIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open image: ${image.alt}`}
              onKeyDown={(e) => e.key === "Enter" && setIndex(i)}
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
    </>
  );
}
