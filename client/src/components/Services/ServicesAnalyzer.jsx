import React from "react";

const ServicesAnalyzer = () => {
  return (
    <section className="w-full flex flex-col justify-between items-center bg-white py-20">
      <div className="main flex flex-row justify-between items-center  w-full">
        {/* left Side Bar */}
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-start gap-6 ">
            <h1 className="mainHeading text-black">Big Data Analyzer</h1>
            <p className="mainParagraph text-[#7A7A7A]">
              The <b>Big Data Analyzer</b> is a robust tool that provides
              actionable insights by efficiently processing and interpreting
              vast, complex datasets, empowering smart business decisions.
            </p>
          </div>
          {/* Video   */}
          <div className="w-full flex flex-col justify-center items-center overflow-hidden">
            <video
              className=" object-cover h-100 w-100"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/layers-240.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side sECTION */}
        {/* <div className="w-1/2 flex justify-center items-center">
          <img
            className="cart w-140 h-auto rounded-2xl"
            src="Assets/All Images/AboutSkill.png"
            alt="OurSkill Section Image"
          />
        </div> */}
      </div>
    </section>
  );
};

export default ServicesAnalyzer;
