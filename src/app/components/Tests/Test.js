"use client";
import React, { useEffect } from "react";
import styles from "./test.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { container5Data } from "@/app/Content/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Test = () => {
  const cardData = container5Data.cardData;
  const { windowSize, isSmallScreen } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    console.log("ScrollTrigger Plugin Registered");

    let sections = gsap.utils.toArray(".test_card__EQxzZ");
    console.log("Sections:", -100 * sections.length - 1);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".test_cards__AoMqq",
        start: "bottom bottom", 
        end: "bottom top",
        scrub: 1,
        snap: 1 / (sections.length - 1),
      },
    });

    console.log("ScrollTrigger Setup Complete");
  }, [ScrollTrigger]);

  return (
    <div className={styles.container}>
      <div className={styles.stickyContainer}>
        <SectionName sectionText={container5Data.sectionName} />
        <div className={styles.tittle}>
          <SectionTitle sectionText={container5Data.sectionTitle} />
          {!isSmallScreen && (
            <BtnComponent
              buttonText={container5Data.btnText}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          )}
        </div>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.container5Img}>
                <Image
                  unoptimized
                  src={data.img}
                  width={100}
                  height={0}
                  alt="ImageClients"
                />
              </div>
              <div className={styles.cardHeadingAndButton}>
                <h6>{data.cardHeading}</h6>
                <BtnComponent
                  buttonText={data.btnText}
                  borderColor="rgba(255, 255, 255, 0.6)"
                  bg="transparent"
                  color="#fff"
                  width={
                    isSmallScreen
                      ? "29.333333333333332vw"
                      : "8.862433862433862vw"
                  }
                  height="2.976190476190476vw"
                  arrow={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
