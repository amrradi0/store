import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { HiOutlineArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white">

      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 p-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-10"
        aria-label="Scroll to top"
      >
        <HiOutlineArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">🛒</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                ShopEase
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for premium products at unbeatable prices.
            </p>
            

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MdEmail className="text-blue-400 w-4 h-4" />
                <span className="text-gray-400 text-sm">hello@shopease.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-green-400 w-4 h-4" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { href: "#products", label: "Products" },
                { to: "/cart", label: "Cart" },
                { to: "/favorites", label: "Favorites" },
                { to: "/sign", label: "Login" }
              ].map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Stay Connected
            </h3>
            

            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Get exclusive deals!</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
            

            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebook, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaTwitter, href: "#" },
                  { icon: FaLinkedin, href: "#" }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;