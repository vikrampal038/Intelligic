import React from "react";
import ServiceSec from "../components/Services/ServiceSec";
import ServicesAnalyzer from "../components/Services/ServicesAnalyzer";
import ServicesConnect from "../components/Services/ServicesConnect";
import ServiceValue from "../components/Services/ServicesValue";
import servicebg from "/Assets/All Images/Servicevaluebg.jpg";

const Services = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-gradient-brand-50-100-200 pb-24 pt-14">
        <ServiceSec />
      </section>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
        url(${servicebg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="py-24">
          <ServiceValue />
        </section>

        <section className="bg-white pt-24 pb-14">
          <ServicesAnalyzer />
        </section>
        <section className="py-24">
          <ServicesConnect />
        </section>
      </div>
    </div>
  );
};

export default Services;

//  import Prism from "@/common/Prism";
//  import GlobalHero from "../common/GlobalHero";
//  import { HeroData } from "../Data/HeroData";

//  const heroItem = HeroData.find((item) => item.page === "services");

// {
//    Hero Section
// }
// {
//    <GlobalHero item={heroItem} />
// }
// {
//    Page Contain
// }
// {
//    <Prism />
// }
