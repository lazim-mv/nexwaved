"use client";
import React from "react";
import styles from "./container7.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { container7Data } from "@/app/Content/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";

const Container7 = () => {
  const cardData = container7Data.cardData;
  const { windowSize, isSmallScreen } = useWindowSize();
  return (
    <div className={styles.container}>
      <SectionName sectionText={container7Data.sectionName} />
      <div className={styles.tittle}>
        <SectionTitle sectionText={container7Data.sectionTitle} />
        {!isSmallScreen && (
          <BtnComponent
            buttonText={container7Data.btnText}
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
            <div className={styles.imgContainer}>
              <Image
                unoptimized
                src={data.img}
                width={100}
                height={0}
                alt="blogImage"
                className={styles.blogImage}
              />
            </div>
            <div className={styles.content}>
              <h6>{data.cardHeading}</h6>
              <a href="">{data.btnText}</a>
            </div>
          </div>
        ))}
      </div>
      {isSmallScreen && (
        <div className={styles.btnCenter}>
          <BtnComponent
            buttonText={container7Data.btnText}
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="transparent"
            color="#fff"
            arrow={true}
            margin="0 auto"
          />
        </div>
      )}
    </div>
  );
};

export default Container7;
