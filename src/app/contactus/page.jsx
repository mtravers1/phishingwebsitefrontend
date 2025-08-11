"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API call (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1500));

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8">Contact Us</h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Info Section */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-400 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We’d love to hear from you! Whether it’s questions about our seafood,
            catering services, or fresh catch availability, reach out anytime.
          </p>

          <div>
            <p><strong>📍 Location:</strong> 123 Ocean Drive, Charleston, SC</p>
            <p><strong>📞 Phone:</strong> (843) 555-1234</p>
            <p><strong>✉️ Email:</strong> contact@seabites.com</p>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 p-8 space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full py-3 rounded-md text-white font-bold ${
              status === "sending" ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-semibold text-center mt-4">
              Thank you! We’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
