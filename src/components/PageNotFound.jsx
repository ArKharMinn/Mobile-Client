import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <main className="max-w-2xl mx-auto text-center px-6 py-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
              <span className="text-3xl font-bold text-indigo-600">404</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaHome className="text-base" />
              Return Home
            </Link>
            
            <a
              href="mailto:support@yoursite.com"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;