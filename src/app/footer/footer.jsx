import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px] px-44">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-auto text-center xl:text-left">
            {/**Logo */}
            <a className="flex justify-center xl:justify-start mb-8" href="#">
              <Image src="/images/logo.png" width={60} height={60} alt="" />
            </a>
            <p className="mb-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/**Socials */}
            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a href="">
                  <RiFacebookFill />
                </a>
              </li>
              <li>
                <a href="">
                  <RiInstagramFill />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div className="footer__item">
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Our Work</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Kitchen</a>
                </li>
                <li>
                  <a href="">Living Area</a>
                </li>
                <li>
                  <a href="">Bathroom</a>
                </li>
                <li>
                  <a href="">Bedroom</a>
                </li>
              </ul>
            </div>
            <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3 mb-3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>Contact Pau Penaflor</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Copyright */}
      <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
        Copyright &copy; Interno 2024. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
