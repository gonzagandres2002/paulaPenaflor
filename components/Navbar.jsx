import "/app/globals.css";
import Image from "next/image";
import { useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useTranslations } from 'next-intl';

function Navbar() {

  const t = useTranslations();

  useEffect(() => {
    const navTriggerBtn = document.getElementById("nav_trigger_btn");
    const navMenu = document.getElementById("nav_menu");

    const handleClick = () => {
      navMenu.classList.toggle("nav-is-open");
    };

    if (navTriggerBtn) {
      navTriggerBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (navTriggerBtn) {
        navTriggerBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        {/*Logo*/}
        <a>
          <Image src="/images/logo.png" width={60} height={60} alt="Logo" />
        </a>
        <nav>
          {/*trigger for mobile*/}
          <div className="cursor-pointer lg:hidden" id="nav_trigger_btn">
            <RiMenuFill className="text-4l text-primary" />
          </div>
          <ul
            className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 items-center"
            id="nav_menu"
          >
            <li>
              <a href="#home">{t("home")}</a>
            </li>
            <li>
              <a href="#steps">{t("steps")}</a>
            </li>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#testimonial">{t("testimonials")}</a>
            </li>
            <li>
              <a href="#stats">{t("ourSuccess")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
            <li>
              <a href="#form" className="bg-primary hover:bg-primary-hover h-[40px] px-[15px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2">{t("getStarted")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
