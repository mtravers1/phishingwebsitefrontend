"use client";
import { useState } from "react";
import Link from "next/link";
export default function MaliciousGraduationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for submitting! Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Glitch Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 animate-gradient-x opacity-50"></div>
        <div className="absolute w-full h-full bg-[url('/images/hacker-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-3/4 relative z-10 bg-black/70 border-2 border-pink-500 rounded-2xl p-10 flex flex-col gap-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-pink-400 text-center mb-4 animate-glitch">
          🎓 Submit for your free graduation meal 
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-md bg-black/50 border border-pink-500 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md bg-black/50 border border-pink-500 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          <Link href="/phished">Submit 🎓</Link>
        </button>
      </form>

      {/* Styles */}
      <style jsx>{`
        @keyframes glitch {
          0% { text-shadow: 2px 2px red; }
          20% { text-shadow: -2px -2px cyan; }
          40% { text-shadow: 2px -2px lime; }
          60% { text-shadow: -2px 2px magenta; }
          80% { text-shadow: 2px 2px yellow; }
          100% { text-shadow: 0 0 #fff; }
        }

        .animate-glitch {
          animation: glitch 1s infinite;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
