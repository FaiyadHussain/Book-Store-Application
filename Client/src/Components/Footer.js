import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <div className="bg-white text-black py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-blue-500 transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/all-books"
                  className="hover:text-blue-500 transition-all"
                >
                  All Books
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-blue-500 transition-all">
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="hover:text-blue-500 transition-all"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About</h3>
            <p className="text-gray-600 text-sm">
              Bookify is your ultimate destination for discovering captivating
              books and stories. Join our community of passionate readers and
              find your next great read.
            </p>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-600 text-sm">
                  Email: faiyad93999@gmail.com
                </p>
              </li>
              <li>
                <p className="text-gray-600 text-sm">Phone: +91-9849785616</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Bookify. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
