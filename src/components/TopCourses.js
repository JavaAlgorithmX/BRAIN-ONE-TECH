import React from "react";

const dataImageUrl = "/courses/data.jpg";
const dataScienceStyle = {
    backgroundImage: `url(${dataImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const seleniumImageUrl = "/courses/selenium.jpg";
const SeleniumStyle = {
    backgroundImage: `url(${seleniumImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const digitalMarketingImageUrl = "/courses/digital.jpg";
const digitalMarketingStyle = {
    backgroundImage: `url(${digitalMarketingImageUrl})`,
    backgroundSize: "fill",
    backgroundPosition: "center",
  };
  const performanceImageUrl = "/courses/data.jpg";
const performanceStyle = {
    backgroundImage: `url(${performanceImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  

function TopCourses() {
  return (
    <div class="bg-blue-400" style={{
      
    }}>
      <h1 className="text-4xl font-bold mb-3 text-center">Top Courses</h1>
      <h3 className="text-center">Trending Courses to Anchor Your Career</h3>
      <div class="grid grid-rows-2 grid-cols-3 gap-10 h-screen w-full px-20 py-10 text-xl font-medium text-white">
        {/* data science  */}
        <div class="col-span-1 row-span-2 bg-yellow-400 rounded-lg flex justify-center items-center"
        style={dataScienceStyle}
        >
          <div>
            <p>Data Science</p>
          </div>
        </div>
        <div class="col-span-1 row-span-1 bg-red-300 rounded-lg flex justify-center items-center" style={SeleniumStyle}>
        <div>
            <p>Selenium testing</p>
          </div>
        </div>
        <div class="col-span-1 row-span-1 bg-cyan-300 rounded-lg flex justify-center items-center" style={performanceStyle}>
        <div>
            <p>Performance Testing</p>
          </div>
        </div>
        <div class="col-span-2 row-span-1 bg-purple-300 rounded-lg flex justify-center items-center" style={digitalMarketingStyle}>
        <div >
            <p>Digital Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopCourses;
