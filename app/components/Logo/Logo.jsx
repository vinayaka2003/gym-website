"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Logo.module.css";

export default function Logo() {
    const [darkLogo, setDarkLogo] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setDarkLogo((prev) => !prev);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.scene}>
            <div className={`${styles.coin} ${!darkLogo ? styles.isLight : ""}`}>
                {/* Front face: Dark Logo */}
                <div className={`${styles.face} ${styles.front}`}>
                    <Image
                        src="/logo/logo-dark.png"
                        alt="Goldstone Fitness Dark Logo"
                        width={48}
                        height={48}
                        priority
                    />
                </div>
                
                {/* Back face: Light Logo */}
                <div className={`${styles.face} ${styles.back}`}>
                    <Image
                        src="/logo/logo-light.png"
                        alt="Goldstone Fitness Light Logo"
                        width={48}
                        height={48}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}