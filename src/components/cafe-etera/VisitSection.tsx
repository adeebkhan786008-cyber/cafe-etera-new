"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink, Navigation } from "lucide-react";

export default function VisitSection() {
  // Farooknagar, Hyderabad coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.50823631188!2d78.423722!3d17.428799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96fe65e7954f%3A0xbeedaf1b073dc270!2sFarooknagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Farooknagar,Hyderabad,Telangana";

  return (
    <section id="visit" className="relative bg-[#0D0A07] py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />

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
            Location
          </span>
          <h2 className="font-serif text-4xl font-medium text-[#F5ECD7] sm:text-5xl">
            Come Find Your <span className="text-[#C9A84C]">New Favourite Spot</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Address & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                  <MapPin className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#F5ECD7] mb-1">
                    CAFE ETERA
                  </h3>
                  <p className="text-[#A89070]">Farooknagar, Hyderabad</p>
                  <p className="text-sm text-[#A89070]/70 mt-1">Telangana, India</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                  <Clock className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#F5ECD7] mb-1">Open Daily</h4>
                  <p className="text-[#A89070]">Mon - Sun</p>
                  <p className="text-sm text-[#A89070]/70 mt-1">Morning till Evening</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                  <Phone className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#A89070]">Contact us for orders</p>
                  <p className="text-[#F5ECD7] font-medium mt-1">+91 XXXXX XXXXX</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0D0A07] font-medium tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#C9A84C]/20 bg-[#2A1F14]">
              {/* Map Placeholder / Iframe */}
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Cafe Etera Location"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0D0A07]/30 to-transparent" />
              
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C9A84C]/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C9A84C]/30 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C9A84C]/30 rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C9A84C]/30 rounded-br-2xl pointer-events-none" />

              {/* Location pin marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#C9A84C] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-[#C9A84C]/50 rounded-full animate-ping" />
                  {/* Pin shadow */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-1 bg-black/50 rounded-full blur-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
