import { FC } from "react";

interface GalleryItemProps {
  image: string;
  alt: string;
  onClick: (src: string, alt: string) => void;
}

const GalleryItem: FC<GalleryItemProps> = ({ image, alt, onClick }) => {
  const handleClick = () => {
    onClick(image, alt);
  };

  return (
    <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div 
        className="cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-sm font-medium">{alt}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
