import Image from "next/image";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "./components/ButtonComponent";
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
import Test from "./components/Spline/Test";
import Container4 from "./components/Container4/Container4";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
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
    </>
    //  {/* <SectionName sectionText="Services" width="50vw" />
    // <SectionTitle sectionText="Our Capabilities" />
    // <SectionDescription sectionText="sdklfjsdklfajlskdfjsdlkfjls" />
    // <CardHeading sectionText="Our Capabilities" />
    // <BtnComponent
    //   buttonText="Our Services"
    //   borderColor="rgba(255, 255, 255, 0.6)"
    //   bg="transparent"
    //   color="#fff"
    // />  */}
  );
}
