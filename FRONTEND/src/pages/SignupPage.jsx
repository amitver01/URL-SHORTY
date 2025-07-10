
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const handleSignup = async (data) => {
    try {
        const navigate = useNavigate();
        //console.log(data);
      const res = await axios.post('http://localhost:5000/api/auth/signup', data);
      console.log('Signup Success:', res.data);
      // Redirect or show success message
      navigate("/login")
    } catch (err) {
      console.error('Signup Failed:', err.response?.data?.message || err.message);
    }
  };

  return <AuthForm title="Signup" onSubmit={handleSignup} />;
};

export default SignupPage;
