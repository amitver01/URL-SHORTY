import React, { useState } from 'react';

const AuthForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {title === 'Signup' && (
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          value={formData.user_name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {title}
      </button>
    </form>
  );
};

export default AuthForm;
