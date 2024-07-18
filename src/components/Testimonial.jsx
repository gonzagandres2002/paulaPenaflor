import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonial() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        960: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section
      className="testimonial mt-[80px] xl:mt-[200px] relative z-20"
      id="testimonial"
    >
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-24">
        {/**slider */}
        <div className="flex flex-col items-center pt-[40px]">
          <h2 className="testimonial__title h2 mb-9 text-center">
            What clients say
          </h2>
          <div className="w-full">
            <div className="testimonial__slider swiper h-[400px]">
              <div className="swiper-wrapper">
                {/**slide 1 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/01.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">John Martinez</h3>
                        <div>Houston, TX</div>
                      </div>
                    </div>
                    <p>
                      Paula made the pre-approval process seamless and was
                      always available to answer our questions. We secured a
                      great loan and moved into our dream home faster than
                      expected!
                    </p>
                  </div>
                </div>
                {/**slide 2 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/02.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">Emily Johnson</h3>
                        <div>Denver, CO</div>
                      </div>
                    </div>
                    <p>
                      Working with Paula was fantastic. Her attention to detail
                      and commitment to finding the best loan options for us was
                      evident from day one. Highly recommend her services!
                    </p>
                  </div>
                </div>
                {/**slide 3 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/03.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">Michael Lee</h3>
                        <div>San Francisco, CA</div>
                      </div>
                    </div>
                    <p>
                      Paula's expertise and dedication were instrumental in our
                      home buying process. She made complex concepts easy to
                      understand and guided us with patience and clarity
                    </p>
                  </div>
                </div>
                {/**slide 4 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/04.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">Sophia Gomez</h3>
                        <div className="h3">Miami, FL</div>
                      </div>
                    </div>
                    <p>
                      Paula Peñaflor is a true professional. Her knowledge and
                      personalized approach made all the difference for us. We
                      are so grateful for her help and highly recommend her!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/** swiper buttons */}
              <div className="swiper-button-prev pl-10"></div>
              <div className="swiper-button-next pr-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
