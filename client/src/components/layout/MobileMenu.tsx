import { FC, useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("hero");
  
  const menuLinks = [
    { href: "#hero", text: "Úvod", id: "hero" },
    { href: "#services", text: "Služby", id: "services" },
    { href: "#gallery", text: "Reference", id: "gallery" },
    { href: "#about", text: "O nás", id: "about" },
    { href: "#contact", text: "Kontakt", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      id="mobileMenu"
      className={`lg:hidden fixed inset-0 bg-white z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out pt-20`}
    >
      <nav className="flex flex-col px-6 py-4">
        {menuLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`py-3 text-lg font-medium transition-colors ${
              index < menuLinks.length - 1 ? "border-b border-gray-200" : ""
            } ${
              activeSection === link.id 
                ? "text-primary bg-primary/10 -mx-6 px-6" 
                : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {link.text}
          </a>
        ))}

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Kontaktujte nás</p>
          <p className="text-sm mb-1">
            <i className="mr-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" className="inline text-[#009DC5]">
                <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
            </i>
            <a href="tel:+420776828253" className="hover:text-primary transition-colors">+420 776 828 253</a>
          </p>
          <p className="text-sm mb-1">
            <i className="mr-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" className="inline text-[#009DC5]">
                <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
            </i>
            <a href="tel:+420739203382" className="hover:text-primary transition-colors">+420 739 203 382</a>
          </p>
          <p className="text-sm mb-1">
            <i className="mr-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" className="inline text-[#009DC5]">
                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
            </i>
            <a href="mailto:info@vertigoservis.cz" className="hover:text-primary transition-colors">info@vertigoservis.cz</a>
          </p>
          <p className="text-sm">
            <i className="mr-2 text-primary">
              <FaFacebookF className="inline text-[#009DC5] w-3.5 h-3.5" />
            </i>
            <a 
              href="https://www.facebook.com/Vyskove.a.Stavebni.Prace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
