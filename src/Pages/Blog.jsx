import React from "react";
import Blogsec from "../components/Blog/Blogsec.jsx";

const Blog = () => {
  return (
    <div>
      <section className="bg-gradient-brand-50-100-200 py-24">
        <Blogsec />
      </section>
    </div>
  );
};

export default Blog;

// import GlobalHero from "../common/GlobalHero.jsx";
// import { HeroData } from "../Data/HeroData.js";

// const heroItem = HeroData.find((item) => item.page === "blog");

// {Hero Section }
// {<GlobalHero item={heroItem} /> }
// {Page Contain }
