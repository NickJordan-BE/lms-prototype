import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Brand</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a href="/signup" className="ml-1 px-4 py-1 rounded bg-green-700 text-white font-semibold hover:bg-yellow-500 transition-colors">
              Get Started
            </a>
            <a href="/login" className="text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;