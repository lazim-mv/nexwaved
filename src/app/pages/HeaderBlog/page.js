"use client";
import React, { useEffect, useState } from "react";
import styles from "./headerblog.module.css";
import Container7 from "@/app/components/Container7/Container7";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import fetchDataAndExport, { urlFor } from "@/app/api/blog";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [blogData, setBlogData] = useState({});
  const [loaded, setLoading] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataAndExport();

        console.log("Fetched data in component:", data);

        if (Array.isArray(data) && data.length > 0) {
          setBlogData(data[0]);
          setLoading(true);
        } else {
          console.warn("Empty or invalid data array received.");
        }
      } catch (error) {
        console.error("Error in component:", error.message);
      }
    }

    fetchData();
  }, []);

  if (loaded) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.container}>
          {blogData.titleImage && (
            <Image
              unoptimized
              src={urlFor(blogData.titleImage).url()}
              width={100}
              height={0}
              alt="blogImage"
              className={styles.blogImage}
            />
          )}

          <div className={styles.content}>
            <SectionTitle sectionText={blogData.title} />
            <SectionDescription sectionText={blogData.description} />
            <Link
              href={{
                pathname: "/pages/Blogs",
                search: `?search=${JSON.stringify(blogData)}`,
              }}
              // target="_blank"
              onClick={() => console.log("Link clicked:")}
            >
              <BtnComponent
                buttonText="Read More"
                borderColor="rgba(255, 255, 255, 0.6)"
                bg="transparent"
                color="#fff"
                margin="1.5873015873015872vw 0 0 0"
                arrow={true}
              />
            </Link>
          </div>
        </div>

        <Container7 header={true} />
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
