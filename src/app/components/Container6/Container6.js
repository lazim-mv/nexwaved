"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./container6.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container6Data } from "@/app/Content/content";
import Image from "next/image";

const Container6 = () => {
  const cardData = container6Data.cardData;

  const [scales, setScales] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initialize refs and scales based on the number of cards
    cardRefs.current = Array.from({ length: cardData.length }, (_, index) =>
      React.createRef()
    );
    setScales(Array.from({ length: cardData.length }, () => 1));
  }, [cardData.length]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    
    // console.log("Element dimensions:", rect);
    // console.log("Viewport dimensions:", {
    //   top: 0,
    //   left: 0,
    //   bottom: window.innerHeight || document.documentElement.clientHeight,
    //   right: window.innerWidth || document.documentElement.clientWidth,
    // });
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        // console.log(`Card ${index} dimensions:`, rect);
  
        const isInViewport = isElementInViewport(cardRef.current);
        console.log(`Card ${index} isInViewport:`, isInViewport);
  
        setScales((prevScales) => {
          const newScales = [...prevScales];
          newScales[index] = isInViewport ? 1.1 : 1;
          return newScales;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SectionName sectionText={container6Data.sectionName} />
        <SectionTitle
          sectionText={container6Data.sectionTitle}
          padding="1.984126984126984vw 0 0 0 "
        />
      </div>
      <div className={styles.right}>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div
              className={styles.card}
              ref={cardRefs.current[index]}
              key={index}
            >
              <SectionTitle
                sectionText={data.number}
                padding="0 0 var(--margin30) 0"
              />
              <div className={styles.imageContainer} key={index}>
                <Image
                  unoptimized
                  src={data.img}
                  width={100}
                  height={0}
                  alt="ImageClients"
                  className={styles.image}
                  style={{
                    transform: `scale(${scales[index]})`,
                    transition: "all .8s ease",
                  }}
                />
              </div>
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 0.6613756613756614vw 0"
              />
              <SectionDescription sectionText={data.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container6;
