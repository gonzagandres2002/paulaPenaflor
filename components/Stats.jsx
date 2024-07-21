import { useTranslations } from 'next-intl';

function Stats() {

  const t = useTranslations();

  return (
    <section
      className="stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]"
      id="stats"
    >
      <div className="container mx-auto">
        {/**grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          {/**grid item */}
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 text-accent">15+</h3>
            <p>{t("yearsExperience")}</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 text-accent">500+</h3>
            <p>{t("loansClosed")}</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 text-accent">24 hrs</h3>
            <p>{t("avgLoanApprovalTime")}</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center">
            <h3 className="h1 text-accent">95%</h3>
            <p>{t("successfulApplications")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
