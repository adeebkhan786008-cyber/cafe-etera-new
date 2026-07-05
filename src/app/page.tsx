"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Star,
  MapPin,
  Coffee,
  ChefHat,
  DollarSign,
  Clock,
  Navigation,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Hero Section Component
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Cinematic Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#2C1810] to-[#4A2C1F]"
      >
        {/* Abstract Shapes for Cinematic Feel */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-amber-900/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-orange-900/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-800/20 to-transparent rounded-full blur-3xl" />
        </div>
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C8B7A%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Logo Mark */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center justify-center rounded-full border border-amber-600/30 bg-amber-900/20 px-6 py-2 backdrop-blur-sm"
          >
            <Coffee className="mr-2 h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium tracking-widest text-amber-100/80 uppercase">
              Cafe Etera
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 font-serif text-5xl leading-tight font-medium text-amber-50 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Some Chai
            <br />
            <span className="text-amber-400">Changes Everything.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-amber-100/70 sm:text-xl"
          >
            Farooknagar&apos;s newest obsession — perfectly spiced, beautifully
            brewed, criminally affordable.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="group h-14 rounded-full bg-amber-500 px-10 text-base font-semibold text-[#2C1810] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Find Us & Visit Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-amber-200/50 uppercase">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-amber-400/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Social Proof Bar Component
function SocialProofBar() {
  const items = [
    { icon: Star, text: "Real Google Reviews" },
    { icon: MapPin, text: "Farooknagar, Hyderabad" },
    { icon: Coffee, text: "Fresh-Baked In-House Daily" },
  ];

  return (
    <section className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#FDF8F3]/95 px-6 py-4 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 sm:gap-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#2C1810]"
          >
            <item.icon className="h-4 w-4 flex-shrink-0 text-amber-600" />
            <span className="text-sm font-medium">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Signature Menu Section
function SignatureMenu() {
  const items = [
    {
      name: "The Chai",
      description:
        "Beautifully spiced, aromatic, perfectly balanced — not too sweet, just the right kick of ginger and cardamom.",
      price: "Starting ₹30",
      highlight: "House Special",
    },
    {
      name: "Bun Maska",
      description:
        "Warm, fluffy, loaded with generous butter. Pure comfort. Buns baked fresh in-house daily.",
      price: "",
      highlight: "Fan Favorite",
    },
    {
      name: "The Burger",
      description:
        "Fresh, juicy, packed with taste — a quick and satisfying bite unlike anything nearby.",
      price: "",
      highlight: "Limited Edition",
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-[#FDF8F3]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-amber-600 uppercase">
            Our Specialties
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#2C1810] sm:text-5xl">
            What People Can&apos;t
            <br />
            Stop Talking About
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Highlight Badge */}
              <div className="absolute right-4 top-4 rounded-full bg-amber-50 px-3 py-1">
                <span className="text-xs font-medium text-amber-700">
                  {item.highlight}
                </span>
              </div>

              {/* Decorative Background */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <h3 className="mb-4 font-serif text-2xl font-medium text-[#2C1810]">
                {item.name}
              </h3>
              <p className="mb-6 text-[#6B5B4F] leading-relaxed">
                {item.description}
              </p>
              {item.price && (
                <div className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-amber-200" />
                  <span className="text-lg font-semibold text-amber-700">
                    {item.price}
                  </span>
                  <span className="h-px flex-1 bg-amber-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Story / About Section
function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#2C1810] px-6 py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#C9A75A_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="mb-6 inline-block text-sm font-medium tracking-widest text-amber-400 uppercase">
            Our Story
          </span>
          <h2 className="mb-8 font-serif text-4xl font-medium text-amber-50 sm:text-5xl lg:text-6xl">
            Why Etera?
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-amber-100/80 sm:text-xl">
            Cafe Etera was born from a simple belief — that exceptional chai and
            beautiful food shouldn&apos;t cost a fortune. Tucked in the heart of
            Farooknagar, we bake our buns fresh every morning, brew every cup with
            intention, and serve every guest like family. We&apos;re new. We&apos;re
            hungry. And we&apos;re here to stay.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      text: "The chai is very unique and flavourful. Now it's my daily go-to place.",
      author: "Yashwanth R.",
      role: "Regular Customer",
    },
    {
      text: "Chai and bun maska is absolutely amazing.",
      author: "Md Khaleel",
      role: "Food Lover",
    },
    {
      text: "Fantastic service and a lovely atmosphere, all while keeping prices incredibly affordable. A true gem.",
      author: "Mannan K.",
      role: "Verified Visitor",
    },
    {
      text: "Their buns are baked fresh in-house — it definitely showed. Both the chai and mini burger were genuinely impressive.",
      author: "Vishal S.",
      role: "First-time Guest",
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-[#F5EDE4]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-amber-600 uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#2C1810] sm:text-5xl">
            Straight From Our Guests
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-amber-300" />
              <p className="mb-6 text-lg leading-relaxed text-[#2C1810]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-serif text-amber-700 font-medium">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-medium text-[#2C1810]">{review.author}</p>
                  <p className="text-sm text-amber-600">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// USP Section
function USPSection() {
  const points = [
    {
      icon: ChefHat,
      title: "Fresh-Baked Daily",
      description: "Buns made in-house every morning, never store-bought",
    },
    {
      icon: Coffee,
      title: "Signature Chai",
      description: "A recipe guests call their new daily ritual",
    },
    {
      icon: DollarSign,
      title: "Honest Prices",
      description: "Exceptional quality from ₹30. No compromise, ever.",
    },
    {
      icon: MapPin,
      title: "Old City Heart",
      description:
        "A gem in Farooknagar that feels like it belongs in Banjara Hills",
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-[#FDF8F3]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-amber-600 uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#2C1810] sm:text-5xl">
            The Etera Difference
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:scale-110">
                <point.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-[#2C1810]">
                {point.title}
              </h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  return (
    <section className="relative bg-[#2C1810] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-amber-400 uppercase">
              Visit Us
            </span>
            <h2 className="mb-6 font-serif text-4xl font-medium text-amber-50 sm:text-5xl">
              Come Find Your
              <br />
              <span className="text-amber-400">New Favourite Spot.</span>
            </h2>
            <div className="mb-8 flex items-center gap-4 text-amber-100/80">
              <Clock className="h-5 w-5 text-amber-400" />
              <span className="text-lg">Open daily</span>
            </div>
            <div className="mb-8 flex items-start gap-4 text-amber-100/80">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
              <span className="text-lg">
                Farooknagar, Hyderabad
                <br />
                <span className="text-amber-100/50">
                  Near the main market circle
                </span>
              </span>
            </div>
            <Button
              size="lg"
              className="group rounded-full bg-amber-500 px-8 text-base font-semibold text-[#2C1810] transition-all hover:bg-amber-400"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-[#3D2319] sm:aspect-[4/3]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20 mx-auto">
                  <MapPin className="h-10 w-10 text-amber-400" />
                </div>
                <p className="font-serif text-xl text-amber-100">
                  Farooknagar, Hyderabad
                </p>
                <p className="mt-2 text-amber-100/50">Cafe Etera</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                  <Navigation className="h-4 w-4" />
                  Map integration ready
                </div>
              </div>
            </div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(rgba(201,167,90,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(201,167,90,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-amber-900/10 bg-[#FDF8F3] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-amber-600" />
            <span className="font-serif text-xl font-medium text-[#2C1810]">
              Cafe Etera
            </span>
          </div>

          {/* Tagline */}
          <p className="text-center text-sm text-[#6B5B4F]">
            Cafe Etera — Brewed With Intent.
          </p>

          {/* Instagram Link */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#2C1810] px-6 py-2 text-sm font-medium text-amber-50 transition-all hover:bg-[#4A2C1F]"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            Follow Us
          </a>
        </div>

        <div className="mt-8 border-t border-amber-900/10 pt-8 text-center">
          <p className="text-sm text-[#6B5B4F]/60">
            © {new Date().getFullYear()} Cafe Etera. Farooknagar, Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function CafeEteraPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      <HeroSection />
      <SocialProofBar />
      <SignatureMenu />
      <StorySection />
      <ReviewsSection />
      <USPSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
