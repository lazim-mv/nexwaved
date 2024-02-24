"use client";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import {
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import Container7 from "@/app/components/Container7/Container7";
import { urlFor } from "@/app/api/blog";

const page = () => {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchData = searchParams.get("search");
    const parsedData = searchData ? JSON.parse(searchData) : [];
    console.log(parsedData, "DataArray");
    setDataArray(parsedData);
    console.log(dataArray, "Link clickeddddd");

    setLoading(true);
  }, []);

  useEffect(() => {
    console.log(dataArray, "Link clickeddddd");
  }, [dataArray]);

  if (loading) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.container}>
          <SectionTitle sectionText={dataArray.title} />
          {dataArray.titleImage && (
            <Image
              unoptimized
              src={urlFor(data.titleImage).url()}
              width={100}
              height={0}
              alt="blogImage"
              className={styles.blogImage}
            />
          )}
          {/* <SectionDescription sectionText="Highly recommend!Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!" />
          <br /> */}
          <SectionDescription sectionText={dataArray.description} />
        </div>
        <Container7 />
        <Contact />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.container}>
        <h2 className="businessDesc">Loading...</h2>
      </div>
    </>
  );
};

export default page;
