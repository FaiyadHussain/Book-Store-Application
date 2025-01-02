import React from "react";
import {
  AiOutlinePhone,
  AiOutlineRedo,
  AiOutlineCheckCircle,
  AiOutlineCar,
} from "react-icons/ai";

const Services = () => {
  const services = [
    {
      icon: <AiOutlinePhone size={32} />,
      title: "24/7 Customer Service",
      description:
        "We're here to help you with any questions or concerns you have, 24/7. WhatsApp Only!",
    },
    {
      icon: <AiOutlineRedo size={32} />,
      title: "Return & Refund",
      description:
        "If you've received damaged books or wrong items, we will replace them immediately.",
    },
    {
      icon: <AiOutlineCheckCircle size={32} />,
      title: "Our Guarantee",
      description:
        "We stand behind our products and services and guarantee the best quality & satisfaction.",
    },
    {
      icon: <AiOutlineCar size={32} />,
      title: "Shipping All India",
      description:
        "We ship our products all over India, making them accessible to customers everywhere.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 animate-fadeInUp">
          Our Services
        </h2>
        <p className="text-lg text-center text-gray-600 mt-2 max-w-2xl mx-auto animate-fadeIn animate-delay-1s">
          We aim to provide the best service to ensure customer satisfaction at
          every step.
        </p>

        {/* Services Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
