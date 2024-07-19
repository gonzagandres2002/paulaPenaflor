import { RiArrowRightLine } from "react-icons/ri";

export default function Form() {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20 flex justify-center bg-accent-secondary py-10" id="form">
      <div className="flex justify-evenly items-center bg-white rounded-[70px] pb-20 pt-10 w-1/3 mx-auto">
        <form action="" className="flex flex-col items-start gap-10">
          <div className="contact-left-title">
            <h2 className="h2">Let Us Contact You</h2>
            <hr className="bg-accent w-60 h-1 rounded-xl" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-inputs"
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Phone Number (optional)"
            className="contact-inputs"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            className="contact-inputs"
          ></textarea>
          <button
            type="submit"
            className=""
          >
            <span className="flex items-center justify-center cursor-pointer font-medium w-36 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white hover:text-accent transition-all duration-300">
            Submit
            <RiArrowRightLine className="ml-2" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
