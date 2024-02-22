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
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollMagic from "scrollmagic";

// gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  // const cardImg = useRef([]);
  // let lastScrollTop;

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Scroll-triggered animation using GSAP
  //   const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  //   container2.cardData.forEach((data, index) => {
  //     tl.from(`.services_card__3ileb`, { opacity: 1, y: 100, duration: 1 });

  //     gsap.to(`.services_serviceImg__6oB7L`, {
  //       y: () => {
  //         const rect = document
  //           .querySelector(`.services_serviceImg__6oB7L`)
  //           .getBoundingClientRect();
  //         const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
  //         const scrollDirection = lastScrollTop > rect.top ? "down" : "up";

  //         let translateValue =
  //           parseFloat(
  //             document.querySelector(`.services_serviceImg__6oB7L`).dataset
  //               .translateValue
  //           ) || 0;

  //         if (isInView) {
  //           translateValue += scrollDirection === "down" ? 0.8 : -0.8;
  //         }

  //         translateValue = Math.max(-200, Math.min(0, translateValue));

  //         document.querySelector(
  //           `.services_serviceImg__6oB7L`
  //         ).style.transform = `translateY(${translateValue}px) translateZ(0px)`;
  //         document.querySelector(
  //           `.services_serviceImg__6oB7L`
  //         ).dataset.translateValue = translateValue.toString();
  //           console.log(translateValue,"tl")
  //         return translateValue;
  //       },
  //       scrollTrigger: {
  //         trigger: `.services_serviceImg__6oB7L`,
  //         start: "top 50%",
  //         end: "bottom 20%",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   });

  //   // Cleanup
  //   return () => {
  //     tl.kill(); // Kill the timeline on component unmount
  //   };
  // }, [lastScrollTop]);

  // const onScroll = useCallback(() => {
  //   let scrollTopPosition;

  //   if (typeof window !== "undefined") {
  //     scrollTopPosition =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //   }

  //   // Determine the scroll direction
  //   const scrollDirection = scrollTopPosition > lastScrollTop ? "down" : "up";

  //   if (Array.isArray(cardImg.current)) {
  //     cardImg.current.forEach((imgElement, index) => {
  //       const rect = imgElement.getBoundingClientRect();
  //       const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

  //       if (isInView) {
  //         // Adjust translateValue based on scroll direction
  //         let translateValue = imgElement.dataset.translateValue || 0;
  //         translateValue = parseFloat(translateValue, 10);

  //         // Increment or decrement based on the scroll direction
  //         if (scrollDirection === "down") {
  //           translateValue -= 0.5;
  //         } else {
  //           translateValue += 0.5;
  //         }

  //         // Ensure translateValue is within the desired range
  //         translateValue = Math.max(-100, Math.min(0, translateValue));

  //         // Apply the new translateValue to the element and update the dataset
  //         imgElement.style.transform = `translateY(${translateValue}px) translateZ(0px)`;
  //         imgElement.dataset.translateValue = translateValue.toString();
  //       } else {
  //         // Reset translateValue for out-of-view images
  //         // imgElement.style.transform = "translateY(0px) translateZ(0px)";
  //         // imgElement.dataset.translateValue = "0";
  //       }
  //     });
  //   } else {
  //     console.error("cardImg.current is not an array");
  //   }

  //   lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  // }, [lastScrollTop]);

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   };
  // }, [onScroll]);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
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
          <a href="#one" onClick={() => lenis.scrollTo("#one", { lerp: 0.05 })}>
            <BtnComponent
              buttonText={container2.btnText1}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a href="#two" onClick={() => lenis.scrollTo("#two", { lerp: 0.05 })}>
            <BtnComponent
              buttonText={container2.btnText2}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a
            href="#three"
            onClick={() => lenis.scrollTo("#three", { lerp: 0.05 })}
          >
            <BtnComponent
              buttonText={container2.btnText3}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a
            href="#four"
            onClick={() => lenis.scrollTo("#four", { lerp: 0.05 })}
          >
            <BtnComponent
              buttonText={container2.btnText4}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
        </div>

        <div
          className={styles.cards}
          // ref={cards}
        >
          {container2.cardData.map((data, index) => (
            <div className={styles.card} key={index} id={data.id}>
              <div className={styles.serviceImgContainer}>
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

      <Container6 />
      <Container3 />
      <Contact page={true} />
      <Footer />
    </>
  );
};

export default Page;
