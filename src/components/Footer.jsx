import React from 'react';
import { FaTwitter, FaInstagram, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Mobile Shop</h3>
            <p className="mb-4">
              Your one-stop shop for the latest mobile devices and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaPinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 Tech Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <span>+95 (09) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <span>info@mobileshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <a href="#" className="block w-40 hover:opacity-90 transition">
            <img 
              src="/assets/logo512.png" 
              alt="Developer" 
              className="w-full h-auto"
            />
          </a>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>
              &copy; {currentYear} Mobile Shop. All rights reserved. 
              <span className="block sm:inline"> Powered by Mobile Technology.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;