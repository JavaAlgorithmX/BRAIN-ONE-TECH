import Hero from "../components/hero";
import EnquireNow from "../components/enquireNow";
// import NewsLetter from "../components/newsLetter";
import QuickLinks from "../components/QuickLinks";
import Services from "../components/Services";
import DummyCaresol from "../components/Features";
import TechStack from "../components/techStack";
import WhyChooseUs from "../components/WhyChooseUs";
import { useState } from "react";
import ContactUs from "./model/ContactUs-model";
import ScrollToTop from "../components/ScrollToTop";


export default function Home() {
  const [showContactUs, setShowContactUs] = useState(false);

  function openContactModel(){
    // setShowContactUs(!setShowContactUs)
    setShowContactUs(true)
    // if(showContactUs)
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }
  function closeContactUsModel(){
    setShowContactUs(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
    <ScrollToTop/>
      <Hero />
      <DummyCaresol/>
      <Services/>
      <WhyChooseUs setShowContactUs={openContactModel}/>
      {showContactUs && <ContactUs setClose={closeContactUsModel}/>}
      <TechStack/>
      <EnquireNow />
      {/* <NewsLetter /> */}
      {/* <QuickLinks /> */}
    </>
  );
}
