import { RiArrowRightLine } from "react-icons/ri";

function Hero() {
  return (
    <>
      <section
        className="hero h-[640px] xl:h-[840px] bg-hero bg-center bg-cover bg-no-repeat xl:rounded-bl-[290px] relative z-20"
        id="home"
      >
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
          <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
            <h1 className="h1 mb-8 text-gray-950">Your Trusted Loan Officer</h1>
            <p className="mb-8 text-gray-950">
              Helping You Navigate the Path <br />
              to Your Financial Goals with <br />
              Expertise and Care
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">
              Learn more
              <RiArrowRightLine className="text-accent" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
