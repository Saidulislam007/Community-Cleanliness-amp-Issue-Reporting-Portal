// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / Site Name */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold mb-2">Clean City</h1>
          <p className="text-gray-400">
            Helping communities stay clean and reporting issues efficiently.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/issues" className="hover:text-white transition">
                All Issues
              </Link>
            </li>
            <li>
              <Link to="/add-issue" className="hover:text-white transition">
                Add Issue
              </Link>
            </li>
            <li>
              <Link to="/my-contribution" className="hover:text-white transition">
                My Contribution
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-end md:items-end">
          <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} Cleanliness Portal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
