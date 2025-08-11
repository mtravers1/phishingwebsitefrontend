"use client";
import { useState } from "react";
import logo from "../../../public/fishlogo.jpg"
import Image from "next/image";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <div className="flex justify-center mb-6">
          {/* Seafood logo or icon */}
          <Image
            src={logo}
            alt=""
          />
            {/* <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-1 4a8 8 0 11-16 0 8 8 0 0116 0z"
            /> */}
         
        </div>
        <h1 className="text-center text-3xl font-bold text-cyan-700">
            Welcome to PhishFry
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-cyan-300 px-4 py-3 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-cyan-300 px-4 py-3 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-cyan-600 hover:text-cyan-800 font-semibold"
          >
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
