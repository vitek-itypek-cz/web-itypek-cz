import { FC } from "react";
// @ts-ignore
import logoImage from "../../assets/Logo.svg";

interface MobileHeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileHeader: FC<MobileHeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="lg:hidden flex justify-between items-center py-4 px-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img
          src={logoImage}
          alt="Vertigoservis Logo"
          className="h-12"
        />
      </div>
      <button
        id="mobileMenuToggle"
        className="text-secondary focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
      >
        <i className={`fas fa-${isMenuOpen ? "times" : "bars"} text-2xl`}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24">
              <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
              <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          )}
        </i>
      </button>
    </header>
  );
};

export default MobileHeader;
