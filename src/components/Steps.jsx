import { RiArrowRightFill, RiBankFill, RiHome4Fill, RiFileList3Fill, RiKey2Fill } from "react-icons/ri";

function Steps() {
  return (
    <section
      className="steps mt-[80px] xl:mt-[200px] relative z-20 flex justify-center"
      id="steps"
    >
      <div className="container mx-auto">
      <h2 className="h2 flex justify-center mb-12">Your Path to Homeownership</h2>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-4">
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiBankFill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Get Pre-Approved</h3>
            <p className="mb-5 max-w-md mx-auto">
              Collect financial documents and apply for pre-approval to know
              your budget.
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiHome4Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Find and Secure Your Home</h3>
            <p className="mb-5 max-w-md mx-auto">
              Choose a real estate agent, list your needs, search for homes, and
              make an offer.
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiFileList3Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">
              Make an Offer and Navigate the Escrow Process
            </h3>
            <p className="mb-5 max-w-md mx-auto">
              Make an offer, handle inspections, and work through escrow with
              your agent's support.
            </p>
          </div>
          <div className="steps__step text-center">
            <div className="mb-4 justify-center flex">
              <RiKey2Fill className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-5">Complete the Purchase Process</h3>
            <p className="mb-5 max-w-md mx-auto">
              Finalize your loan, transfer utilities, and prepare for closing
              day to get your keys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
