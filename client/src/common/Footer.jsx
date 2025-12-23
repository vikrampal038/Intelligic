import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className=" px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center items-center w-full">


        {/* For Logo And Email Section */}
          <div className="border py-6 w-full border-amber-50  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6">
            <div className="border text-white">Logo</div>
            <div className="border text-white">Email</div>
          </div>


         {/* For Links And COntacts */}
          <div className="border  w-full bg-[#575757] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            {/* For Services Link */}
            <div className="border text-white">
              <h1 className="footerHeading">Services</h1>
              <ul>
                <li>
                  Home
                </li>
              </ul>
            </div>

            {/* For Explore Link */}
            <div className="border text-white">Explore</div>

            {/* For Follow Link */}
            <div className="border text-white">Follow Us</div>

            {/* For Contacts Link */}
            <div className="border text-white">Contacts</div>
          </div>

          {/* for copyright and Legals Links */}
          <div className="border py-2 w-full border-amber-50  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6">
            {/* for copy write */}
            <div className="border text-white text-center">Copy Write</div>

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
