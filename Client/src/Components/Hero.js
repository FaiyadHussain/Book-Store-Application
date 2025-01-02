import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex  flex-col lg:flex-row items-center justify-between rounded-2xl px-8 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 text-gray-800 animate__fadeIn">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-blue-800 drop-shadow-md">
          Discover Your Next Great Read
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-medium tracking-wide text-gray-600">
          Uncover captivating stories, enriching knowledge, and endless
          inspiration in our curated collection of books. Let us guide you on a
          journey through literary worlds that expand your mind and spark your
          imagination.
        </p>
        <div className="text-lg md:text-xl   font-semibold border-2 px-8 py-3 w-fit mt-6 lg:mt-8 rounded-full cursor-pointer transition-transform duration-300 bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl hover:scale-105">
          Discover Books
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center animate__slideInUp">
        <img
          src="https://zolostays.com/blog/wp-content/uploads/2024/02/books-stores.jpg"
          alt="Books"
          className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[650px] h-auto rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500 mb-0"
        />
      </div>
    </div>
  );
};

export default Hero;
