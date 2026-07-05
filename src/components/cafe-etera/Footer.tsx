"use client";

import { motion } from "framer-motion";
import { Instagram, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0A07] border-t border-[#C9A84C]/10 overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="font-serif text-3xl font-medium text-[#C9A84C] tracking-wide">
              CAFE ETERA
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-[#A89070] mb-8"
          >
            Brewed With Intent.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-8"
          />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.instagram.com/cafeetera"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#C9A84C]/20 text-[#F5ECD7] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide">@cafeetera</span>
            </a>
          </motion.div>

          {/* Decorative Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]/20" />
            <Coffee className="h-5 w-5 text-[#C9A84C]/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]/20" />
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A84C]/5">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xs text-[#A89070]/60"
          >
            &copy; 2025 Cafe Etera. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
