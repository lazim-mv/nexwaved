"use client";
import React, { useEffect, useState } from "react";
import styles from "./loadinganimation.module.css";
import { CardHeading } from "../ButtonComponent";
import Image from "next/image";
import gsap from "gsap";

const LoadingAnimation = () => {
  const [count, setCount] = useState(0);
  const totalTime = 3000;
  const startTime = Date.now();

  useEffect(() => {
    const animateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < totalTime) {
        const progress = elapsedTime / totalTime;
        const newCount = Math.round(progress * 100);
        setCount(newCount);

        requestAnimationFrame(animateCount);
      } else {
        setCount(100);
      }
    };

    animateCount();

    return () => cancelAnimationFrame(animateCount);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".loadinganimation_white__Xk2Zb", {
      x: 0,
      width: "100vw",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        // Animation for .nav after .loadinganimation_white__Xk2Zb is complete
        gsap.to(".loadinganimation_nav__AXHYk", {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_white__Xk2Zb", {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_count__IogK3", {
          y: "110%",
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_container__qQ6yo", {
          display: "none",
          duration: 1,
          ease: "power2.inOut",
        });
      },
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.white}></div>
        <div className={styles.nav}>
          <div className={styles.logoContainer}>
            <Image
              src="/hLogo.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
          <CardHeading sectionText="design agency curating experiences" />
        </div>
        <h1 className={styles.count}>{count}</h1>
      </div>
    </>
  );
};

export default LoadingAnimation;
