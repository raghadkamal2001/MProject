
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import axios from 'axios';

const Login = ({ switchForm }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
    
  //   try {
  //     const res = await axios.post(
  //       'http://localhost:5000/api/users/login', 
  //       formData, 
  //       { withCredentials: true } // أضف هذا
  //     );
    
  //     window.location.href = '/profile';
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'فشل تسجيل الدخول');
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    await axios.post("http://localhost:5000/api/users/login", formData, {
      withCredentials: true, // 🔥 Ensures cookies are stored
    });

    window.location.href = "/profile"; // Redirect after login
  } catch (error) {
    setError(error.response?.data?.message || "فشل تسجيل الدخول");
  } finally {
    setLoading(false);
  }
};
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/users/google-login', {
        token: credentialResponse.credential
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response?.data?.message || 'فشل تسجيل الدخول باستخدام جوجل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col"
    >
      <div className="mb-8 text-right">
        <h2 className="text-3xl font-bold text-[#383838]">تسجيل الدخول</h2>
        <p className="text-gray-500 mt-2">مرحباً بعودتك! يرجى تسجيل الدخول للوصول إلى حسابك</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-right">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
        <div className="text-right">
          <label htmlFor="email" className="block text-sm font-medium text-[#383838] mb-1">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7585ff] focus:border-[#7585ff] transition-all text-right"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            dir="rtl"
          />
        </div>
        
        <div className="text-right">
          <div className="flex justify-between items-center mb-1">
            <a href="#" className="text-sm text-[#7585ff] hover:text-[#51a31d]">نسيت كلمة المرور؟</a>
            <label htmlFor="password" className="block text-sm font-medium text-[#383838]">كلمة المرور</label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7585ff] focus:border-[#7585ff] transition-all text-right"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            dir="rtl"
          />
        </div>

        <div className="flex items-center justify-end">
          <label htmlFor="remember-me" className="mr-2 block text-sm text-[#383838]">تذكرني</label>
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#51a31d] border-gray-300 rounded focus:ring-[#7585ff]"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#51a31d] text-white py-3 rounded-lg font-medium shadow-md hover:bg-opacity-90 transition-colors"
          disabled={loading}
        >
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-gray-500 text-sm">أو الاستمرار باستخدام</span>
          </div>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError('فشل تسجيل الدخول باستخدام جوجل')}
            shape="pill"
            theme="filled_blue"
            width="100%"
            disabled={loading}
          />
        </div>
      </form>

      <p className="text-center text-gray-600 mt-8">
        ليس لديك حساب؟{' '}
        <button
          onClick={switchForm}
          className="text-[#7585ff] font-medium hover:text-[#51a31d]"
        >
          إنشاء حساب
        </button>
      </p>
    </motion.div>
  );
};

export default Login;