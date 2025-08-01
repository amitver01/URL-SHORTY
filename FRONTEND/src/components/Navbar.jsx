import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logoutWithBackend } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Use the context method that handles both backend and frontend logout
      await logoutWithBackend();
      navigate("/");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/");
    }
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Shortyy
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            {isAuthenticated && <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-yellow-400">Login</Link>
                <Link to="/signup" className="hover:text-yellow-400">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="hover:text-yellow-400">Logout</button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg px-4 pt-4 pb-6 space-y-4 text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          {isAuthenticated && <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block">Dashboard</Link>}
          {!isAuthenticated ? (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className="block">Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="block">Sign Up</Link>
            </>
          ) : (
            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="block">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
