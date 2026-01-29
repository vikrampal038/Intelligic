import React from "react";
import ContacForm from "../components/Contact/ContactForm";
import ContactFaq from "../components/Contact/ContactFaq";
import ContactHero from "../components/Contact/ContactHero";
import ContactSocial from "../components/Contact/ContactSocial";

const Contact = () => {
  return (
    <div>
      <section className="bg-gradient-brand-50-100-200 pb-24 pt-14">
        <ContactHero />
      </section>

      {/* Form */}
      <section className="bg-gradient-brand-200-100-50">
        <ContacForm />
      </section>

      {/* Social */}
      <section className="bg-gradient-brand-50-100-200 pt-24">
        <ContactSocial />
      </section>

      {/* FAQ */}
      <section className="bg-gradient-brand-200-100-50 py-24">
        <ContactFaq />
      </section>
    </div>
  );
};

export default Contact;

// import GlobalHero from "../common/GlobalHero";
// import { HeroData } from "../Data/HeroData";
// import Allbg from "/Assets/All Images/contactbg1.png";

// const heroItem = HeroData.find((item) => item.page === "contact");

// {for Hero Section}
// {<GlobalHero item={heroItem} />}
// {for Page Contain}

// style={{
//   backgroundImage: `url(${Allbg})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundAttachment: "scroll", // instead of fixed
// }}

// color palate one
    // <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-24">
    //   <ContactHero />
    // </section>

    // <section className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50">
    //   <Contacform />
    // </section>

    // <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 pt-24">
    //   <ContactSocial />
    // </section>

    // <section className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 py-24">
    //   <ContactFaq />
    // </section>

// color palate Two 
      // <section className="bg-gradient-to-b from-slate-50 via-blue-50 to-blue-100 py-28">
      //   <ContactHero />
      // </section>

      // <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-slate-50 py-28">
      //   <Contacform />
      // </section>

      // <section className="bg-gradient-to-b from-slate-50 via-blue-50 to-blue-100 py-28">
      //   <ContactSocial />
      // </section>

      // <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-slate-50 py-28">
      //   <ContactFaq />
      // </section> 
