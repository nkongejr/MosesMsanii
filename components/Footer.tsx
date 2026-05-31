// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Phone,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "Artificial Dendrocks",
  "Fresh Dendrocks",
  "Retouch",
  "Piercing",
  "Dye & Colour",
  "Hair Styling",
  "Beauty Touch Ups",
  "Grooming Services",
];

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:text-blue-400",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter/X",
    color: "hover:text-sky-400",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/254743718546",
    label: "WhatsApp",
    color: "hover:text-emerald-400",
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/3 blur-[80px] rounded-full" />

      {/* CTA Banner */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ready to{" "}
              <span className="shimmer-text">Transform?</span>
            </motion.h3>
            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Your next great look is just one appointment away. Book with
              Nairobi&apos;s elite beauty studio today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/254743718546?text=Hi%20Moses%20Msanii!%20I%27d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-black font-semibold hover:bg-gold-light transition-all duration-300 gold-glow w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+254743718546"
                className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold hover:border-gold/50 transition-all duration-300 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                +254 743 718 546
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center gold-glow">
                <Scissors className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-white">
                  Moses <span className="text-gold">Msanii</span>
                </span>
                <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
                  Beauty & Hair Studio
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Nairobi&apos;s premier beauty and hair studio — crafting
              confidence through bold, authentic, and transformative styles.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/50 ${s.color} hover:border-white/20 transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/40 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm hover:text-gold transition-colors duration-300 cursor-default flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+254743718546"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                    +254 743 718 546
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">
                    Location
                  </p>
                  <p className="text-white/70 text-sm">
                    Allsops, Ruaraka
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/254743718546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-emerald-400/70 text-sm group-hover:text-emerald-400 transition-colors duration-300">
                    Chat with us
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Moses Msanii Beauty & Hair Studio.
            All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/25 text-xs">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-gold fill-gold" />
            <span>in Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}