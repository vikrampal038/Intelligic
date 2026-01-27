import React from "react";
import HomeHeading from "../../common/HomeHeading";


const HomeTestimonial = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-20">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Testimonial"
            subHeading="Positive Review From Our Users"
          />

          {/* Maine Section */}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial


