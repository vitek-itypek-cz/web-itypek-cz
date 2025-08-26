import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MobileHeader from "@/components/layout/MobileHeader";
import MobileMenu from "@/components/layout/MobileMenu";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Lightbox from "@/components/ui/Lightbox";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Helmet>
        <title>Vertigoservis - Výškové a stavební práce</title>
        <meta
          name="description"
          content="Vertigoservis - specialista na výškové a stavební práce, opravy střech, čištění fasád a péče o historické objekty."
        />
      </Helmet>

      <MobileHeader isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <Sidebar />

      <main className="lg:ml-64 min-h-screen">
        <HeroSection />
        <ServicesSection />
        <GallerySection onImageClick={openLightbox} />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <Lightbox
        isOpen={lightboxImage !== null}
        image={lightboxImage}
        onClose={closeLightbox}
      />
    </>
  );
}