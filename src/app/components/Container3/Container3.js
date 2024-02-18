"use client";

import React, { useState } from "react";
import styles from "./container3.module.css";
import {
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container3Data } from "@/app/Content/content";
import Image from "next/image";
import ArrowButtons from "../ArrowButton/ArrowButtons";
import { useWindowSize } from "@/app/utils/windowSize";

const Container3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();
  const cardData = container3Data.cardData;

  const totalData = container3Data.cardData.length;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 5;
  const dynamicValue = isSmallScreen ? 62 : 100;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  console.log(activeIndex);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container3Data.sectionName} />
        <div className={styles.titleAndButton}>
          <SectionTitle sectionText={container3Data.sectionTitle} />
          <ArrowButtons
            prevImage={prevImage}
            nextImage={nextImage}
            margin="4.62962962962963vw 0 0 0"
          />
        </div>
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: `transform 0.8s ease, ${
                !isSmallScreen ? "width" : "height"
              } 0.8s ease`,
            }}
          >
            <SectionDescription sectionText={data.description} />
            <div className={styles.profile}>
              <Image
                unoptimized
                src={data.img}
                width={100}
                height={0}
                alt="ImageClients"
                className={styles.profileImg}
              />
              <div>
                <h6>{data.name}</h6>
                <p>{data.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container3;
