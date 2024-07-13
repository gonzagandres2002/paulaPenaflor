import { RiArrowRightLine } from "react-icons/ri";

function Contact() {
  return (
    <section className="contact mt-[80px] xl:mt-[150px] relative z-20 flex justify-center">
      <div className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
        <div className="contact__text">
          <h2 className="h2 text-white mb-4">Do you want to get a loan</h2>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="btn btn-accent mx-auto">
            Connect with us
            <RiArrowRightLine className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
