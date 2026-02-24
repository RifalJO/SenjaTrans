"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "Bagaimana cara memesan layanan Senja Trans?",
    answer:
      "Anda dapat memesan dengan mudah melalui WhatsApp ke nomor +62 819-19510808. Tim kami akan merespons dengan cepat dan membantu Anda memilih armada yang sesuai dengan kebutuhan. Setelah konfirmasi, Anda akan menerima detail pemesanan dan instruksi pembayaran.",
    category: "pemesanan",
  },
  {
    question: "Apa saja metode pembayaran yang tersedia?",
    answer:
      "Kami menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI), e-wallet (GoPay, OVO, Dana), dan pembayaran tunai untuk beberapa kondisi. Pembayaran DP minimal 30% dari total harga untuk konfirmasi booking.",
    category: "pembayaran",
  },
  {
    question: "Berapa kapasitas penumpang untuk setiap armada?",
    answer:
      "Kami memiliki berbagai pilihan armada: Hiace Premio (14 seat), Elf Long (19 seat), Toyota Coaster (30 seat), Medium Bus (35 seat), dan Big Bus (59 seat). Semua armada dapat disesuaikan dengan kebutuhan rombongan Anda.",
    category: "armada",
  },
  {
    question: "Apakah harga sudah termasuk BBM dan tol?",
    answer:
      "Untuk paket Standard dan Premium, harga sudah termasuk BBM dan tol. Untuk paket Basic, BBM dan tol ditanggung oleh penyewa. Detail ini akan dijelaskan dengan jelas saat pemesanan untuk menghindari kesalahpahaman.",
    category: "harga",
  },
  {
    question: "Berapa jam operasional untuk penyewaan harian?",
    answer:
      "Paket Basic mencakup 8 jam operasional, Standard 12 jam, dan Premium 24 jam. Kelebihan jam akan dikenakan biaya tambahan yang akan diinformasikan sebelumnya. Driver akan mencatat waktu mulai dan selesai operasional.",
    category: "harga",
  },
  {
    question: "Apakah driver sudah termasuk dalam harga sewa?",
    answer:
      "Ya, semua harga sewa sudah termasuk driver profesional yang ramah dan berpengalaman. Untuk paket Premium dengan Big Bus, kami juga menyediakan co-driver untuk memastikan keselamatan dan kenyamanan perjalanan jarak jauh.",
    category: "layanan",
  },
  {
    question: "Bisakah itinerary untuk private trip disesuaikan?",
    answer:
      "Tentu! Salah satu keunggulan private trip adalah fleksibilitas itinerary. Anda dapat mendiskusikan destinasi yang ingin dikunjungi dengan tim kami, dan kami akan membantu merencanakan rute terbaik untuk pengalaman perjalanan yang optimal.",
    category: "layanan",
  },
  {
    question: "Apa yang harus dilakukan jika terjadi kendala di jalan?",
    answer:
      "Kami menyediakan layanan dukungan 24/7. Jika terjadi kendala, segera hubungi nomor darurat kami. Tim siap membantu dengan solusi cepat, termasuk pengiriman armada pengganti jika diperlukan untuk memastikan perjalanan Anda tetap lancar.",
    category: "layanan",
  },
  {
    question: "Berapa jauh hari sebaiknya saya melakukan pemesanan?",
    answer:
      "Untuk hari biasa, minimal 2-3 hari sebelum keberangkatan. Untuk weekend, hari libur, atau musim tinggi (lebaran, natal, tahun baru), kami sarankan memesan 1-2 minggu sebelumnya untuk memastikan ketersediaan armada.",
    category: "pemesanan",
  },
  {
    question: "Apakah ada diskon untuk pemesanan dalam jumlah banyak?",
    answer:
      "Ya, kami menawarkan diskon khusus untuk pemesanan berulang, sewa mingguan/bulanan, dan rombongan besar. Hubungi tim marketing kami untuk mendapatkan penawaran khusus yang disesuaikan dengan kebutuhan Anda.",
    category: "harga",
  },
  {
    question: "Fasilitas apa saja yang tersedia di armada?",
    answer:
      "Fasilitas bervariasi tergantung armada: AC, WiFi, TV, karaoke, toilet onboard, reclining seat, USB charging port, dan air mineral. Detail fasilitas lengkap dapat dilihat di halaman Armada atau ditanyakan ke tim kami.",
    category: "armada",
  },
  {
    question: "Apakah Senja Trans melayani perjalanan luar kota/pulau?",
    answer:
      "Ya, kami melayani perjalanan ke seluruh wilayah Pulau Jawa dan Bali. Untuk destinasi khusus, silakan konsultasikan dengan tim kami untuk penyesuaian harga dan persiapan yang diperlukan.",
    category: "layanan",
  },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "pemesanan", label: "Pemesanan" },
  { id: "harga", label: "Harga" },
  { id: "armada", label: "Armada" },
  { id: "layanan", label: "Layanan" },
  { id: "pembayaran", label: "Pembayaran" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Temukan jawaban atas pertanyaan umum tentang layanan Senja Trans.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-secondary pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed pl-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Tidak ditemukan pertanyaan yang sesuai dengan pencarian Anda.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Hubungi kami untuk bantuan lebih lanjut.
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan? Tim kami siap membantu Anda.
          </p>
          <a
            href="https://wa.me/6281919510808"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Hubungi Kami
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
