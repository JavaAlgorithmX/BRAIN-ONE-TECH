import { IoIosArrowDroprightCircle } from "react-icons/io";
import QuickLinks from "../components/QuickLinks";

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
            Welcome to <span className="text-red-600 font-serif font-bold">Brainone</span> Tech
            Solutions Pvt Ltd
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

  function OurAim(){
    return(
      <div className="h-screen w-full bg-blue-300">


      </div>
    );
  }

  return (
    <>
      <AboutUsHero />
      <OurAim/>
      <QuickLinks />
    </>
  );
}
export default AboutUs;
