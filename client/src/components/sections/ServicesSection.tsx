import { FC } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { serviceData } from "@/lib/serviceData";

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-center">
          Naše služby
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Aktuálně pečujeme o Chrám sv. Víta, ale naše práce sahá mnohem dál – od úklidu historických objektů až po montáže, opravy a zabezpečení střech, fasád, konstrukcí a mnoho dalších výškově těžko přístupných míst.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
