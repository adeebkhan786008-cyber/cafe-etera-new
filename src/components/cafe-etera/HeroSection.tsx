"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleExploreMenu = () => {
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFindUs = () => {
    const visitSection = document.querySelector("#visit");
    if (visitSection) {
      visitSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[#0D0A07]"
      >
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A07] via-transparent to-[#0D0A07]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A07]/80 via-transparent to-[#0D0A07]/80" />
        
        {/* Animated grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Atmospheric glow effects */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[100px]" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D0A07_80%)]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#A89070]">
              Farooknagar, Hyderabad
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-8 font-serif text-5xl leading-[1.1] font-medium text-[#F5ECD7] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Some Chai
            <br />
            <span className="text-[#C9A84C]">Changes Everything.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mb-12 max-w-xl mx-auto text-lg leading-relaxed text-[#A89070] sm:text-xl"
          >
            Farooknagar&apos;s finest — beautifully brewed, criminally affordable.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={handleExploreMenu}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0D0A07] font-medium tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            >
              Explore Menu
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Ghost CTA */}
            <motion.button
              onClick={handleFindUs}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-[#C9A84C]/30 text-[#F5ECD7] font-medium tracking-wide rounded-full transition-all duration-300 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5"
            >
              Find Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A89070]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 text-[#C9A84C]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0A07] to-transparent" />
    </section>
  );
}
