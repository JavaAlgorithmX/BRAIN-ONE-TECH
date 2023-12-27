import { IoIosArrowDroprightCircle } from "react-icons/io";
import QuickLinks from "../components/QuickLinks";
import Dummy from "../components/Dummy";


 function AboutUs() {
  // Hero Section 
  function AboutUsHero() {
    return (
      <div>
        <div
          className="bgImage h-screen w-full absolute top-0 left-0"
          style={{
            backgroundImage: `url("./bg-about.jpg")`,
            
          }}
        ></div>
        <div className="content text-white h-3/5 w-4/5">
          <div>
            <h1 className="text-4xl mb-2 mt-5">
              Welcome to <span className="text-red-600">Brainone</span> Tech
              Solutions Pvt Ltd
            </h1>
            <h2 className="text-3xl mb-5">Your Gateway to IT Excellence!</h2>
            <p className="text-lg">
              At Brainone Tech Solutions Pvt Ltd, we're not just another IT
              training hub;
              <br /> we're the architects of your success in the digital realm.
              <br />
              Dive into a world where innovation meets expertise,
              <br /> and learning is an exhilarating journey.
            </p>
            <button
              className="border border-red-600 flex mt-10 h-16 w-60 
                items-center rounded-full px-2 "
              style={{
                letterSpacing: "0.2em",
              }}
            >
              <IoIosArrowDroprightCircle className="text-5xl mr-4" /> GET IN
              TOUCH
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <AboutUsHero />
      <Dummy/>
      <QuickLinks />
    </>
  );
}
export default AboutUs;
