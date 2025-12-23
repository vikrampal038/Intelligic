import React from "react";
import GlobalHero from "../common/GlobalHero";
import { HeroData } from "../Data/HeroData";
import ContactSec from "../components/Contact/ContactSec";
import ContactFaq from "../components/Contact/ContactFaq";

const Contact = () => {
const heroItem = HeroData.find(item => item.page === 'contact');
  return (
    <div>
      {/* for Hero Section */}
      <GlobalHero item={heroItem} />
      {/* for Page Contain */}
      <div className='main'>
      <ContactSec />
      <ContactFaq />
      </div>
        
    </div>
  );
};

export default Contact;
 