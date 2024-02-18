import React from "react";
import styles from "./container7.module.css";
import { SectionName, SectionTitle } from "../ButtonComponent";
import { container7Data } from "@/app/Content/content";
import Image from "next/image";

const Container7 = () => {
  const cardData = container7Data.cardData;
  return (
    <div className={styles.container}>
      <SectionName sectionText={container7Data.sectionName} />
      <SectionTitle
        sectionText={container7Data.sectionTitle}
        padding="1.5873015873015872vw 0 0 0"
      />
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <Image
              unoptimized
              src={data.img}
              width={100}
              height={0}
              alt="blogImage"
              className={styles.blogImage}
            />
            <div className={styles.content}>
              <h6>{data.cardHeading}</h6>
              <a href="">{data.btnText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container7;
