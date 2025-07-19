
import React from 'react';
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/NavBar';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data, {
          withCredentials: true,
        });
      console.log('Login Success:', res.data);

      // Store token in localStorage and update auth context
      if (res.data.token) {
        login(res.data.token); // This will handle both localStorage and context state
      }

      navigate('/dashboard');
    } catch (err) {
      console.error('Login Failed:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 px-4">
      {/* Background Decorations */}
      <Navbar/>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login to Your Account</h2>

        <AuthForm title="Login" onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
