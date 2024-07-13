import { RiArrowRightLine, RiCompasses2Line } from "react-icons/ri";

function Steps() {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20 flex justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiCompasses2Line className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Project Planning</h3>
            <p className="mb-5 max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus natus culpa, harum enim maxime.
            </p>
            <a href="#" className="font-medium justify-center flex">
              Read more
              <RiArrowRightLine />
            </a>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiCompasses2Line className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Project Planning</h3>
            <p className="mb-5 max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus natus culpa, harum enim maxime.
            </p>
            <a href="#" className="font-medium justify-center flex">
              Read more
              <RiArrowRightLine />
            </a>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiCompasses2Line className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Project Planning</h3>
            <p className="mb-5 max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus natus culpa, harum enim maxime.
            </p>
            <a href="#" className="font-medium justify-center flex">
              Read more
              <RiArrowRightLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
