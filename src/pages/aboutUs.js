import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import ScrollToTop from "../components/ScrollToTop";
import ContactUsButton from "../components/ContactUsButton";
import { useState } from "react";
import ContactUs from "./model/ContactUs-model";

function AboutUs() {
  const [showContactUs, setShowContactUs] = useState(false);

  function openContactModel() {
    setShowContactUs(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  }
  function closeContactUsModel() {
    setShowContactUs(false);
    document.body.style.overflow = "auto";
  }
  // Hero Section
  function AboutUsHero() {
    return (
      <div className="bg-gradient-to-tr  lg:bg-gradient-to-r from-slate-800 via-slate-700 to-orange-300 h-screen w-full relative">
        <img
          src="./bg-about.jpg"
          alt=""
          className="h-full w-full object-cover mix-blend-overlay absolute"
        ></img>

        {/* <div className="relative flex "> */}
        <div className=" text-white h-full w-full flex flex-col justify-center px-10 lg:px-20 relative ">
          <h1 className="text-4xl mb-2">
            Welcome to{" "}
            <span className="text-red-600 font-serif font-bold">Brainone</span>{" "}
            Tech Solutions Pvt Ltd
          </h1>
          <h2 className="text-3xl mb-3">Your Gateway to IT Excellence!</h2>
          <p className="text-lg ">
            At Brainone Tech Solutions Pvt Ltd, we're not just another IT
            training hub;
            <br /> we're the architects of your success in the digital realm.
            <br />
            Dive into a world where innovation meets expertise,
            <br /> and learning is an exhilarating journey.
          </p>
          <div className=" flex justify-start mt-10">
            <ContactUsButton setShowContactUs={openContactModel} />
          </div>
        </div>
      </div>
    );
  }

  function OurAim() {
    return (
      <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
        <div className="relative mx-2 lg:w-4/5 lg:h-4/5 ">
          <div className="lg:h-4/5 lg:w-2/3 bg-yellow-400 rounded-md lg:absolute top-5 left-5">
            <div className="relative h-full w-full flex flex-col items-center justify-center px-5 py-16 lg:p-20">
              <div className="text-5xl absolute top-5 left-5">
                <RiDoubleQuotesL className="text-slate-400" />
              </div>
              <div className=" text-white text-center space-y-3">
                <div className="text-3xl font-serif">Our Vision</div>
                <div className="text-xl font-mono">
                  At Brainone Tech Solutions, we envision a future where
                  individuals and businesses thrive through the effective
                  application of technology. Our mission is to empower, educate,
                  and innovate in the ever-expanding digital realm.
                </div>
              </div>
              <div className="text-5xl absolute bottom-5 right-10">
                <RiDoubleQuotesR className="text-slate-400" />
              </div>
            </div>
            <div className="lg:hidden w-full  h-24 mt-5 p-2 flex bg-slate-300 rounded-b-md">
              <img
                src="./profile-1.jpg"
                alt=""
                className="h-20 rounded-full"
              ></img>
              <div className="flex flex-col items-center justify-center w-full text-slate-800 text-xl" >
                <div>Monika Srivastava</div>
                <div>CEO & Founder</div>
              </div>

              
            </div>
          </div>
          {/* ceo picture  */}
          <div className="hidden lg:block h-4/5 w-2/6 bg-slate-100 rounded-md absolute bottom-5 right-5 drop-shadow-md">
            <div className="h-full w-full relative px-2 py-2">
              <img
                src="./profile-1.jpg"
                alt=""
                className="h-full rounded-md"
              ></img>
              <div
                className="absolute bottom-3 bg-slate-600 text-white 
               flex items-center justify-center flex-col px-5 py-1
               rounded-tl-xl rounded-br-xl left-1/2 transform -translate-x-1/2"
              >
                <div>Monika Srivastava</div>
                <div>Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <AboutUsHero />
      {showContactUs && <ContactUs setClose={closeContactUsModel} />}
      <OurAim />
    </>
  );
}
export default AboutUs;
