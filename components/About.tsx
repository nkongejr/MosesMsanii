// components/About.tsx
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Award, Heart, Scissors, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Award, label: "Award-Winning Style" },
  { icon: Heart, label: "Client-First Approach" },
  { icon: Scissors, label: "Master Craftspeople" },
  { icon: TrendingUp, label: "Trend Leaders" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-black to-charcoal/10" />

      {/* Gold accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/3 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Images */}
          <div className="relative">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                style={{ y: imageY }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5]"
              >
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=85"
                  alt="Moses Msanii Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass border border-gold/30 rounded-xl p-4">
                    <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
                      Since 2019
                    </p>
                    <p className="text-white font-playfair text-lg font-semibold">
                      Redefining Beauty in Nairobi
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-6 sm:-right-10 w-40 sm:w-52 z-20"
            >
              <div className="rounded-2xl overflow-hidden aspect-square border-4 border-black shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=85"
                  alt="Hair styling detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -right-4 sm:right-4 glass border border-gold/30 rounded-2xl p-4 z-20 animate-float"
            >
              <p className="text-4xl font-playfair font-bold text-gold">500+</p>
              <p className="text-white/60 text-xs mt-1">Satisfied Clients</p>
            </motion.div>

            {/* Decorative gold border */}
            <div className="absolute top-8 -left-6 w-full h-full border border-gold/10 rounded-3xl -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Where Art Meets{" "}
              <span className="text-gold">Identity</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed mb-6"
            >
              Moses Msanii is redefining urban grooming and creative hair
              artistry in Nairobi through bold styles, precision craftsmanship,
              and authentic self-expression.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-sm sm:text-base leading-relaxed mb-10"
            >
              Born from a passion for African beauty culture and modern
              creativity, we blend traditional techniques with contemporary
              trends to deliver transformations that go beyond style — they tell
              your story. Every client walks out not just looking different, but
              feeling genuinely confident.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 glass border border-white/8 rounded-xl p-3 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <h.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/254743718546"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-black font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 gold-glow"
              >
                <Heart className="w-4 h-4" />
                Start Your Journey
              </a>
              <a
                href="tel:+254743718546"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass border border-white/20 text-white font-semibold text-sm tracking-wide hover:border-gold/50 transition-all duration-300"
              >
                Call Us Today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}