// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-pink-500">probey</h2>
          <p className="text-gray-400">MERN Project</p>
        </div>

        {/* Middle Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-pink-500">
            Home
          </a>
          <a href="/about" className="hover:text-pink-500">
            About
          </a>
          <a href="/careers" className="hover:text-pink-500">
            Careers
          </a>
          <a href="/contact" className="hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-5">
          <a href="https://facebook.com" className="hover:text-pink-500">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            Instagram
          </a>
          <a href="https://twitter.com" className="hover:text-pink-500">
            Twitter
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-6">
        © 2026 probey| Terms & Privacy
      </div>
    </footer>
  );
}
