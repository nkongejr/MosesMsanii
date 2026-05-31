// components/Location.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Calendar,
} from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM", open: true },
  { day: "Saturday", time: "7:00 AM – 9:00 PM", open: true },
  { day: "Sunday", time: "9:00 AM – 6:00 PM", open: true },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Find Us
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            Visit Our{" "}
            <span className="text-gold">Studio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            Conveniently located at Allsops, Ruaraka — right in the heart of
            Nairobi. Come as you are, leave transformed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 relative"
            style={{ minHeight: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7997540637387!2d36.8616!3d-1.2643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17e9a6b6e6e9%3A0x1234567890!2sAllsops%2C%20Ruaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                filter: "grayscale(80%) invert(90%) contrast(80%) brightness(70%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moses Msanii Studio Location"
            />
            {/* Map overlay bar */}
            <div className="absolute bottom-0 left-0 right-0 glass-dark border-t border-white/10 p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">
                  Moses Msanii Studio
                </p>
                <p className="text-white/50 text-xs">
                  Allsops, Ruaraka, Nairobi, Kenya
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Allsops+Ruaraka+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-black text-xs font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                <Navigation className="w-3 h-3" />
                Directions
              </a>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Address Card */}
            <div className="glass border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Address</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Allsops, Ruaraka
                    <br />
                    Nairobi, Kenya
                  </p>
                  <a
                    href="https://maps.google.com/?q=Allsops+Ruaraka+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold text-xs mt-2 hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="glass border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <p className="text-white font-semibold">Opening Hours</p>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${h.open ? "bg-emerald-400" : "bg-red-400"}`}
                      />
                      <span className="text-white text-sm font-medium">
                        {h.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-1 gap-3">
              <motion.a
                href="https://wa.me/254743718546?text=Hi%20Moses%20Msanii!%20I%27d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                WhatsApp Booking
              </motion.a>

              <motion.a
                href="tel:+254743718546"
                className="flex items-center justify-center gap-3 py-4 rounded-xl glass border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 font-semibold transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                +254 743 718 546
              </motion.a>

              <motion.a
                href="https://wa.me/254743718546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl bg-gold hover:bg-gold-light text-black font-semibold transition-all duration-300 group gold-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Book Appointment Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}