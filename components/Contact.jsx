import { RiArrowRightLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

function Contact() {

  const t = useTranslations();

  return (
    <section
      className="contact mt-[80px] xl:mt-[150px] relative z-20 flex justify-center"
      id="contact"
    >
      <div className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[50px]">
        <div className="contact__text">
          <h2 className="h2 text-white mb-4">
            {t("secureDreamHome")}
          </h2>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            {t("reachOut")}
          </p>
          <a href="http://localhost:3000/bio">
            <button className="btn btn-accent mx-auto">
              {t("connectWithUs")}
              <RiArrowRightLine className="text-primary"/>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
