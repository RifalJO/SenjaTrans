"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const heroImages = [
  "/assets/images/1.png",
  "/assets/images/2.png",
  "/assets/images/4.jpg",
  "/assets/images/5.jpeg",
];

const statistics = [
  { value: 500, suffix: "+", label: "Trip Selesai" },
  { value: 200, suffix: "+", label: "Pelanggan" },
  { value: 5, suffix: "", label: "Armada" },
  { value: 4.9, suffix: "★", label: "Rating" },
];

const trustBadges = [
  "500+ pelanggan puas",
  "Armada terawat",
  "24/7 support",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Jalan-Jalan Ingat Senjatrans";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Counter animation for statistics
  const [animatedStats, setAnimatedStats] = useState(statistics.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      statistics.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.value / 50;
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(counter);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = currentValue;
            return newStats;
          });
        }, 30);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-800 to-secondary animate-gradient" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  className="flex items-center gap-2 text-white/80 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Solusi Transportasi untuk{" "}
              <span className="text-gradient">Kebutuhan Perjalanan</span> Anda
            </motion.h1>

            {/* Tagline with Typewriter */}
            <motion.p
              className="text-xl sm:text-2xl text-white/90 mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://wa.me/6281919510808"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg">
                  <Phone className="w-5 h-5" />
                  Pesan via WhatsApp
                </Button>
              </a>
              <a href="#layanan">
                <Button variant="outline" size="lg">
                  Lihat Paket Kami
                </Button>
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 819-19510808</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>senjatrans.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bekasi, Jawa Barat</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Slideshow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
              {heroImages.map((src, index) => (
                <motion.div
                  key={src}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={src}
                    alt={`Senja Trans Armada ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-primary"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Statistics Cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {animatedStats[index].toFixed(stat.value % 1 === 0 ? 0 : 1)}
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href="#layanan" className="text-white/50 hover:text-primary transition-colors">
              <ChevronDown className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
