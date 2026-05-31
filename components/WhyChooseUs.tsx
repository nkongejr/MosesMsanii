// components/WhyChooseUs.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Shield,
  TrendingUp,
  Crown,
  UserCheck,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Skilled Professionals",
    description:
      "Our team of master stylists brings years of expertise and a passion for transformative beauty artistry.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: Shield,
    title: "Clean Environment",
    description:
      "We maintain impeccable hygiene standards — your safety and comfort are always our highest priority.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: TrendingUp,
    title: "Trend-Driven Styles",
    description:
      "Staying ahead of global and African beauty trends to bring you the most current and coveted looks.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  {
    icon: Crown,
    title: "Premium Experience",
    description:
      "From consultation to your final reveal — expect nothing less than a luxurious, five-star experience.",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: UserCheck,
    title: "Personalized Looks",
    description:
      "Every style is uniquely tailored to your face shape, lifestyle, and personal aesthetic vision.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description:
      "We invest in top-tier professional tools and products to ensure the best results every single time.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
];

export default function WhyChooseUs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-black to-charcoal/10" />

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold to-transparent w-full"
            style={{ top: `${i * 14}%` }}
          />
        ))}
      </div>

      {/* Gold accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/4 blur-[100px] rounded-full" />

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
              Why Moses Msanii
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            The Msanii{" "}
            <span className="text-gold">Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            Excellence is not an act — it&apos;s our standard. Here&apos;s what
            sets us apart.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass border border-white/8 rounded-2xl p-6 sm:p-8 hover:border-white/15 transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Hover gradient bg */}
              <div
                className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Number */}
              <div className="absolute top-4 right-4 text-5xl font-playfair font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                <h3
                  className={`font-playfair text-xl font-semibold text-white mb-3 group-hover:${feature.color} transition-colors duration-300`}
                >
                  {feature.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass border border-gold/20 rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "8+", label: "Services Offered" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center sm:px-6"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                className="font-playfair text-3xl sm:text-4xl font-bold text-gold mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-white/50 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}