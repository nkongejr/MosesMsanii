// components/Testimonials.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amina Wanjiru",
    role: "Fashion Blogger, Nairobi",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    review:
      "Moses Msanii completely transformed my look! My dendrocks are absolutely stunning — I get compliments everywhere I go. The team is so professional and the studio environment is immaculate.",
    service: "Artificial Dendrocks",
  },
  {
    name: "Brian Otieno",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    review:
      "The grooming experience here is unmatched in Nairobi. Clean, precise, and they actually listen to what you want. I won't go anywhere else for my monthly grooming sessions.",
    service: "Grooming Services",
  },
  {
    name: "Fatuma Aisha",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=23",
    rating: 5,
    review:
      "Had my hair dyed for the first time and was nervous, but the Moses Msanii team made me feel completely at ease. The colour is vibrant and exactly what I envisioned. Absolutely worth every shilling!",
    service: "Dye & Colour",
  },
  {
    name: "Kevin Kamau",
    role: "Photographer",
    avatar: "https://i.pravatar.cc/100?img=33",
    rating: 5,
    review:
      "Got my ear pierced here — super clean procedure, professional staff, and the aftercare advice was excellent. Healed perfectly. Highly recommend for piercing services in Nairobi.",
    service: "Piercing",
  },
  {
    name: "Sharon Njeri",
    role: "Marketing Professional",
    avatar: "https://i.pravatar.cc/100?img=56",
    rating: 5,
    review:
      "The beauty touch-up service before my event was incredible. I walked in feeling ordinary and left feeling like a queen. The attention to detail is what sets Moses Msanii apart from everyone else.",
    service: "Beauty Touch Ups",
  },
  {
    name: "Daniel Mwangi",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    review:
      "Fresh dendrocks done perfectly — tight, clean, and they lasted so long. The studio at Allsops is easy to find and always has a great vibe. Moses himself is a true artist.",
    service: "Fresh Dendrocks",
  },
];

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Gold orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold/4 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gold/4 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Client Stories
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            What Our{" "}
            <span className="text-gold">Clients</span> Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-white/60 text-sm ml-2">
              5.0 average rating
            </span>
          </motion.div>
        </div>

        {/* Carousel — Desktop: 3 cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleIndices().map((idx, position) => {
              const t = testimonials[idx];
              const isCenter = position === 1;
              return (
                <motion.div
                  key={`${idx}-${position}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.5,
                    y: isCenter ? 0 : 20,
                    scale: isCenter ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`glass border rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 ${
                    isCenter
                      ? "border-gold/30 shadow-gold"
                      : "border-white/8 hover:border-white/15"
                  }`}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(idx);
                  }}
                >
                  <Quote className="w-8 h-8 text-gold/40 mb-5" />

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isCenter ? "text-white/80" : "text-white/50"
                    }`}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>

                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={`w-10 h-10 rounded-full object-cover border-2 ${
                        isCenter ? "border-gold" : "border-white/20"
                      }`}
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </div>

                  {isCenter && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-gold text-xs font-medium tracking-wide">
                        ✓ {t.service}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Single Card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass border border-gold/30 rounded-2xl p-6 shadow-gold"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-5" />
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <p className="text-white text-sm font-semibold">
                    {testimonials[current].name}
                  </p>
                  <p className="text-white/40 text-xs">{testimonials[current].role}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-gold text-xs font-medium">
                  ✓ {testimonials[current].service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <motion.button
            onClick={prev}
            className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-white hover:border-gold/50 hover:text-gold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(i);
                }}
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-white hover:border-gold/50 hover:text-gold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}