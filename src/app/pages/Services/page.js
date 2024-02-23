"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./services.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import { container1, container2 } from "@/app/Content/servicesPage";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import Image from "next/image";
import Container6 from "@/app/components/Container6/Container6";
import Container3 from "@/app/components/Container3/Container3";
import Footer from "@/app/components/Footer/Footer";
import Contact from "@/app/components/Contact/Contact";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@/app/utils/windowSize";
import ServiceImageAffect from "@/app/components/GsapComponents/ServiceImageAffect";
import RevealAffect from "@/app/components/GsapComponents/RevealAffect";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const { windowSize, isSmallScreen } = useWindowSize();

  const lenis = useLenis(({ scroll }) => {
    console.log(isSmallScreen, "is");
    // console.log('Scroll information:', scroll);
  });

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container}>
        <SectionTitle sectionText={container1.sectionTitle} />
        <SectionDescription sectionText={container1.description} />
        {/* <hr /> */}
      </div>

      <div className={styles.container2}>
        <div className={styles.button}>
          {container2.cardData.map((buttonInfo, index) => (
            <a
              key={index}
              href={`#${buttonInfo.id}`}
              onClick={() =>
                lenis.scrollTo(`#${buttonInfo.id}`, { lerp: 0.05 })
              }
            >
              <BtnComponent
                buttonText={buttonInfo.btnText}
                borderColor="rgba(255, 255, 255, 0.6)"
                bg="transparent"
                color="#fff"
                arrow={true}
              />
            </a>
          ))}
        </div>

        <div
          className={styles.cards}
          // ref={cards}
        >
          {container2.cardData.map((data, index) => (
            <div className={styles.card} key={index} id={data.id}>
              <div className={styles.serviceImgContainer}>
                <RevealAffect>
                  <ServiceImageAffect
                    speed={isSmallScreen ? 0.8 : 1.2}
                    height={isSmallScreen ? "80vw" : "auto"}
                    width={isSmallScreen ? "87.2vw" : "auto"}
                  >
                    <Image
                      // ref={(ref) => (cardImg.current[index] = ref)}
                      unoptimized
                      src={data.img}
                      priority={true}
                      width={100}
                      height={0}
                      alt="ImageClients"
                      className={styles.serviceImg}
                    />
                  </ServiceImageAffect>
                </RevealAffect>
              </div>
              <SectionTitle sectionText={data.sectionTitle} />
              <div className={styles.descContainer}>
                <SectionDescription sectionText={data.description1} />
                <SectionDescription sectionText={data.description2} />
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <RevealAffect endTop="10%">
        <Container6 />
      </RevealAffect>
      <RevealAffect>
        <Container3 />
      </RevealAffect>
      <RevealAffect>
        <Contact page={true} />
      </RevealAffect>
      <Footer />
    </>
  );
};

export default Page;
