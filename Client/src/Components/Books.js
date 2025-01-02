import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/get-book")
      .then((response) => {
        setBooks(response.data.book);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-gray-800 mt-8 text-center animate-fadeInDown">
        Explore Our Collection
      </h1>
      <p className="text-gray-500 text-center mt-2 text-base animate-fadeIn">
        Handpicked books just for you!
      </p>

      {/* Swiper Section */}
      <div className="mt-6 animate-fadeInUp">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={1} // Ensure 1 slide per view on mobile by default
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 }, // Mobile
            1024: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
            1280: { slidesPerView: 3, spaceBetween: 25 }, // Small desktop
          }}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="group relative p-4 border rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-slideIn">
                <div className="flex justify-center">
                  <img
                    alt={book.title}
                    src={book.file}
                    className="w-24 h-36 sm:w-32 sm:h-44 lg:w-40 lg:h-56 rounded-md bg-gray-100 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {book.title.length > 20
                      ? `${book.title.slice(0, 17)}...`
                      : book.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    <b>Author:</b> {book.author}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    ₹{book.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Books;
