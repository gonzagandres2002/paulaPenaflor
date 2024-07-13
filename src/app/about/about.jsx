import { RiArrowRightLine, RiPhoneFill } from "react-icons/ri";
import Image from "next/image";

function About() {
  return (
    <section className="about mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto xl:px-0">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between gap-8 items-center xl:gap-[74px]">
          {/*Text*/}
          <div className="about__text flex-1 order-2 xl:order-none mx-auto max-w-xl xl:max-w-lg flex flex-col items-center text-center xl:items-center gap-8">
            <h2 className="h2">A text title for the about section</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              harum tempore cumque quis ipsam adipisci ducimus, blanditiis enim
              excepturi suscipit at quae minima eos nesciunt repellat, nulla
              facere? Hic, officia.
            </p>
            {/**Phone */}
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                <RiPhoneFill className="text-accent text-4xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">0978 654 321</div>
                <div>Call Us Anytime</div>
              </div>
            </div>
            {/**Button */}
            <button className="btn btn-primary">
              Get free stimation
              <RiArrowRightLine className="text-accent" />
            </button>
          </div>

          {/**Image */}
          <div className="about__img order-1 xl:order-none mx-auto xl-mx-0">
            <Image
              src="/images/about.png"
              alt=""
              width={3600 / 5}
              height={2400 / 5}
              className="rounded-bl-[290px] rounded-tr-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
