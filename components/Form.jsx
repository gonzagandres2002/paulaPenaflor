import { RiArrowRightLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

export default function Form() {

  const t = useTranslations();

  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20 flex justify-center bg-accent-secondary py-10" id="form">
      <div className="flex justify-evenly items-center bg-white rounded-[70px] pb-20 pt-10 xl:w-1/3 px-10 mx-auto">
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-start gap-10">
          <div className="contact-left-title">
            <h2 className="h2">{t("letUsContact")}</h2>
            <hr className="bg-accent w-60 h-1 rounded-xl" />
          </div>
          <input type="hidden" name="access_key" value="f794238f-0aa2-4a72-b838-6e14710ac284"/>
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            className="contact-inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-inputs"
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder={t("phone")}
            className="contact-inputs"
          />
          <textarea
            name="message"
            placeholder={t("messageOptional")}
            className="contact-inputs"
          ></textarea>
          <button
            type="submit"
            className=""
          >
            <span className="flex items-center justify-center cursor-pointer font-medium w-36 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white hover:text-accent transition-all duration-300">
            {t("submit")}
            <RiArrowRightLine className="ml-2" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
