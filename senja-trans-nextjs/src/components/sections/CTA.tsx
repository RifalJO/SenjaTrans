"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300 && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Tooltip */}
          <motion.div
            className="fixed bottom-24 right-6 z-40 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 max-w-xs"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Chat langsung admin kami!
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Respon cepat 24/7
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-8 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200" />
          </motion.div>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/6281919510808"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse hover:shadow-glow-lg transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            
            {/* Ripple Effect Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#25D366]"
              animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
