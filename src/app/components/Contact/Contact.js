import React from "react";
import styles from "./contact.module.css";
import { contact } from "@/app/Content/content";
import { BtnComponent } from "../ButtonComponent";

const Contact = ({page}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h6 className={styles.sectionName}>{contact.sectionName}</h6>
        <div className={styles.title}>
          <h1>{contact.sectionTitle}</h1>
          <a href={`${page ? "Contact" : "pages/Contact"}`}>
            <BtnComponent
              buttonText={contact.btnText}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              contact={true}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
