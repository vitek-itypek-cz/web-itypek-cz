import { FC, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface LightshowProps {
  images: Array<{ image: string; alt: string }>;
}

const Lightshow: FC<LightshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Změna každé 4 sekundy

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!images.length) return null;

  return (
    <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
      {/* Hlavní obrázek */}
      <div className="relative aspect-video">
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        
        {/* Ovládací prvky */}
        <div className="absolute inset-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/50 via-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
          
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Popisek */}
      <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-lg font-semibold mb-2">
          {images[currentIndex].alt}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
          
          {/* Tečky pro navigaci */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightshow;