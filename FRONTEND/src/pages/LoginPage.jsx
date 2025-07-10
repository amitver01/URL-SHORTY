
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      console.log('Login Success:', res.data);
      // Save token, redirect, etc.
      navigate("/");
      
    } catch (err) {
      console.error('Login Failed:', err.response?.data?.message || err.message);
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
