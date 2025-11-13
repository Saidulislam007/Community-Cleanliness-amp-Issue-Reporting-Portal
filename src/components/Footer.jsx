// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 mt-12">
      <div className="container justify-center mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / Site Info */}
        <div>
          <h1 className="text-2xl font-bold mb-3 text-white">CleanCity</h1>
          <p className="text-gray-400 leading-relaxed">
            Helping communities stay clean and reporting issues efficiently.
            Join us in keeping our surroundings beautiful and healthy!
          </p>
        </div>

        {/* Useful Links 1: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline hover:text-white transition">Home</Link></li>
            <li><Link to="/issues" className="hover:underline hover:text-white transition">All Issues</Link></li>
            <li><Link to="/add-issue" className="hover:underline hover:text-white transition">Add Issue</Link></li>
            <li><Link to="/my-contribution" className="hover:underline hover:text-white transition">My Contribution</Link></li>
          </ul>
        </div>

        {/* Useful Links 3: Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Resources</h2>
          <ul className="space-y-2">
            <li><a href="https://doe.portal.gov.bd" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition">Report to DOE</a></li>
            <li><a href="https://recyclemap.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition">Recycling Centers</a></li>
            <li><a href="https://www.cleanbd.org/" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition">Cleanliness Tips</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cleanliness Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
