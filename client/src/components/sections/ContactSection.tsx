import { FC } from "react";
import ContactForm from "@/components/ui/ContactForm";

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-center">
          Kontaktujte nás
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Máte zájem o naše služby nebo potřebujete více informací? Neváhejte nás kontaktovat. Rádi vám odpovíme na všechny dotazy a připravíme nezávaznou nabídku.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-accent p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 font-heading">Kontaktní údaje</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2 font-heading">Vedení společnosti</h4>
                <p className="flex items-center mb-3">
                  <i className="mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" className="inline text-[#009DC5]">
                      <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                    </svg>
                  </i>
                  <span>Lubomír Bláha</span>
                </p>
                <p className="flex items-center mb-5">
                  <i className="mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" className="inline text-[#009DC5]">
                      <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </i>
                  <a href="tel:+420776828253" className="hover:text-primary transition-colors">+420 776 828 253</a>
                </p>
                
                <p className="flex items-center mb-3">
                  <i className="mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" className="inline text-[#009DC5]">
                      <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                    </svg>
                  </i>
                  <span>Milan Čermák</span>
                </p>
                <p className="flex items-center mb-5">
                  <i className="mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" className="inline text-[#009DC5]">
                      <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </i>
                  <a href="tel:+420739203382" className="hover:text-primary transition-colors">+420 739 203 382</a>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 font-heading">Obecný kontakt</h4>
                <p className="flex items-center mb-3">
                  <i className="mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" className="inline text-[#009DC5]">
                      <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </i>
                  <a href="mailto:info@vertigoservis.cz" className="hover:text-primary transition-colors">info@vertigoservis.cz</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
