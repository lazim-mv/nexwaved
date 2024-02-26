"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "./hero.module.css";
import { BtnComponent, SectionDescription } from "../ButtonComponent";
import { heroData } from "../../Content/content";
import New from "../LogoSlider/New";

const Hero = () => {
  const brandLogos = heroData.brandLogos;

  const repeatedImageSources = Array.from({ length: 100 }, () => [
    ...brandLogos,
  ]).flat();

  const texts = heroData.texts;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container1}>
        <h1>
          {heroData.sectionTitle} &nbsp;
          {texts.map((data, index) => (
            <span
              key={index}
              className={`${currentTextIndex === index ? styles.actived : ""}`}
            >
              {data}
            </span>
          ))}
        </h1>
        <SectionDescription
          sectionText={heroData.description}
          width="39.41798941798942vw"
        />
        <a href="pages/Services">
        <BtnComponent
          buttonText={heroData.btnText}
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
        />
        </a>
      </div>
      {/* <LogoSlider
        imageSources={repeatedImageSources}
        initialAnimateValue="-160%"
        hoverDuration="1700"
        duration="800"
      /> */}
      {/* <New /> */}
    </>
  );
};

export default Hero;
