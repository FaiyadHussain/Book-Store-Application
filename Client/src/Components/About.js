import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 animate-fadeInUp">
          About Our Bookstore
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fadeIn animate-delay-1s">
          Welcome to our online bookstore! We are passionate about providing a
          wide selection of books for readers of all ages and interests. Whether
          you're looking for the latest bestsellers, classic literature, or
          hidden gems, we have something for everyone. Our mission is to promote
          the joy of reading and help you discover your next great book.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp">
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to provide a diverse collection of books to readers
            worldwide. We aim to create a platform where book lovers can easily
            find, purchase, and enjoy their favorite titles.
          </p>
        </div>
        {/* Values */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp animate-delay-1s">
          <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
          <p className="mt-4 text-gray-600">
            We believe in the power of books to inspire, educate, and entertain.
            We are committed to offering books that enrich the minds and hearts
            of readers, all while providing exceptional service and support.
          </p>
        </div>
        {/* Why Choose Us */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp animate-delay-2s">
          <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
          <p className="mt-4 text-gray-600">
            With a curated selection of titles, user-friendly shopping
            experience, and competitive prices, we strive to make your book
            shopping experience both easy and enjoyable. We are here to help you
            find your next great read.
          </p>
        </div>
      </div>

      {/* Optional Community Section */}
      <div className="mt-16 text-center px-6">
        <h3 className="text-2xl font-bold text-gray-800 animate-fadeInUp">
          Join Our Community
        </h3>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn animate-delay-1s">
          Connect with fellow book lovers, share reviews, and stay updated with
          the latest book releases. Follow us on our social media platforms to
          join a vibrant community of readers.
        </p>
      </div>
    </div>
  );
};

export default About;
