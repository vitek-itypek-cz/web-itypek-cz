import { FC } from "react";

interface LightboxProps {
  isOpen: boolean;
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

const Lightbox: FC<LightboxProps> = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close lightbox when clicking outside the image
    if ((e.target as HTMLElement).classList.contains("lightbox")) {
      onClose();
    }
  };

  return (
    <div 
      className={`lightbox ${isOpen ? "active" : ""}`} 
      onClick={handleClick}
    >
      <span 
        className="close cursor-pointer absolute top-4 right-6 text-white text-4xl" 
        onClick={onClose}
      >
        &times;
      </span>
      <div className="lightbox-content">
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};

export default Lightbox;
