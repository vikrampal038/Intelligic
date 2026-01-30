import { NavLink } from "react-router-dom";
// import bgMain from '/Assets/All Images/ServiceConnect.png';
import bgInner from "/Assets/All Images/connectblue.png";

const Section = () => {
  return (
    <section className="topmain">
      <div className="main w-full">
        <div
          className="cart-shadow rounded-4xl flex flex-col justify-center items-center gap-14 py-14 px-5"
          style={{
            backgroundImage: `url(${bgInner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="mainHeading  w-320 text-center text-black">
              Let's Build Something Amazing Together! Connect with Us Today!
            </h1>
            <p className="mainParagraph xl:font-bold xl:tracking-widest xl:text-[18px] w-250 text-black text-center">
              We are passionate about bringing great ideas to life. Let’s
              combine our expertise with your unique vision to build something
              truly amazing together.
            </p>
            
            {/* <NavLink to="/contact" className="button">
              <span className="absolute inset-0 bg-[#8be0ff1a] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>
              Get Started
            </NavLink> */}

            <NavLink
              to="/contact"
              className="relative group overflow-hidden button  inline-flex items-center justify-center"
            >
              {/* Hover background */}
              <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

              {/* Button text */}
              <span className="relative z-10">Get Started</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

// style={{
//   backgroundImage: `url(${bgMain})`,
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
// }}
