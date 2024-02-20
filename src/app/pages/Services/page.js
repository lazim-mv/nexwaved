import React from "react";
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

const page = () => {
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
          <a href="#one">
            <BtnComponent
              buttonText={container2.btnText1}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a href="#two">
            <BtnComponent
              buttonText={container2.btnText2}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a href="#three">
            <BtnComponent
              buttonText={container2.btnText3}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
          <a href="#four">
            <BtnComponent
              buttonText={container2.btnText4}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
        </div>

        <div className={styles.cards}>
          {container2.cardData.map((data, index) => (
            <div className={styles.card} key={index} id={data.id}>
              <Image
                unoptimized
                src={data.img}
                width={100}
                height={0}
                alt="ImageClients"
                className={styles.serviceImg}
              />
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
      <Contact />
      <Footer />
    </>
  );
};

export default page;
