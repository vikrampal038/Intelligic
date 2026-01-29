import React from "react";
import HomeHero from "../components/Home/HomeHero.jsx";
import HomeAbout from "../components/Home/HomeAbout.jsx";
import HomeChoosUs from "../components/Home/HomeChoosUs.jsx";
import HomeServices from "../components/Home/HomeServices.jsx";
import HomePortfolio from "../components/Home/HomePortfolio.jsx";
import HomeBlog from "../components/Home/HomeBlog.jsx";
import HomeTestimonial from "../components/Home/HomeTestimonial.jsx";

const Home = () => {
  // 👉 FIND + STORE
  return (
    <div>
      {/* Hero Section */}
      <HomeHero />
      <div>
        <section className="bg-gradient-brand-50-100-200 py-24">
          <HomeAbout />
        </section>
        <section className="bg-gradient-brand-200-100-50">
          <HomeChoosUs />
        </section>
        <section className="bg-gradient-brand-50-100-200 py-24">
          <HomePortfolio />
        </section>
        <section className="bg-gradient-brand-200-100-50">
          <HomeServices />
        </section>
        <section className="bg-gradient-brand-50-100-200 py-24">
          <HomeTestimonial />
        </section>
      </div>
    </div>
  );
};

export default Home;

{
  /* <HomeBlog /> */
}
