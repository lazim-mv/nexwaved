import React from "react";
import styles from "./contactpage.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import { contactSection, container1 } from "@/app/Content/contactPage";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import Image from "next/image";
import Container8 from "@/app/components/Container8/Container8";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container}>
        <SectionTitle sectionText={container1.sectionTitle} />
        <SectionDescription sectionText={container1.description} />
      </div>

      <div className={styles.container2}>
        <div className={styles.bgContainer}>
          <div className={styles.checkBoxs}>
            <SectionDescription sectionText="Select Service" />
            <div>
              <label htmlFor="digitalStrategy">
                <input
                  type="checkbox"
                  id="digitalStrategy"
                  name="Digital Strategy"
                />
                Digital Strategy
              </label>

              <label htmlFor="designing">
                <input type="checkbox" id="designing" name="Designing" />
                Designing
              </label>

              <label htmlFor="development">
                <input type="checkbox" id="development" name="Development" />
                Development
              </label>

              <label htmlFor="marketing">
                <input type="checkbox" id="marketing" name="Marketing" />
                Marketing
              </label>
            </div>
          </div>
          <div className={styles.textFields}>
            <label htmlFor="firstName">
              First Name
              <input type="text" id="designing" name="firstName" />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input type="text" id="designing" name="lastName" />
            </label>
            <label htmlFor="emai">
              Email
              <input type="email" id="designing" name="email" />
            </label>
            <label htmlFor="number">
              Phone Number
              <input type="number" id="number" name="number" />
            </label>

            <label htmlFor="message">
              Message
              <textarea type="text" id="message" name="message" />
            </label>
          </div>
          <div className={styles.forButton}>
            <BtnComponent
              buttonText="Send Message"
              // borderColor="rgba(255, 255, 255, 0.6)"
              bg="#2B61F7"
              color="#fff"
              contact={true}
            />
          </div>
        </div>
        <div className={styles.contactSection}>
          <p>
            <Image
              unoptimized
              src={contactSection.locationIcon}
              width={100}
              height={0}
              alt="ImageClients"
              className={styles.icon}
            />
            {contactSection.location}
          </p>
          <p>
            <Image
              unoptimized
              src={contactSection.callIcon}
              width={100}
              height={0}
              alt="ImageClients"
              className={styles.icon}
            />
            {contactSection.phoneNumber}
          </p>
          <p>
            <Image
              unoptimized
              src={contactSection.mailIcon}
              width={100}
              height={0}
              alt="ImageClients"
              className={styles.icon}
            />
            {contactSection.mail}
          </p>
        </div>
      </div>

      <Container8 />
      <Footer />
    </>
  );
};

export default page;
