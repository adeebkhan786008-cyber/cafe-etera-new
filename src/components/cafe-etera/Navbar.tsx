"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D0A07]/90 backdrop-blur-xl border-b border-[#C9A84C]/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="font-serif text-2xl font-medium text-[#C9A84C] tracking-wide"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              CAFE ETERA
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="gold-underline text-sm font-medium tracking-widest uppercase text-[#F5ECD7]/80 hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5ECD7] hover:text-[#C9A84C] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0D0A07] border-l border-[#C9A84C]/20 z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                {/* Logo in drawer */}
                <div className="mb-12">
                  <span className="font-serif text-xl font-medium text-[#C9A84C]">
                    CAFE ETERA
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-lg font-medium tracking-widest uppercase text-[#F5ECD7]/90 hover:text-[#C9A84C] transition-colors duration-300"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-auto mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-[#C9A84C] to-transparent" />
                  <p className="mt-4 text-xs tracking-widest text-[#A89070] uppercase">
                    Brewed With Intent
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
