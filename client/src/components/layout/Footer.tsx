import { FC } from "react";
import { FaFacebookF } from "react-icons/fa";
// @ts-ignore
import logoImage from "../../assets/Logo.svg";

const Footer: FC = () => {
  const menuLinks = [
    { href: "#hero", text: "Úvod" },
    { href: "#services", text: "Služby" },
    { href: "#gallery", text: "Reference" },
    { href: "#about", text: "O nás" },
    { href: "#contact", text: "Kontakt" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200 lg:ml-64">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="bg-white p-2 rounded w-32 mb-2">
              <img
                src={logoImage}
                alt="Vertigoservis Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-700">© {new Date().getFullYear()} Vertigoservis. Všechna práva vyhrazena.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/Vyskove.a.Stavebni.Prace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-primary transition-colors"
              >
                <FaFacebookF className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
