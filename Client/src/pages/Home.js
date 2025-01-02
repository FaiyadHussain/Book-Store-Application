import React from "react";
import Hero from "../Components/Hero";
import Books from "../Components/Books";
import ScrollingAuthors from "../Components/ScrollingAuthors";
import About from "../Components/About";
import FamousAuthorsCarousel from "../Components/FamousAuthorsCarousel.js";
import Services from "../Components/Services";
import FAQs from "../Components/FAQs.js";

const Home = () => {
  return (
    <div className=" px-10 py-8">
      <Hero />
      <hr />
      <ScrollingAuthors />
      <hr className="my-8 border-gray-300  " />
      {/* <FamousAuthorsCarousel /> */}
      <Books />
      <hr className="my-8 border-gray-300  " />
      <About />
      <Services />
      <FAQs />
    </div>
  );
};

export default Home;
