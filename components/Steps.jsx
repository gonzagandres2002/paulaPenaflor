import { RiBankFill, RiHome4Fill, RiFileList3Fill, RiKey2Fill } from "react-icons/ri";
import { useTranslations } from 'next-intl';

function Steps() {

  const t = useTranslations();

  return (
    <section
      className="steps mt-[80px] xl:mt-[200px] relative z-20 flex justify-center"
      id="steps"
    >
      <div className="container mx-auto">
      <h2 className="h2 flex justify-center text-center mb-12">{t("pathHome")}</h2>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-4">
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiBankFill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">{t("preApproved")}</h3>
            <p className="mb-5 max-w-md mx-auto">
              {t("collectDocuments")}
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiHome4Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">{t("findSecureHome")}</h3>
            <p className="mb-5 max-w-md mx-auto">
              {t("chooseAgent")}
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiFileList3Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">
              {t("makeOffer")}
            </h3>
            <p className="mb-5 max-w-md mx-auto">
              {t("offerEscrow")}
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiKey2Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">{t("completePurchase")}</h3>
            <p className="mb-5 max-w-md mx-auto">
              {t("finalizeLoan")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
