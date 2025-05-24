import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo/Brand */}
          <div className="flex flex-1 justify-center md:justify-start">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold text-white tracking-tight hover:text-gray-300 transition-colors duration-200">
                  MyShop
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
                aria-current="page"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 w-full text-left"
              aria-current="page"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;