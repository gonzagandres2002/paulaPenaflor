import { RiArrowRightLine } from "react-icons/ri";

function hero() {
  return (
    <>
      <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center bg-opacity-75 bg-cover bg-no-repeat xl:rounded-bl-[290px] relative z-20">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
          <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
            <h1 className="h1 mb-8">This is the hero title</h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              voluptatum debitis a doloribus.
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">
              Button with link
              <RiArrowRightLine className="text-accent" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default hero;
