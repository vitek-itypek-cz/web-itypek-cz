import { FC } from "react";
import Lightshow from "@/components/ui/Lightshow";
import { galleryData } from "@/lib/galleryData";

interface GallerySectionProps {
  onImageClick: (src: string, alt: string) => void;
}

const GallerySection: FC<GallerySectionProps> = ({ onImageClick }) => {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-center">
          Ukázky naší práce
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Prohlédněte si výběr z našich realizovaných projektů, které ukazují kvalitu naší práce a rozmanitost služeb, které poskytujeme.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Lightshow images={galleryData} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
