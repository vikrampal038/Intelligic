import React from "react";
import { PiMouseScrollThin } from "react-icons/pi";

const PortfolioCard = ({ image, title }) => {
  return (
    <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* Image Container */}
      <div className="relative h-[420px] overflow-hidden group">
        {/* Scroll Image */}
        <img
          src={image}
          alt={title}
          className="
            w-full
            transition-transform
            duration-[3000ms]
            ease-linear
            group-hover:-translate-y-[65%]
          "
        />

        {/* CENTER BOUNCING ICON */}
        <div
          className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          z-10
        "
        >
          <div
            className="
            bg-transparent
            flex items-center justify-center
            shadow-lg
            animate-bounce
          "
          >
            <PiMouseScrollThin className="text-5xl font-bold text-black" />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Title */}
      <div className="p-4 flex justify-center rounded-none subheadingbg">
        <h3 className="subHeading">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
