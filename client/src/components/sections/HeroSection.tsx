import { FC } from "react";
// @ts-ignore
import backgroundImage from "../../assets/background.jpg";

const HeroSection: FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center pt-16 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Výškové práce v katedrále"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
            Výškové a stavební práce s respektem k detailu
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Specializujeme se na komplexní řešení pro těžko dostupná místa – od historických památek po moderní konstrukce.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-[#27BCE1] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
