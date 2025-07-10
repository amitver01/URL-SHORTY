import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Shortyy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
            <Link to="/login" className="hover:text-yellow-400 transition duration-200">Login</Link>
            <Link
              to="/signup"
              className="hover:text-yellow-400 transition duration-200">
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg px-4 pt-4 pb-6 space-y-4 text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-300">
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md shadow-md font-semibold mx-auto w-fit"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
