"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bus, Map, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Bus,
    title: "Sewa Transportasi",
    description:
      "Layanan sewa kendaraan harian untuk berbagai kebutuhan perjalanan Anda dengan armada lengkap dan terawat.",
    features: [
      "Armada variatif",
      "Driver profesional",
      "AC & WiFi",
      "Asuransi perjalanan",
    ],
    popular: false,
    cta: "Sewa Sekarang",
  },
  {
    icon: Map,
    title: "Open Trip",
    description:
      "Bergabung dengan perjalanan grup ke destinasi wisata populer dengan harga terjangkau dan pengalaman tak terlupakan.",
    features: [
      "Destinasi pilihan",
      "Fasilitas lengkap",
      "Dokumentasi",
      "Makan termasuk",
    ],
    popular: true,
    cta: "Gabung Trip",
  },
  {
    icon: Users,
    title: "Private Trip",
    description:
      "Perjalanan privat eksklusif untuk keluarga atau rombongan dengan itinerary yang bisa disesuaikan keinginan Anda.",
    features: [
      "Itinerary custom",
      "Privasi terjamin",
      "Fleksibel waktu",
      "Pendamping wisata",
    ],
    popular: false,
    cta: "Rencanakan Trip",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Layanan() {
  return (
    <section id="layanan" className="section-padding bg-gradient-to-b from-background to-gray-100">
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
            Layanan Kami
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Selain penyewaan transportasi, Senjatrans bergerak di bidang open trip dan private trip
            untuk memberikan pengalaman perjalanan terbaik.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={cn(
                "relative group bg-white rounded-3xl p-8 shadow-lg card-hover overflow-hidden",
                service.popular && "ring-2 ring-primary ring-offset-2"
              )}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Star className="w-3 h-3" fill="currentColor" />
                  Populer
                </motion.div>
              )}

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <motion.div
                className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/6281919510808"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant={service.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {service.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
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
              Pesan Sekarang
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// CheckCircle Icon Component
function CheckCircle({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
