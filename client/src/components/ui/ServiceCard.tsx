import { FC } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
