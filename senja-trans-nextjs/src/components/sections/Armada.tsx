"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Zap, Wind, Wifi, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const armadaData = [
  {
    id: 1,
    name: "Hiace Premio",
    image: "/assets/images/1.png",
    capacity: 14,
    facilities: ["AC", "WiFi", "Reclining Seat", "USB Port"],
    price: "Rp 1.200.000",
    period: "/hari",
    category: "small",
  },
  {
    id: 2,
    name: "Toyota Coaster",
    image: "/assets/images/2.png",
    capacity: 30,
    facilities: ["AC", "WiFi", "TV", "Karaoke", "Toilet"],
    price: "Rp 2.500.000",
    period: "/hari",
    category: "medium",
  },
  {
    id: 3,
    name: "Medium Bus",
    image: "/assets/images/4.jpg",
    capacity: 35,
    facilities: ["AC", "WiFi", "Reclining Seat", "Snack"],
    price: "Rp 2.800.000",
    period: "/hari",
    category: "medium",
  },
  {
    id: 4,
    name: "Big Bus",
    image: "/assets/images/5.jpeg",
    capacity: 59,
    facilities: ["AC", "WiFi", "TV", "Karaoke", "Toilet", "Reclining Seat"],
    price: "Rp 3.500.000",
    period: "/hari",
    category: "large",
  },
  {
    id: 5,
    name: "Elf Long",
    image: "/assets/images/Mini Bus.png",
    capacity: 19,
    facilities: ["AC", "WiFi", "USB Port"],
    price: "Rp 1.500.000",
    period: "/hari",
    category: "small",
  },
];

const filters = [
  { id: "all", label: "Semua" },
  { id: "small", label: "< 20 Orang" },
  { id: "medium", label: "20-40 Orang" },
  { id: "large", label: "> 40 Orang" },
];

const facilityIcons: Record<string, React.ElementType> = {
  AC: Wind,
  WiFi: Wifi,
  TV: Zap,
  Karaoke: Zap,
  Toilet: Shield,
  "Reclining Seat": Shield,
  "USB Port": Zap,
  Snack: Zap,
};

export default function Armada() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState<typeof armadaData[0] | null>(null);

  const filteredArmada =
    activeFilter === "all"
      ? armadaData
      : armadaData.filter((vehicle) => vehicle.category === activeFilter);

  return (
    <section id="armada" className="section-padding bg-white">
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
            Armada Kami
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Pilih kendaraan yang sesuai dengan kebutuhan rombongan Anda. Semua armada terawat
            dan dilengkapi fasilitas lengkap.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Armada Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredArmada.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Capacity */}
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">{vehicle.capacity} Penumpang</span>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.facilities.slice(0, 4).map((facility) => {
                      const Icon = facilityIcons[facility] || Zap;
                      return (
                        <span
                          key={facility}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {facility}
                        </span>
                      );
                    })}
                    {vehicle.facilities.length > 4 && (
                      <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        +{vehicle.facilities.length - 4} lainnya
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Mulai dari</span>
                      <div className="text-xl font-bold text-primary">
                        {vehicle.price}
                        <span className="text-sm text-gray-500 font-normal">
                          {vehicle.period}
                        </span>
                      </div>
                    </div>
                    <Button variant="primary" size="sm">
                      Detail
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://wa.me/6281919510808"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Konsultasi Armada
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVehicle(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-72 sm:h-96">
                <Image
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-heading font-bold text-secondary mb-4">
                  {selectedVehicle.name}
                </h3>

                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium text-lg">
                    Kapasitas: {selectedVehicle.capacity} Penumpang
                  </span>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">Fasilitas:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedVehicle.facilities.map((facility) => {
                      const Icon = facilityIcons[facility] || Zap;
                      return (
                        <span
                          key={facility}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          {facility}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between items-center mb-6 p-4 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl">
                  <div>
                    <span className="text-sm text-gray-500">Harga Mulai Dari</span>
                    <div className="text-2xl font-bold text-primary">
                      {selectedVehicle.price}
                      <span className="text-sm text-gray-500 font-normal">
                        {selectedVehicle.period}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/6281919510808?text=Halo%20Senja%20Trans,%20saya%20tertarik%20menyewa%20${selectedVehicle.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      Pesan Sekarang
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
