// components/Services.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scissors,
  RefreshCw,
  Droplets,
  Palette,
  Wind,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Artificial Dendrocks",
    description:
      "Expertly crafted artificial dendrocks that blend seamlessly with your natural hair, delivering a bold and lasting statement look.",
    accent: "from-amber-500/20 to-gold/10",
    border: "hover:border-amber-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    tag: "Most Popular",
  },
  {
    icon: Star,
    title: "Fresh Dendrocks",
    description:
      "Freshly styled dendrocks with a clean, modern finish — perfect for those seeking a vibrant, culture-rich expression of identity.",
    accent: "from-gold/20 to-yellow-600/10",
    border: "hover:border-gold/50",
    glow: "hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]",
    tag: "Signature",
  },
  {
    icon: RefreshCw,
    title: "Retouch",
    description:
      "Professional touch-up services to restore and refresh your existing style, keeping you looking fresh and well-maintained.",
    accent: "from-emerald-500/20 to-teal-600/10",
    border: "hover:border-emerald-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    tag: null,
  },
  {
    icon: Zap,
    title: "Piercing",
    description:
      "Safe, hygienic, and precise piercing services using premium materials — express your individuality with confidence.",
    accent: "from-purple-500/20 to-violet-600/10",
    border: "hover:border-purple-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    tag: "New",
  },
  {
    icon: Palette,
    title: "Dye & Colour",
    description:
      "Vibrant, salon-quality hair colouring from subtle highlights to bold transformations — your vision brought to life.",
    accent: "from-rose-500/20 to-pink-600/10",
    border: "hover:border-rose-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
    tag: null,
  },
  {
    icon: Wind,
    title: "Hair Styling",
    description:
      "Creative and trend-driven hair styling for every occasion — from everyday elegance to statement event looks.",
    accent: "from-sky-500/20 to-blue-600/10",
    border: "hover:border-sky-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]",
    tag: null,
  },
  {
    icon: Sparkles,
    title: "Beauty Touch Ups",
    description:
      "Comprehensive beauty services including makeup, skincare prep, and finishing touches for a polished, glowing look.",
    accent: "from-gold/20 to-amber-600/10",
    border: "hover:border-gold/50",
    glow: "hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]",
    tag: null,
  },
  {
    icon: Droplets,
    title: "Grooming Services",
    description:
      "Premium men's and unisex grooming — beard shaping, scalp treatments, and tailored care for a sharp, refined finish.",
    accent: "from-slate-400/20 to-gray-600/10",
    border: "hover:border-slate-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.2)]",
    tag: null,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative glass border border-white/8 rounded-2xl p-6 sm:p-7 cursor-default transition-all duration-500 ${service.border} ${service.glow} overflow-hidden`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-3xl" />

      {/* Tag */}
      {service.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2.5 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-[10px] font-semibold tracking-wide uppercase">
            {service.tag}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
        >
          <service.icon className="w-6 h-6 text-gold" />
        </div>

        {/* Content */}
        <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
          {service.description}
        </p>

        {/* Bottom arrow */}
        <div className="mt-5 flex items-center gap-2 text-gold/0 group-hover:text-gold transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-semibold tracking-wide uppercase">
            Learn More
          </span>
          <span className="text-base">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/30 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Premium Services{" "}
            <span className="text-gold">Crafted</span>
            <br className="hidden sm:block" /> for You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From signature Dendrocks to vibrant colour services — every
            treatment is delivered with precision, artistry, and a deeply
            personal touch.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm mb-6">
            Ready to transform your look?
          </p>
          <motion.a
            href="https://wa.me/254743718546?text=Hi!%20I%27d%20like%20to%20book%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-black font-semibold tracking-wide hover:bg-gold-light transition-all duration-300 gold-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            Book Your Session
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}