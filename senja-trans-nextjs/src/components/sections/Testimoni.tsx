"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Titih",
    avatar: "T",
    color: "from-orange-400 to-orange-500",
    city: "Jakarta",
    service: "Sewa Transportasi",
    rating: 5,
    text: "Senja Trans benar-benar solusi transportasi terpercaya! Kendaraannya bersih dan pengemudinya sopan. Sangat recommended untuk rombongan keluarga.",
  },
  {
    id: 2,
    name: "Nul",
    avatar: "N",
    color: "from-blue-500 to-blue-600",
    city: "Bekasi",
    service: "Private Trip",
    rating: 5,
    text: "Kami menyewa minibus untuk rombongan keluarga dan sangat puas dengan pelayanannya. Tepat waktu, nyaman, dan driver sangat ramah.",
  },
  {
    id: 3,
    name: "Pras",
    avatar: "P",
    color: "from-green-500 to-green-600",
    city: "Bandung",
    service: "Sewa Transportasi",
    rating: 5,
    text: "Perjalanan dinas kantor kami jadi lancar dan efisien berkat layanan dari Senja Trans. Armada bagus, fasilitas lengkap. Pasti akan pakai lagi!",
  },
  {
    id: 4,
    name: "Rina",
    avatar: "R",
    color: "from-purple-500 to-purple-600",
    city: "Surabaya",
    service: "Open Trip",
    rating: 5,
    text: "Ikut open trip ke Bromo bareng Senja Trans pengalaman yang luar biasa. Dokumentasi bagus, makan enak, dan teman-teman seru!",
  },
  {
    id: 5,
    name: "Budi Santoso",
    avatar: "B",
    color: "from-red-500 to-red-600",
    city: "Yogyakarta",
    service: "Private Trip",
    rating: 5,
    text: "Liburan keluarga ke Malang jadi berkesan. Driver sangat membantu dan tahu tempat-tempat wisata yang bagus. Recommended!",
  },
  {
    id: 6,
    name: "Siti Aminah",
    avatar: "S",
    color: "from-pink-500 to-pink-600",
    city: "Semarang",
    service: "Sewa Transportasi",
    rating: 5,
    text: "Pelayanan sangat memuaskan dari awal booking sampai selesai trip. Responsif, profesional, dan harga sangat reasonable.",
  },
];

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="testimoni" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4 heading-underline">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Kepuasan pelanggan adalah prioritas kami. Berikut testimoni dari mereka yang
            telah menggunakan layanan Senja Trans.
          </p>

          {/* Google Reviews Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-secondary">4.9/5 Rating</div>
              <div className="text-xs text-gray-500">Google Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Avatar */}
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className={cn(
                        "w-32 h-32 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-5xl font-bold shadow-lg mb-4",
                        testimonials[currentIndex].color
                      )}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      {testimonials[currentIndex].avatar}
                    </motion.div>
                    <h3 className="text-xl font-bold text-secondary">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].city}</p>
                    <p className="text-xs text-primary font-medium mt-1">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold",
                    testimonial.color
                  )}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">&quot;{testimonial.text}&quot;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
