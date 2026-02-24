"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const pricingPlans = {
  harian: [
    {
      name: "Basic",
      price: "Rp 800.000",
      period: "/hari",
      description: "Cocok untuk perjalanan singkat dalam kota",
      features: [
        "Armada Hiace (14 seat)",
        "Driver profesional",
        "BBM termasuk",
        "Parkir & tol ditanggung penyewa",
        "8 jam operasional",
        "AC & musik",
      ],
      popular: false,
      cta: "Pilih Basic",
    },
    {
      name: "Standard",
      price: "Rp 1.500.000",
      period: "/hari",
      description: "Paling populer untuk rombongan menengah",
      features: [
        "Armada Medium Bus (30-35 seat)",
        "Driver profesional & ramah",
        "BBM termasuk",
        "Parkir & tol termasuk",
        "12 jam operasional",
        "AC, WiFi & TV",
        "Air mineral",
      ],
      popular: true,
      cta: "Pilih Standard",
    },
    {
      name: "Premium",
      price: "Rp 2.500.000",
      period: "/hari",
      description: "Pengalaman perjalanan mewah dan nyaman",
      features: [
        "Armada Big Bus (59 seat)",
        "Driver & co-driver",
        "BBM & tol semua termasuk",
        "24 jam operasional",
        "AC, WiFi, TV & Karaoke",
        "Toilet onboard",
        "Reclining seat",
        "Makan driver termasuk",
      ],
      popular: false,
      cta: "Pilih Premium",
    },
  ],
  mingguan: [
    {
      name: "Basic",
      price: "Rp 5.000.000",
      period: "/minggu",
      description: "Hemat untuk sewa 7 hari",
      features: [
        "Armada Hiace (14 seat)",
        "Driver profesional",
        "BBM termasuk",
        "Parkir & tol ditanggung penyewa",
        "Unlimited km (dalam kota)",
        "AC & musik",
        "Diskon 10%",
      ],
      popular: false,
      cta: "Pilih Basic",
    },
    {
      name: "Standard",
      price: "Rp 9.500.000",
      period: "/minggu",
      description: "Best value untuk trip mingguan",
      features: [
        "Armada Medium Bus (30-35 seat)",
        "Driver profesional & ramah",
        "BBM & tol termasuk",
        "Unlimited km (Jabodetabek)",
        "AC, WiFi & TV",
        "Air mineral setiap hari",
        "Diskon 15%",
      ],
      popular: true,
      cta: "Pilih Standard",
    },
    {
      name: "Premium",
      price: "Rp 16.000.000",
      period: "/minggu",
      description: "Paket lengkap untuk perjalanan panjang",
      features: [
        "Armada Big Bus (59 seat)",
        "Driver & co-driver",
        "All in (BBM, tol, parkir)",
        "Unlimited km (Pulau Jawa)",
        "AC, WiFi, TV & Karaoke",
        "Toilet onboard",
        "Reclining seat",
        "Makan driver termasuk",
        "Diskon 20%",
      ],
      popular: false,
      cta: "Pilih Premium",
    },
  ],
};

export default function HargaPackage() {
  const [billingPeriod, setBillingPeriod] = useState<"harian" | "mingguan">("harian");

  const plans = pricingPlans[billingPeriod];

  return (
    <section id="harga" className="section-padding bg-gradient-to-b from-gray-100 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4 heading-underline">
            Paket Harga
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Pilih paket yang sesuai dengan kebutuhan Anda. Harga transparan tanpa biaya tersembunyi.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingPeriod("harian")}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                billingPeriod === "harian"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              Harian
            </button>
            <button
              onClick={() => setBillingPeriod("mingguan")}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                billingPeriod === "mingguan"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              Mingguan
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                "relative bg-white rounded-3xl p-8 shadow-lg card-hover flex flex-col",
                plan.popular && "ring-2 ring-primary ring-offset-2 scale-105 z-10"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                  initial={{ scale: 0, y: -10 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Star className="w-4 h-4" fill="currentColor" />
                  Paling Populer
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-heading font-bold text-secondary text-center mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 text-center mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6281919510808?text=Halo%20Senja%20Trans,%20saya%20tertarik%20dengan%20paket%20${plan.name}%20(${billingPeriod})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-12 p-6 bg-primary/5 rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-600">
            <strong>Catatan:</strong> Harga dapat berubah tergantung musim, rute perjalanan, dan
            durasi penyewaan. Hubungi kami untuk penawaran yang lebih akurat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
