import React from "react";
import styles from "./footer.module.css";
import { footer } from "@/app/Content/content";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <h6 className={styles.heading}>{footer.address.heading}</h6>
        {footer.address.texts.map((data, index) => (
          <p className={styles.text} key={index}>{data}</p>
        ))}
      </div>
      <div className={styles.links}>
        <h6 className={styles.heading}>{footer.links.heading}</h6>
        {footer.links.texts.map((data, index) => (
          <p className={styles.text} key={index}>{data}</p>
        ))}
      </div>
      <div className={styles.social}>
        <h6 className={styles.heading}>{footer.social.heading}</h6>
        {footer.social.texts.map((data, index) => (
          <p className={styles.text} key={index}>{data}</p>
        ))}
      </div>
      <div className={styles.bottom}>
        <Image
          unoptimized
          src={footer.img}
          width={100}
          height={0}
          alt="blogImage"
          className={styles.footerLogo}
        />
        <p>{footer.copyRight}</p>
      </div>
    </div>
  );
};

export default Footer;
