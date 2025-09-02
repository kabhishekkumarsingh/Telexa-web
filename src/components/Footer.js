import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Left Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="flex items-center justify-center mr-1">
  <img
    src="/assets/logo/logo.jpg"
    alt="Telexa Logo"
    className="w-40 h-12 object-contain"
  />
</div>

            </div>

            <p className="text-gray-600 mb-4 max-w-md">
              Telexa Technology Pvt Ltd Is A Research & Development Company
              Which Aims To Solve The Problems Of Agriculture, Home, Offices,
              Industries & Government.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaGlobe size={20} />
              </a>
              <a
                href="mailto:telexaindia@gmail.com"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <GoMail size={20} />
              </a>
              <a
                href="tel:+91 8989954333"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaPhone size={20} />
              </a>
              <a
                href="https://www.facebook.com/telexaindia/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/TelexaL"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJYBIQnEU-u6itz2VsRNQ_g"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.instagram.com/telexaindia/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/telexa/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/918989954333"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center justify-center md:justify-start">
                <GoMail size={16} className="mr-2" />
                <a href="mailto:telexaindia@gmail.com">telexaindia@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhone size={16} className="mr-2" />
                <a href="tel:+91 8989954333">+91 8989954333</a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-center md:text-left">
                <FaMapMarkerAlt size={29} className="mr-2" />
                <a
                  href="https://www.google.com/maps/place/Telexa+Technology+Private+Limited/@22.7082727,75.9102873,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  22, Vrindavan Garden, Scheme no 140, Pipliyahana, Indore,
                  Madhya Pradesh 452001
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Telexa Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
