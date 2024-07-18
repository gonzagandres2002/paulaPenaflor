import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px] xl:px-44">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-auto text-center xl:text-left">
            {/**Logo */}
            <a className="flex justify-center xl:justify-start mb-8" href="#">
              <Image src="/images/logo.png" width={80} height={80} alt="" />
            </a>
            <p className="mb-8 text-xl">
              Guiding You Home, One Step at a Time.
            </p>
            {/**Socials */}
            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start mb-10">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100094635926073">
                  <RiFacebookFill size="40"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/paulaapenaflor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <RiInstagramFill size="40"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div className="footer__item">
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#steps">Our Success</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h3 className="h3 mb-3">Resources</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Why Paula Peñaflor</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Legal/State Licensing</a>
                </li>
              </ul>
            </div>
            <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3 mb-3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>Contact Pau Penaflor</p>
                <p>+1 (331) 250-8701</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Copyright */}
      <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
        Copyright &copy; Paula Peñaflor 2024. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
