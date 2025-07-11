import React from 'react';
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate(); // ✅ move this outside the function

  const handleSignup = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', data);
      console.log('Signup Success:', res.data);
      navigate('/login'); // redirect after successful signup
    } catch (err) {
      console.error('Signup Failed:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 px-4">
      {/* Background Decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
        <AuthForm title="Signup" onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
