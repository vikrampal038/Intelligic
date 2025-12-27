import React from "react";
import { Values } from "../../Data/AboutData";

const AboutValues = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#0A1A2F] py-14">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col gap-10 ">
            {/* heading */}
            <h1 className="subHeading text-white">Our Values</h1>
            {/* subHeading */}
            <div className="flex justify-between items-start">
              <h2 className="mainHeading w-1/2 text-[#CCCCCC] ">
                Advanced Software Made Simple
              </h2>
            </div>
          </div>

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            {Values.map((item, index) => {
              const Icon = item.icons;
              return (
                <div
                  key={index}
                  className="box-shadow flex bg-[#FAF7EF] flex-col justify-center items-start gap-6 border border-black rounded-lg p-[30px] "
                >
                  <Icon className="icon" />
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph ">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
