'use client'
import { useState } from "react";
import { useTranslations } from "next-intl";
import { TbWorld } from "react-icons/tb";

const DropdownMenu = () => {

    const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="bg-secondary hover:bg-primary-hover h-[40px] px-[15px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2 hover:text-accent"
      >
        <TbWorld />{t("lang")}
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-full">
          <li className="pl-1 py-2 hover:bg-gray-100 cursor-pointer">
            <a href="/es">
              Español
            </a>
          </li>
          <li className="pl-1 py-2 hover:bg-gray-100 cursor-pointer">
            <a href="/en">
              English
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
