import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-center">
            O nás
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 leading-relaxed">
              Ve Vertigoservisu kombinujeme mnohaleté zkušenosti s moderními technologiemi a důrazem na preciznost každého detailu. Bezpečnost a spokojenost klienta jsou pro nás na prvním místě.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              Naše firma se specializuje na výškové a stavební práce, zejména v těžko přístupných lokalitách a na historických objektech. Díky kombinaci tradičních řemesel a moderních postupů dokážeme efektivně řešit i ty nejnáročnější projekty.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              Tým Vertigoservisu tvoří zkušení profesionálové s potřebnými certifikacemi a oprávněními pro práci ve výškách. Naši zaměstnanci procházejí pravidelnými školeními, aby byli vždy v obraze ohledně nejnovějších technologií a bezpečnostních postupů.
            </p>
            
            <p className="text-lg leading-relaxed">
              Kromě běžných výškových a stavebních prací se zaměřujeme také na údržbu a rekonstrukce památkově chráněných objektů, kde je vyžadován citlivý přístup a důkladná znalost historických stavebních technik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
