import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  const Service = [
    { label: "Web Development", path: "/services/web-development" },
    { label: "E-Commerces Websites", path: "/services/web-development" },
    { label: "Domain & Hosting", path: "/services/web-development" },
    { label: "CRM & ERP", path: "/services/web-development" },
    { label: "Business Collaterals", path: "/services/web-development" },
    { label: "Social Meida Design", path: "/services/web-development" },
  ];

  const Social = [
    {
      label: "Lindedin",
      path: "/services/web-development",
      icons: FaLinkedinIn,
    },
    { label: "Github", path: "/services/web-development", icons: FaGithub },
    {
      label: "FaceBook",
      path: "/services/web-development",
      icons: FaFacebookF,
    },
    {
      label: "Instagram",
      path: "/services/web-development",
      icons: FaInstagram,
    },
    { label: "Twitter", path: "/services/web-development", icons: FaTwitter },
    {
      label: "Telegram",
      path: "/services/web-development",
      icons: FaTelegramPlane,
    },
  ];
  return (
    <div className="w-full bg-black">
      <div className=" px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center items-center w-full gap-7">
        {/* For First Section */}
        <div className="w-full border border-amber-100 ">
          {/* For Logo And Email Section */}
          <div className="border py-6 w-full border-amber-50  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6">
            <div className="border text-white">Logo</div>
            <div className="border text-white">Email</div>
          </div>

          {/* For Links And COntacts */}
          <div className="border  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            {/* For Services Link */}
            <div className="border text-white flex flex-col gap-6">
              <h1 className="footerHeading">Services</h1>
              <div className="flex flex-col gap-4">
                {Service.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex items-center gap-4 text-gray-400 hover:text-white transition"
                  >
                    <HiOutlineArrowCircleRight className="footerIcon" />
                    <div className="flex flex-col group relative h-[20px] w-[180px] overflow-hidden">
                      <span className="absolute left-0 top-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="absolute left-0 top-full w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                        {item.label}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* For Explore Link */}
            <div className="border text-white flex flex-col gap-6">
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
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition"
                >
                  <HiOutlineArrowCircleRight className="footerIcon" />
                  <div className="flex flex-col group relative h-[20px] w-[180px] overflow-hidden">
                    <span className="absolute left-0 top-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                      {item.label}
                    </span>
                    <span className="absolute  left-0 top-full w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* For Follow Link */}
            <div className="border text-white flex flex-col gap-6">
              <h1 className="footerHeading">Services</h1>
              <div className="flex flex-col gap-4">
                {Social.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-white hover:text-white transition"
                    >
                      <Icon className="footerIcon" />
                      <div className="flex flex-col group relative h-[20px] w-[180px] overflow-hidden">
                        <span className="absolute left-0 top-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                          {item.label}
                        </span>
                        <span className="absolute left-0 top-full w-full h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
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
            <div className="border text-white flex flex-col gap-6">
              <h1 className="footerHeading">Contact</h1>
            </div>
          </div>
        </div>

        {/* For Second Section */}
        <div className="border  w-full bg-[#575757] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6"></div>

        {/* For Third Section */}
        <div className="border py-5 w-full border-amber-50  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6">
          {/* for copy write */}
          <div className="border text-white text-start">
            C© 2025 Intelligic Solutions. All rights reserved.
          </div>

          {/* for legals Links */}
          <div className="border text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
            <div className="border text-white text-center">Privacy Policy</div>
            <div className="border text-white text-center">Privacy Policy</div>
            <div className="border text-white text-center">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
