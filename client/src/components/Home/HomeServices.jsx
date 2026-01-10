import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { HomeServicesData } from "../../Data/HomeData";

const HomeServices = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col gap-4 justify-center items-center  ">
            {/* heading */}
            <div className="w-fit subheadingbg flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading ">Our Services</h1>
            </div>
            {/* subHeading */}
            <div className="flex justify-center items-center">
              <h2 className="mainHeading text-[#505050] ">
                From Concept to Reality: Building Tomorrow's Solutions Today
              </h2>
            </div>
          </div>

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 ">
            {HomeServicesData.map((item, index) => {
              const Icon = item.icons;
              return (
                // bg-[#FAF7EF]
                <div
                  key={index}
                  className="relative overflow-hidden group cart-shadow flex bg-[#f7f7f7]  flex-col justify-center items-center gap-6 border border-black rounded-lg p-[30px] transition-transform duration-700 ease-in-out"
                >
                  {/* Square overlay */}
                  <span className="absolute inset-0 bg-[#dad7d2] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

                  <Icon className="icon z-10" />
                  <div className="flex flex-col gap-4 justify-center items-center relative z-10">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph">{item.description}</p>
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

export default HomeServices;
