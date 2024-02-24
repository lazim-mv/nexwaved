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
import RevealAffect from "./components/GsapComponents/RevealAffect";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
// import { isIOS } from "./utils/iosCheck";
// import { BtnComponent } from "./components/ButtonComponent";

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <div>
        <Header />
        <MobileHeader />
        <Hero />
        <RevealAffect>
          <Container1 />
        </RevealAffect>
        <RevealAffect start={80} end={70}>
          <Container2 />
        </RevealAffect>
        <RevealAffect>
          <Container3 />
        </RevealAffect>
        <RevealAffect>
          <Container4 />
        </RevealAffect>
        <RevealAffect>
          <Container5 />
        </RevealAffect>
        <Container6 />
        <RevealAffect>
          <Contact />
        </RevealAffect>
        <Container7 />
        <Footer />
      </div>
    </>
  );
}
