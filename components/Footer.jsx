import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiMailFill,
} from "react-icons/ri";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../navigation";

function Footer() {
  const t = useTranslations("");

  return (
    <footer className="footer mt-[80px] xl:mt-[50px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:px-44">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-auto text-center xl:text-left">
            {/**Logo */}
            <div className="flex justify-center xl:justify-start mb-8">
              <Image src="/images/logo.png" width={300} height={300} alt="Paula Peñaflor's Business Developer logo" />
            </div>

            <p className="mb-8 text-xl">{t("guidingHome")}</p>
            {/**Socials */}
            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start mb-10">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100094635926073"
                  target="_blank"
                >
                  <RiFacebookFill size="40" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/paulaapenaflor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <RiInstagramFill size="40" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/13312508701?text=Hi%20Paula%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20loan%20services"
                  target="_blank"
                >
                  <RiWhatsappFill size="40" />
                </a>
              </li>
              <li>
                <a href="mailto:ppenaflor@mfmbankers.com">
                  <RiMailFill size="40" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div className="footer__item">
              <h3 className="h3 mb-3">{t("pages")}</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#about">{t("about")}</a>
                </li>
                <li>
                  <a href="#testimonials">{t("testimonials")}</a>
                </li>
                <li>
                  <a href="#steps">{t("steps")}</a>
                </li>
                <li>
                  <a href="#contact">{t("contact")}</a>
                </li>
              </ul>
            </div>

            {/*Missing Resources column with: Why Paula Peñaflor, Blog, FAQs, Legal/State Licensing*/}
            <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3 mb-3">{t("contact")}</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=259+S+Central+Ave,+Hartsdale,+NY+10530,+USA"
                  target="_blank"
                >
                  259 S Central Ave, Hartsdale, NY 10530, USA
                </a>
                <a href="mailto:ppenaflor@mfmbankers.com">
                  ppenaflor@mfmbankers.com
                </a>
                <a href="tel:+13312508701"> +1 (331) 250-8701</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Copyright */}
      <p className="footer__copyright text-center text-lg pt-10 bg-white xl:border-t">
        Copyright &copy; Paula Peñaflor 2024. All rights reserved.
      </p>
      <div className="footer__copyright flex justify-center divide-x pb-5">
        <Link href="/privacy-policy" className="px-3 text-lg">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="px-3 text-lg">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
