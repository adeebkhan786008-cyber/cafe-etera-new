import Navbar from "@/components/cafe-etera/Navbar";
import HeroSection from "@/components/cafe-etera/HeroSection";
import AboutStrip from "@/components/cafe-etera/AboutStrip";
import SignatureItems from "@/components/cafe-etera/SignatureItems";
import PhotoGallery from "@/components/cafe-etera/PhotoGallery";
import ReviewsSection from "@/components/cafe-etera/ReviewsSection";
import VisitSection from "@/components/cafe-etera/VisitSection";
import Footer from "@/components/cafe-etera/Footer";

export default function CafeEteraPage() {
  return (
    <main className="min-h-screen bg-[#0D0A07] text-[#F5ECD7] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutStrip />
      <SignatureItems />
      <PhotoGallery />
      <ReviewsSection />
      <VisitSection />
      <Footer />
    </main>
  );
}
