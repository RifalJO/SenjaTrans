"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  layanan: [
    { href: "#layanan", label: "Sewa Transportasi" },
    { href: "#layanan", label: "Open Trip" },
    { href: "#layanan", label: "Private Trip" },
    { href: "#armada", label: "Daftar Armada" },
    { href: "#harga", label: "Paket Harga" },
  ],
  navigasi: [
    { href: "#home", label: "Beranda" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#faq", label: "FAQ" },
    { href: "#footer", label: "Kontak" },
  ],
  kontak: [
    {
      icon: Phone,
      label: "+62 819-19510808",
      href: "tel:+6281919510808",
    },
    {
      icon: Mail,
      label: "senjatrans.official@gmail.com",
      href: "mailto:senjatrans.official@gmail.com",
    },
    {
      icon: MapPin,
      label: "Jl. Nangka 7, Jatiraden, Jatisampurna, Bekasi, Jawa Barat 17432",
      href: "https://maps.google.com/?q=-6.3541376155010525,106.92018696551871",
      external: true,
    },
    {
      icon: Clock,
      label: "24/7 Service",
      href: "#",
    },
  ],
};

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/6281919510808",
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/senjatrans",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/senjatrans",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="inline-block mb-4">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Senja Trans Logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Jalan-Jalan Ingat Senjatrans. Solusi transportasi terpercaya untuk
              sewa kendaraan, open trip, dan private trip dengan armada terawat
              dan pelayanan terbaik.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Layanan Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Layanan
            </h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigasi Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Navigasi
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Kontak
            </h3>
            <ul className="space-y-3">
              {footerLinks.kontak.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors duration-300 text-sm group"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.9703875324867!2d106.92018696551871!3d-6.3541376155010525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69930babf2fb4b%3A0xba3817e71861c6bc!2sPT.%20Senja%20Trans%20Nusantara!5e0!3m2!1sen!2sid!4v1764748963255!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
            title="Senja Trans Location"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://wa.me/6281919510808"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg" className="whatsapp-pulse">
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Gratis via WhatsApp
            </Button>
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-white/50 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Senja Trans. Hak Cipta Dilindungi.
          </motion.p>

          <motion.p
            className="text-white/50 text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            Senja Trans Team
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
