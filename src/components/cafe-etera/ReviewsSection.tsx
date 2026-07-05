"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The chai is very unique and flavourful. Now it's my daily go-to place.",
    author: "Yashwanth R.",
    rating: 5,
  },
  {
    id: 2,
    text: "Chai and bun maska is absolutely amazing.",
    author: "Md Khaleel",
    rating: 5,
  },
  {
    id: 3,
    text: "Fantastic service and lovely atmosphere — all while keeping prices incredibly affordable. A true gem.",
    author: "Mannan K.",
    rating: 5,
  },
  {
    id: 4,
    text: "Buns baked fresh in-house — it definitely showed. The chai and mini burger were genuinely impressive.",
    author: "Vishal S.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="reviews" 
      className="relative bg-[#0D0A07] py-24 sm:py-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#A89070]">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#F5ECD7] sm:text-5xl">
            Straight From Our <span className="text-[#C9A84C]">Guests</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A1F14] border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/20 transition-all duration-300"
            >
              {/* Gold quote mark */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[#C9A84C]/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="mb-6 text-lg leading-relaxed text-[#F5ECD7]/90">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center">
                  <span className="font-serif text-sm font-medium text-[#C9A84C]">
                    {review.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#F5ECD7]">{review.author}</p>
                  <p className="text-xs text-[#A89070]">Verified Guest</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl bg-[#2A1F14] border border-[#C9A84C]/10 p-8"
              >
                {/* Gold quote mark */}
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#C9A84C]/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="mb-6 text-lg leading-relaxed text-[#F5ECD7]/90">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center">
                    <span className="font-serif text-sm font-medium text-[#C9A84C]">
                      {reviews[currentIndex].author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5ECD7]">{reviews[currentIndex].author}</p>
                    <p className="text-xs text-[#A89070]">Verified Guest</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-[#C9A84C]/20 text-[#A89070] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-6 bg-[#C9A84C]" 
                      : "w-1.5 bg-[#C9A84C]/30 hover:bg-[#C9A84C]/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-[#C9A84C]/20 text-[#A89070] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#2A1F14] border border-[#C9A84C]/10">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <span className="text-sm text-[#A89070]">
              Based on real Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
