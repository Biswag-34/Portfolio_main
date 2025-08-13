"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs.sendForm(
      "service_3ly19tm", // from EmailJS dashboard
      "template_8uv95vr", // from EmailJS dashboard
      formRef.current,
      "mqRdghCMu99Gq36Y5" // from EmailJS dashboard
    ).then(
      () => {
        setLoading(false);
        setSuccess(true);
        formRef.current?.reset();
      },
      (err) => {
        setLoading(false);
        alert("Oops, something went wrong: " + err.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:w-1/2 mx-auto">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}
