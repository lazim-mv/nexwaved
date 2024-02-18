"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./container2.module.css";
import { container2Data } from "@/app/Content/content";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";

const Container2 = () => {
  const cardData = container2Data.cardData;

  const { windowSize, isSmallScreen } = useWindowSize();

  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index];
      return newVisible;
    });
  };

  return (
    <div className={styles.container}>
      <SectionName sectionText={container2Data.sectionName} />
      <div className={styles.tittle}>
        <SectionTitle
          sectionText={container2Data.sectionTitle}
          padding="1.5873015873015872vw 0 0 0"
        />
        {!isSmallScreen && (
          <BtnComponent
            buttonText={container2Data.btnText}
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="transparent"
            color="#fff"
            margin="1.5873015873015872vw 0 0 0"
            arrow={true}
          />
        )}
      </div>

      <div className={styles.container1}>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div
              className={styles.card}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className={styles.cardHeading}>
                <CardHeading sectionText={data.cardHeading} />
                <Image
                  unoptimized
                  src={container2Data.arrowImg}
                  width={100}
                  height={0}
                  alt="ImageClients"
                  className={styles.arrow}
                  onClick={() => handleClick(index)}
                  style={{
                    transform: answerVisible[index]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform .5s ease",
                  }}
                />
              </div>
              <div
                className={`${styles.descContainer} ${
                  answerVisible[index] ? styles.visible : ""
                }`}
              >
                <SectionDescription
                  sectionText={data.description}
                  width="49.338624338624335vw"
                />
              </div>
            </div>
          ))}
        </div>
        <Image
          unoptimized
          src={container2Data.img}
          width={100}
          height={0}
          alt="ImageClients"
          className={styles.serviceImg}
        />
      </div>
      {isSmallScreen && (
        <BtnComponent
          buttonText={container2Data.btnText}
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
          margin="8vw auto 0 auto"
          arrow={true}
        />
      )}
    </div>
  );
};

export default Container2;
