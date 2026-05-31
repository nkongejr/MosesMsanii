// components/Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    delay: 0.2,
  },
  {
    icon: Star,
    value: "Premium",
    label: "Grooming",
    delay: 0.4,
  },
  {
    icon: Zap,
    value: "Modern",
    label: "Styles",
    delay: 0.6,
  },
];

// High quality beauty/hair images from Unsplash
const heroImages = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=90",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=90",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=90",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        {heroImages.map((img, i) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={img}
              alt={`Moses Msanii Studio ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-[1]" />

      {/* Gold accent light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] z-[1]" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass border border-gold/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
          <span className="text-gold text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
            Nairobi&apos;s Premier Beauty Studio
          </span>
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-playfair text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
        >
          <span className="block text-white">Crafting</span>
          <span className="block shimmer-text text-shadow-gold">
            Confidence
          </span>
          <span className="block text-white/90">Through Style</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-inter"
        >
          Experience Nairobi&apos;s most creative hair artistry — from precision
          Dendrocks to bold colour, expert grooming and beauty transformations
          that express your authentic self.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="https://wa.me/254743718546?text=Hi%20Moses%20Msanii!%20I%27d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full bg-gold text-black font-semibold text-sm sm:text-base tracking-wide overflow-hidden gold-glow transition-all duration-300 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.a>

          <motion.button
            onClick={scrollToServices}
            className="group px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold text-sm sm:text-base tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`glass border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 hover:border-gold/40 transition-all duration-300 cursor-default ${
                i === 0
                  ? "animate-float"
                  : i === 1
                  ? "animate-float-delay"
                  : "animate-float-delay-2"
              }`}
              whileHover={{ scale: 1.05, borderColor: "rgba(201,168,76,0.5)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToServices}
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>

      {/* Image indicators */}
      <div className="absolute bottom-16 right-8 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentImage
                ? "w-8 h-1.5 bg-gold"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}