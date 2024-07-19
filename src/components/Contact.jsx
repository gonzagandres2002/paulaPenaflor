import { RiArrowRightLine } from "react-icons/ri";

function Contact() {
  return (
    <section
      className="contact mt-[80px] xl:mt-[150px] relative z-20 flex justify-center"
      id="contact"
    >
      <div className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[50px]">
        <div className="contact__text">
          <h2 className="h2 text-white mb-4">
            Ready to Secure Your Dream Home?
          </h2>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            Whether you have questions or are ready to get started, Paula
            Peñaflor is here to help you every step of the way. Reach out today
            to begin your journey towards homeownership!
          </p>
          <a href="http://localhost:3000/bio">
            <button className="btn btn-accent mx-auto">
              Connect with us
              <RiArrowRightLine className="text-primary"/>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
