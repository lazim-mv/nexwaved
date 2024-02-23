"use client";
import React from "react";
import styles from "./container4.module.css";
import Spline from "@splinetool/react-spline";

import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";

const Container4 = () => {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.splineObject}>
        <Spline scene="https://prod.spline.design/eaoXum74o6-cbhF4/scene.splinecode" />
      </div>
      <div className={styles.content}>
        <SectionTitle
          sectionText="artificial intelligence technologies"
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText="Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed. tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed."
          padding="1.984126984126984vw"
          width="35.550925925925924vw"
        />
        <BtnComponent
          buttonText="Know More"
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
          width={isSmallScreen ? "34vw" : "14vw"}
        />
      </div>
    </div>
  );
};

export default Container4;
