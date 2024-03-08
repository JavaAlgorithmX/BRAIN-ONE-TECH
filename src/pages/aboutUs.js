import { IoIosArrowDroprightCircle } from "react-icons/io";
import QuickLinks from "../components/QuickLinks";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import ScrollToTop from "../components/ScrollToTop";

function AboutUs() {
  // Hero Section
  function AboutUsHero() {
    return (
      <div className=" bg-gradient-to-r from-slate-900 via-slate-600  to-orange-300 h-screen w-full relative">
        <img
          src="./bg-about.jpg"
          alt=""
          className="h-full w-full object-cover mix-blend-overlay absolute"
        ></img>

        {/* <div className="relative flex "> */}
        <div className=" text-white h-full w-full flex flex-col justify-center px-20 relative ">
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
          <button
            className="border-2 border-red-600 flex mt-5 h-16 w-60 
                items-center rounded-full px-2 "
            style={{
              letterSpacing: "0.2em",
            }}
          >
            <IoIosArrowDroprightCircle className="text-5xl mr-4" /> GET IN TOUCH
          </button>
        </div>
        {/* </div> */}
      </div>
    );
  }

  function OurAim() {
    return (
      <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5 ">
          <div className="h-4/5 w-2/3 bg-yellow-400 rounded-md absolute top-5 left-5">
            <div className="relative h-full w-full flex items-center justify-center p-20">
              <div className="text-5xl absolute top-5 left-5">
                <RiDoubleQuotesL className="text-slate-400"/>
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
                <RiDoubleQuotesR className="text-slate-400"/>
              </div>
            </div>
          </div>
          {/* ceo picture  */}
          <div className="h-4/5 w-2/6 bg-slate-100 rounded-md absolute bottom-5 right-5 drop-shadow-md">
            <div className="h-full w-full relative px-2 py-2">
              <img src="./profile-1.jpg" alt="" className="h-full rounded-md"></img>
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
    <ScrollToTop/>
      <AboutUsHero />
      <OurAim />
      
    </>
  );
}
export default AboutUs;
