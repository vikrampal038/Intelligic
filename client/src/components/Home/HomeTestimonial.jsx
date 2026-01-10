import React from 'react'
import { HiSparkles } from "react-icons/hi2";


const HomeTestimonial = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col gap-4 justify-center items-center  ">
            {/* heading */}
            <div className="w-fit subheadingbg flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading ">Testimonial</h1>
            </div>
            {/* subHeading */}
            <div className="flex justify-center items-center">
              <h2 className="mainHeading text-[#505050] ">
                From Concept to Reality: Building Tomorrow's Solutions Today
              </h2>
            </div>
          </div>

          {/* Maine Section */}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial


