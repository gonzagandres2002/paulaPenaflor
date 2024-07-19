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
            <a href="https://wa.me/13312508701?text=Hi%20Paula%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20loan%20services">
              <button className="btn btn-primary mx-auto xl:mx-0">
                Contact Us
                <RiArrowRightLine className="text-accent" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
