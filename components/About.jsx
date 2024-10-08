import { RiArrowRightLine, RiPhoneFill } from "react-icons/ri";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: {
    default: "About Paula Penaflor",
    es: "Sobre Paula Peñaflor",
    template: "%s | Paula Penaflor",
  },
};

function About() {

  const t = useTranslations();

  return (
    <section className="about mt-[80px] xl:mt-[200px] relative z-20" id="about">
      <div className="container mx-auto xl:px-0">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between gap-8 items-center xl:gap-[74px]">
          {/*Text*/}
          <div className="about__text flex-1 order-2 xl:order-none mx-auto max-w-xl xl:max-w-lg flex flex-col items-center text-center xl:items-center gap-8">
            <h2 className="h2">{t("aboutPaula")}</h2>
            <p>
              {t("paulaExperience")}
            </p>
            {/**Phone */}
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <a href="tel:+13312508701">
                <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                  <RiPhoneFill className="text-accent text-4xl" />
                </div>
              </a>
              <div className="text-left">
                <a href="tel:+13312508701">
                  <div className="text-2xl font-bold">+1 (331) 250-8701</div>
                </a>
                <div>{t("callAnytime")}</div>
              </div>
            </div>
            {/**Button */}
            <a href="https://wa.me/13312508701?text=Hi%20Paula%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20loan%20services">
              <button className="btn btn-primary">
                Get free stimation
                <RiArrowRightLine className="text-accent" />
              </button>
            </a>
          </div>

          {/**Image */}
          <div className="about__img order-1 xl:order-none mx-auto xl-mx-0">
            <Image
              src="/images/paula-min.jpg"
              alt="Paula Peñaflor, Business Developer"
              width={6000 / 7}
              height={4000 / 7}
              className="rounded-bl-[290px] rounded-tr-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
