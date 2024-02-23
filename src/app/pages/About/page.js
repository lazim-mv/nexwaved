"use client";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import React from "react";
import styles from "./about.module.css";
import { container1, container2, container3 } from "@/app/Content/aboutPage";
import Image from "next/image";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import RevealAffect from "@/app/components/GsapComponents/RevealAffect";

const page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <RevealAffect>
        <div className={`${styles.container} `}>
          <SectionTitle sectionText={container1.sectionTitle} />
          <Image
            unoptimized
            src={container1.img}
            width={100}
            height={0}
            alt="ImageClients"
            className={styles.aboutImg}
          />
          {/* <SectionDescription
          sectionText={container1.description1}
          width="66.13756613756614vw"
          margin="6.613756613756613vw 0 0 0"
        />

        <br />
        <SectionDescription
          sectionText={container1.description2}
          width="66.13756613756614vw"
        /> */}
          <div className={styles.descContainer}>
            <p>
              <span className={styles.span1}>{container1.description1}</span>
            </p>
            <br />
            <p>
              <span className={styles.span2}>{container1.description2}</span>
            </p>
          </div>
        </div>
      </RevealAffect>

      <RevealAffect>
        <div className={`${styles.container2} `}>
          <div className={styles.vision}>
            <SectionTitle sectionText={container2.vision.sectionTitle} />
            <SectionDescription sectionText={container2.vision.description} />
          </div>
          <div className={styles.mission}>
            <SectionTitle sectionText={container2.mission.sectionTitle} />
            <SectionDescription sectionText={container2.mission.description} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              unoptimized
              src={container2.img}
              width={100}
              height={0}
              alt="ImageClients"
              className={styles.visionMission}
            />
          </div>
        </div>
      </RevealAffect>

      <RevealAffect>
        <div className={`${styles.container3} `}>
          <SectionTitle sectionText={container3.sectionTitle} />
          {container3.cardData.map((data, index) => (
            <div className={styles.vCard} key={index}>
              <Image
                unoptimized
                src={data.img}
                width={100}
                height={0}
                alt="ImageClients"
                className={styles.icon}
              />
              <CardHeading sectionText={data.cardHeading} />
              <SectionDescription sectionText={data.description} />
            </div>
          ))}
        </div>
      </RevealAffect>
      <RevealAffect>
        <Contact page={true} />
      </RevealAffect>
      <Footer />
    </>
  );
};

export default page;
