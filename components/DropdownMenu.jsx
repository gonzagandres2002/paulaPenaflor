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
    <div>
      <button onClick={toggleMenu} className="bg-secondary hover:bg-primary-hover h-[40px] px-[15px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2 hover:text-accent">
       <TbWorld />{t("lang")}
      </button>
      {isOpen && (
        <ul className="bg-white w-fit h-fit fixed">
          <li>
            <a href="/es">
              Español
            </a>
          </li>
          <li>
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
