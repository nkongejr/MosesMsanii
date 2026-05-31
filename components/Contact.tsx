// components/Contact.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Phone,
  MessageCircle,
  User,
  Smartphone,
  Scissors,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const services = [
  "Artificial Dendrocks",
  "Fresh Dendrocks",
  "Retouch",
  "Piercing",
  "Dye & Colour",
  "Hair Styling",
  "Beauty Touch Ups",
  "Grooming Services",
];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));

    const message = `Hi Moses Msanii!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/254743718546?text=${message}`,
        "_blank"
      );
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-black to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Gold accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/3 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            Book Your{" "}
            <span className="text-gold">Session</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            Ready for a transformation? Reach out and let&apos;s create
            something beautiful together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Have questions or want to discuss your style? We&apos;re just a
                message or call away — always happy to help.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">
                      Call Us
                    </p>
                    <a
                      href="tel:+254743718546"
                      className="text-white font-medium hover:text-gold transition-colors duration-300"
                    >
                      +254 743 718 546
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/254743718546"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-emerald-400 transition-colors duration-300"
                    >
                      Chat with Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <motion.a
              href="tel:+254743718546"
              className="flex items-center justify-center gap-3 py-4 rounded-xl glass border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 font-semibold transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/254743718546"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Booking
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/10 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 animate-pulse-gold">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                    Thank you! We&apos;re opening WhatsApp with your message.
                    We&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-full glass border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/10 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="group">
                      <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold transition-colors duration-300" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold transition-colors duration-300" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 7XX XXX XXX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="group">
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold transition-colors duration-300 z-10" />
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-charcoal">
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-charcoal">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30 group-focus-within:text-gold transition-colors duration-300" />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about the style you want..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gold hover:bg-gold-light text-black font-semibold tracking-wide transition-all duration-300 gold-glow flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <p className="text-white/30 text-xs text-center">
                    Your message will be sent directly to our WhatsApp for quick
                    response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}