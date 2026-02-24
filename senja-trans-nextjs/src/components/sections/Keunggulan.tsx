"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Star, Award, Headphones } from "lucide-react";
import { Button } from "@/components/ui/Button";

const advantages = [
  {
    icon: Shield,
    title: "Armada Terawat & Modern",
    description:
      "Semua kendaraan kami menjalani perawatan rutin dan pemeriksaan berkala untuk memastikan keamanan dan kenyamanan maksimal dalam setiap perjalanan.",
    image: "/assets/images/1.png",
    stats: { value: 100, suffix: "%", label: "Kondisi Prima" },
    reverse: false,
  },
  {
    icon: Users,
    title: "Cocok untuk Rombongan",
    description:
      "Dari keluarga kecil hingga rombongan besar, kami memiliki berbagai pilihan armada yang sesuai dengan kebutuhan kelompok Anda untuk wisata, acara, atau perjalanan dinas.",
    image: "/assets/images/2.png",
    stats: { value: 500, suffix: "+", label: "Trip Berhasil" },
    reverse: true,
  },
  {
    icon: Award,
    title: "Driver Ramah & Berpengalaman",
    description:
      "Tim pengemudi kami profesional, ramah, dan berpengalaman dengan pengetahuan rute yang luas, memastikan perjalanan Anda lancar dan menyenangkan.",
    image: "/assets/images/4.jpg",
    stats: { value: 10, suffix: "+", label: "Tahun Pengalaman" },
    reverse: false,
  },
  {
    icon: Clock,
    title: "Layanan 24/7",
    description:
      "Tim customer service kami siap melayani Anda kapan saja. Dukungan penuh sebelum, selama, dan setelah perjalanan untuk kepuasan Anda.",
    image: "/assets/images/5.jpeg",
    stats: { value: 24, suffix: "/7", label: "Support" },
    reverse: true,
  },
  {
    icon: Star,
    title: "Kepuasan Pelanggan",
    description:
      "Kepuasan Anda adalah prioritas kami. Dengan rating tinggi dari ratusan pelanggan, kami berkomitmen memberikan pelayanan terbaik.",
    image: "/assets/images/Mini Bus.png",
    stats: { value: 4.9, suffix: "★", label: "Rating Rata-rata" },
    reverse: false,
  },
  {
    icon: Headphones,
    title: "Dukungan Penuh",
    description:
      "Kami memberikan pendampingan penuh selama perjalanan, mulai dari perencanaan rute hingga bantuan darurat di jalan.",
    image: "/assets/images/3.png",
    stats: { value: 200, suffix: "+", label: "Pelanggan Puas" },
    reverse: true,
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="section-padding bg-gradient-to-b from-secondary to-gray-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 heading-underline">
            Kenapa Memilih Senja Trans?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-6">
            Kami mengutamakan kenyamanan dan keamanan dalam setiap perjalanan dengan armada
            yang variatif dan pelayanan terbaik.
          </p>
        </motion.div>

        {/* Advantages List */}
        <div className="space-y-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <motion.div
                className={advantage.reverse ? "md:order-2" : "md:order-1"}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <AnimatedCounter
                      value={advantage.stats.value}
                      suffix={advantage.stats.suffix}
                      className="text-3xl font-bold text-primary"
                    />
                    <div className="text-sm text-gray-600">{advantage.stats.label}</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={advantage.reverse ? "md:order-1" : "md:order-2"}>
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <advantage.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                  {advantage.title}
                </h3>

                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {advantage.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {index === 0 && (
                    <>
                      <ListItem>Maintenance rutin setiap bulan</ListItem>
                      <ListItem>Pengecekan sebelum setiap trip</ListItem>
                      <ListItem>Asuransi kendaraan lengkap</ListItem>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <ListItem>Pilihan armada 14-59 seat</ListItem>
                      <ListItem>Flexible untuk berbagai acara</ListItem>
                      <ListItem>Harga spesial untuk rombongan</ListItem>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <ListItem>Minimal 5 tahun pengalaman</ListItem>
                      <ListItem>Training customer service</ListItem>
                      <ListItem>Pengetahuan rute nusantara</ListItem>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <ListItem>Respon cepat via WhatsApp</ListItem>
                      <ListItem>Booking mudah 24 jam</ListItem>
                      <ListItem>Bantuan darurat di jalan</ListItem>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <ListItem>Testimoni positif pelanggan</ListItem>
                      <ListItem>Rating tinggi di Google</ListItem>
                      <ListItem>Repeat order tinggi</ListItem>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <ListItem>Konsultasi gratis</ListItem>
                      <ListItem>Perencanaan rute optimal</ListItem>
                      <ListItem>Backup armada jika diperlukan</ListItem>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
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
              Konsultasi Gratis
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-white/80">
      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span>{children}</span>
    </li>
  );
}

function AnimatedCounter({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={className}>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}
