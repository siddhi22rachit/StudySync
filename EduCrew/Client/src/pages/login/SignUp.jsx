import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Animated stars background */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 1}s infinite`,
          }}
        />
      ))}
      
      <div className="w-full max-w-md p-8">
        {/* Logo */}
        <h1 className="text-center text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
          StudySync
        </h1>
        
        {/* Welcome text */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-400">Start your learning journey today</p>
        </div>

        {/* Sign up form */}
        <div className="mt-8 bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>

            {/* Email input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] "
            >
              Sign Up
            </button>

            <div className="relative flex items-center justify-center gap-3 my-4">
              <div className="h-px flex-1 bg-gray-700"></div>
              <span className="text-gray-400 text-sm">Or continue with</span>
              <div className="h-px flex-1 bg-gray-700"></div>
            </div>

            {/* Google sign up button */}
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Continue with Google
            </button>
          </form>

          {/* Sign in link */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="/sign-in" className="text-purple-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;