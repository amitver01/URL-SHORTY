// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const logoutWithBackend = async () => {
    try {
      // Call backend logout API to clear cookies
      await axios.post("http://localhost:5000/api/auth/logout", {}, {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Backend logout failed:", error);
    } finally {
      // Always clear frontend state regardless of backend response
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout, logoutWithBackend }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
