function Stats() {
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
            <h3 className="h1 text-accent">15+ </h3>
            <p>Years of experience</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 text-accent">500+</h3>
            <p>Loans Closed</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center xl:border-r xl:border-accent">
            <h3 className="h1 text-accent">24</h3>
            <p>Average Loan Approval Time (Hours)</p>
          </div>
          {/**grid item */}
          <div className="stats__item text-center">
            <h3 className="h1 text-accent">95%</h3>
            <p>Successful Loan Applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
