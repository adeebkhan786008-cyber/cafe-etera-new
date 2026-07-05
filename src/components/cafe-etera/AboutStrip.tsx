"use client";

import { motion } from "framer-motion";
import { Coffee, ChefHat, IndianRupee } from "lucide-react";

const stats = [
  {
    icon: Coffee,
    title: "Fresh Chai",
    subtitle: "Brewed to Order",
  },
  {
    icon: ChefHat,
    title: "In-House Baked",
    subtitle: "Every Single Morning",
  },
  {
    icon: IndianRupee,
    title: "Starting ₹30",
    subtitle: "No Compromise",
  },
];

export default function AboutStrip() {
  return (
    <section className="relative bg-[#2A1F14] py-16 overflow-hidden">
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-center md:text-left"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                <stat.icon className="h-5 w-5 text-[#C9A84C]" />
              </div>
              
              {/* Text */}
              <div>
                <h3 className="font-serif text-lg font-medium text-[#F5ECD7]">
                  {stat.title}
                </h3>
                <p className="text-sm text-[#A89070] tracking-wide">
                  {stat.subtitle}
                </p>
              </div>

              {/* Separator (not on last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#C9A84C]/20" style={{ left: `${(index + 1) * 33.33}%` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>
  );
}
