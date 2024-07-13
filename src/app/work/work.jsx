import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

function Work() {
  return (
    <section className="work mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0">
        {/**Text */}
        <div className="text-center mb-24">
          <h2 className="work__title h2 mb-4">Follow Our Projets</h2>
          <p className="work__subtitle max-w-3xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            illum iure ea, iste dolorem adipisci expedita eveniet a, vero vel,
            sapiente quas earum eaque ullam maiores repudiandae voluptas
            perspiciatis aut.
          </p>
        </div>
        {/**grid */}
        <div className="work__grid grid grid-cols-1 lg:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          {/**Item */}
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image
              src="/images/about.png"
              width={3600 / 5}
              height={2400 / 5}
              alt="work"
              className="rounded-tr-[150px]"
            />
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="h3">Project Work</h3>
                <p>w.Description1/Description2</p>
              </div>
              <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <div className="flex justify-center">
                  <RiArrowRightSLine className="text-3xl text-primary pl-1" />
                </div>
              </button>
            </div>
          </div>
          {/**Item */}
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image
              src="/images/about.png"
              width={3600 / 5}
              height={2400 / 5}
              alt="work"
              className="rounded-tr-[150px]"
            />
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="h3">Project Work</h3>
                <p>w.Description1/Description2</p>
              </div>
              <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <div className="flex justify-center">
                  <RiArrowRightSLine className="text-3xl text-primary pl-1" />
                </div>
              </button>
            </div>
          </div>
          {/**Item */}
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image
              src="/images/about.png"
              width={3600 / 5}
              height={2400 / 5}
              alt="work"
              className="rounded-tr-[150px]"
            />
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="h3">Project Work</h3>
                <p>w.Description1/Description2</p>
              </div>
              <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <div className="flex justify-center">
                  <RiArrowRightSLine className="text-3xl text-primary pl-1" />
                </div>
              </button>
            </div>
          </div>
          {/**Item */}
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image
              src="/images/about.png"
              width={3600 / 5}
              height={2400 / 5}
              alt="work"
              className="rounded-tr-[150px]"
            />
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="h3">Project Work</h3>
                <p>w.Description1/Description2</p>
              </div>
              <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <div className="flex justify-center">
                  <RiArrowRightSLine className="text-3xl text-primary pl-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
