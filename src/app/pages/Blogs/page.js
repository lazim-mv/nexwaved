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

const Page = () => {
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

    if (dataArray.titleImage) {
      console.log(urlFor(dataArray.titleImage).url(), "LinkImg clickeddddd");
    }
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
              src={urlFor(dataArray.titleImage).url()}
              width={100}
              height={0}
              alt="blogImage"
              className={styles.blogImage}
            />
          )}

          <SectionDescription sectionText={dataArray.description} />
        </div>
        <Container7 blogPage={true} />
        <Contact />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.lodingContainer}>
        <h2 className="businessDesc">Loading...</h2>
      </div>
    </>
  );
};

export default Page;
