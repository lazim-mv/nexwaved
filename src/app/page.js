"use client";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Container1 from "./components/Container1/Container1";
import Container2 from "./components/Container2/Container2";
import Container6 from "./components/Container6/Container6";
import Container3 from "./components/Container3/Container3";
import Container5 from "./components/Container5/Container5";
import Contact from "./components/Contact/Contact";
import Container7 from "./components/Container7/Container7";
import Footer from "./components/Footer/Footer";
import Container4 from "./components/Container4/Container4";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { useEffect } from "react";
// import { isIOS } from "./utils/iosCheck";
// import { BtnComponent } from "./components/ButtonComponent";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <MobileHeader />
        <Hero />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Contact />
        <Container7 />
        <Footer />
      </div>
    </>
  );
}
