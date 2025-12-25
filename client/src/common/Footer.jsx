import React from "react";
import { NavLink } from "react-router-dom";
import { SeoData } from "../Data/FooterData";
import { Service } from "../Data/FooterData";  
import { Social } from "../Data/FooterData";
import { Contact } from "../Data/FooterData";
import { Legal } from "../Data/FooterData";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
// import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

// import {
//   FaLinkedinIn,
//   FaGithub,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaTelegramPlane,
// } from "react-icons/fa";

const Footer = () => {
  const columns = 4;
  const itemsPerColumn = Math.ceil(SeoData.length / columns);

  const seoColumns = Array.from({ length: columns }, (_, i) =>
    SeoData.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  // for Services Data
  // const Service = [
  //   { label: "Web Development", path: "/services/web-development" },
  //   { label: "E-Commerces Websites", path: "/services/web-development" },
  //   { label: "Domain & Hosting", path: "/services/web-development" },
  //   { label: "CRM & ERP", path: "/services/web-development" },
  //   { label: "Business Collaterals", path: "/services/web-development" },
  //   { label: "Social Meida Design", path: "/services/web-development" },
  // ];

  // for Legal Data
  // const Legal = [
  //   { label: "Privacy Policy", path: "/public/LegalsFiles/Privacy-Policy.pdf" },
  //   {
  //     label: "Terms And Conditions",
  //     path: "/public/LegalsFiles/Terms-and-Conditions.pdf",
  //   },
  //   { label: "Refund Policy", path: "/public/LegalsFiles/Refund-Policy.pdf" },
  // ];

  // for Contact Data
  // const Contact = [
  //   { label: "+91 9029965109", icons: FiPhone },
  //   { label: "intelligicssolutions@gmail.com", icons: FiMail },
  //   { label: "https://intelligic.org", icons: FiGlobe },
  //   {
  //     label:
  //       "B Wing, EXPRESS ZONE, F-164, Western Express Hwy, Malad, Panch Bawadi, Malad East, Mumbai, Maharashtra 400063",
  //     icons: FiMapPin,
  //   },
  // ];

  // for Social  Data
  // const Social = [
  //   {
  //     label: "Lindedin",
  //     path: "/services/web-development",
  //     icons: FaLinkedinIn,
  //   },
  //   { label: "Github", path: "/services/web-development", icons: FaGithub },
  //   {
  //     label: "FaceBook",
  //     path: "/services/web-development",
  //     icons: FaFacebookF,
  //   },
  //   {
  //     label: "Instagram",
  //     path: "/services/web-development",
  //     icons: FaInstagram,
  //   },
  //   { label: "Twitter", path: "/services/web-development", icons: FaTwitter },
  //   {
  //     label: "Telegram",
  //     path: "/services/web-development",
  //     icons: FaTelegramPlane,
  //   },
  // ];

  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center w-full bg-black">
        {/* For First Section */}
        <div className=" px-5 sm:px-10 md:px-15 lg:px-20 w-full py-8 flex justify-center flex-col items-center gap-6 bg-black">
          {/* For Logo And Email Section */}
          <div className="border w-full border-amber-50  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6">
            <div className="border text-white">Logo</div>
            <div className="border text-white">Email</div>
          </div>

          {/* For Links And Cnntacts */}
          <div className="border  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* For Services Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Services</h1>
              <div className="flex flex-col gap-4">
                {Service.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex items-center gap-4 transition"
                  >
                    <HiOutlineArrowCircleRight className="footerIcon" />
                    <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                      <span className="footertext animationtext">
                        {item.label}
                      </span>
                      <span className="footertext animationtexthover">
                        {item.label}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* For Explore Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Explore</h1>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className="flex items-center gap-4 transition"
                >
                  <HiOutlineArrowCircleRight className="footerIcon" />
                  <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                    <span className="footertext animationtext">
                      {item.label}
                    </span>
                    <span className="footertext animationtexthover">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* For Follow Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Follow Us</h1>
              <div className="flex flex-col gap-4">
                {Social.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition"
                    >
                      <Icon className="footerIcon" />
                      <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                        <span className="footertext animationtext">
                          {item.label}
                        </span>
                        <span className="footertext animationtexthover">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            {/* <div className="border text-white">Follow Us</div> */}

            {/* For Contacts Link */}
            <div className="flex flex-col gap-6">
              <h1 className="footerHeading">Contact</h1>
              <div className="flex flex-col gap-4">
                {Contact.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 transition"
                    >
                      <Icon className="footerIcon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                      <div className="flex flex-col justify-start items-center">
                        <span className="footertext tracking-wider leading-6 hover:scale-110 transition-all duration-1200">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* For Second Section  */}
        <div className="px-5 sm:px-10 md:px-15 lg:px-20 w-full bg-[#575757] py-8 ">
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {seoColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2">
                {column.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="footertext text-sm text-white  hover:text-gray-400 transition"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* For Third Section */}
        <div className=" px-5 sm:px-10 md:px-15 lg:px-20 w-full py-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-center gap-6 bg-black">
          {/* for copy write */}
          <div className="footertext tracking-wider hover:scale-110 transition-all duration-1200 hover:translate-x-10">
            <span className="text-start">
              © 2025 Intelligic Solutions. All rights reserved.
            </span>
          </div>

          {/* for legals Links */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex gap-6 text-center justify-end md:col-span-3">
              {Legal.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-end transition text-center"
                >
                  <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                    <span className="footertext animationtext text-center">
                      {item.label}
                    </span>
                    <span className="footertext animationtexthover text-center">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
{
  /* <div className="border text-white text-center">Privacy Policy</div>
            <div className="border text-white text-center">Privacy Policy</div>
            <div className="border text-white text-center">Privacy Policy</div> */
}
