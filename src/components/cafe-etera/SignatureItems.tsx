"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Croissant, Beef, ArrowUpRight } from "lucide-react";
"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Croissant, Beef, ArrowUpRight } from "lucide-react";
"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Croissant, Beef, ArrowUpRight } from "lucide-react";
"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Croissant, Beef, ArrowUpRight } from "lucide-react";
"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Croissant, Beef, ArrowUpRight } from "lucide-react";
const menuItems = [
  {
    icon: Coffee,
    name: "The Chai",
    description: "Ginger, cardamom, perfectly balanced. Not too sweet — just right.",
    price: "₹30",
  },
  {
    icon: Croissant,
    name: "Bun Maska",
    description: "Fresh-baked in-house, fluffy, loaded with butter. Pure comfort.",
    price: "₹40",
  },
  {
    icon: Beef,
    name: "Mini Burger",
    description: "Juicy, fresh, packed with flavor. A snack unlike anything nearby.",
    price: "₹80",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function SignatureItems() {
  return (
    <section id="menu" className="relative bg-[#0D0A07] py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#A89070]">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#F5ECD7] sm:text-5xl">
            What People Can&apos;t
            <br />
            <span className="text-[#C9A84C]">Stop Ordering</span>
          </h2>
        </motion.div>

        {/* Menu Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" as const }
              }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A1F14] border border-[#C9A84C]/10 transition-all duration-500 card-glow"
            >
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-[#C9A84C]" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-2xl font-medium text-[#F5ECD7] group-hover:text-[#C9A84C] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="mb-6 text-[#A89070] leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-medium text-[#C9A84C]">
                    {item.price}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight className="h-5 w-5 text-[#C9A84C]" />
                  </motion.div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/30" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#A89070]">
              Crafted With Care
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
