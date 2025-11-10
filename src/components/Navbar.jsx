import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">Cleanliness Portal</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/" className="hover:underline hover:text-gray-200">Home</Link>
          {user ? (
            <>
              <Link to="/issues" className="hover:underline hover:text-gray-200">All Issues</Link>
              <Link to="/add-issue" className="hover:underline hover:text-gray-200">Add Issue</Link>
              <Link to="/my-issues" className="hover:underline hover:text-gray-200">My Issues</Link>
              <Link to="/my-contribution" className="hover:underline hover:text-gray-200">My Contribution</Link>
            </>
          ) : (
            <Link to="/issues" className="hover:underline hover:text-gray-200">Issues</Link>
          )}
        </div>

        {/* Right Side & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative" ref={menuRef}>
              <img
                src={user.photoURL || "https://i.pravatar.cc/40"}
                alt="Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:ring-2 hover:ring-gray-300 transition"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl z-20 border border-gray-200">
                  <div className="p-4 flex flex-col items-center space-y-2">
                    <img
                      src={user.photoURL}
                      alt={displayName}
                      className="w-16 h-16 rounded-full border-2 border-gray-300"
                    />
                    <h3 className="font-semibold text-lg">{displayName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <hr className="w-full border-gray-300 my-2" />
                    <button
                      onClick={logout}
                      className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link to="/login" className="hover:underline hover:text-gray-200">Login</Link>
              <Link to="/register" className="hover:underline hover:text-gray-200">Register</Link>
            </div>
          )}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-blue-500 p-4 rounded">
          <Link to="/" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          {user ? (
            <>
              <Link to="/issues" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>All Issues</Link>
              <Link to="/add-issue" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Add Issue</Link>
              <Link to="/my-issues" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>My Issues</Link>
              <Link to="/my-contribution" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>My Contribution</Link>
            </>
          ) : (
            <Link to="/issues" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Issues</Link>
          )}
          {!user && (
            <>
              <Link to="/login" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" className="hover:underline hover:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
