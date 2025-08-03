'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Login successful!');
        router.push('/dashboard');
      } else {
        toast.error(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0f0f0f] text-white font-[Outfit]">
      <Toaster position="top-center" />
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Welcome Back!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#1a1a1a] p-6 rounded-xl shadow-lg"
      >
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-5 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition ${
            loading && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center text-sm mt-4 text-gray-400">or</div>

        <button
          type="button"
          disabled
          className="w-full mt-3 border border-gray-500 py-2 rounded text-white opacity-60 cursor-not-allowed"
        >
          Sign in with Google (Coming soon)
        </button>

        <p className="text-sm mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
