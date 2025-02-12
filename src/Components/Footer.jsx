import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* Company Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-semibold">Ecommerce</h2>
          <p className="text-xs mt-1">© 2025. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-xs hover:text-red-500">About</a>
          <a href="#" className="text-xs hover:text-red-500">Contact</a>
          <a href="#" className="text-xs hover:text-red-500">Privacy</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="text-xs hover:text-red-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-xs hover:text-red-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xs hover:text-red-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
