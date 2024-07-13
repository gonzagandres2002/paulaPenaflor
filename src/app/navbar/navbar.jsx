import "@/app/globals.css";
import Image from "next/image";
import { useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";

function Navbar() {
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
            className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300"
            id="nav_menu"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
