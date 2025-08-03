'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message || 'Signup successful!');
      router.push('/dashboard');
    } else {
      alert(data.message || 'Signup failed!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0f0f0f] text-white font-[Outfit]">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Join Now !
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          onChange={handleChange}
          className="w-full p-3 mb-5 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
          Sign Up
        </button>
        <div className="text-center text-sm mt-4 text-gray-400">or</div>
        <button
          type="button"
          className="w-full mt-3 border border-gray-500 py-2 rounded text-white hover:bg-gray-800 transition"
        >
          Sign up with Google
        </button>
        <p className="text-sm mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">Log in</a>
        </p>
      </form>
    </div>
  );
}
