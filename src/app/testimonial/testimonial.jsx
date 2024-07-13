import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        960: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
        {/**slider */}
        <div className="flex flex-col items-center pt-[88px] pb-[110px]">
          <h2 className="testimonial__title h2 mb-9 text-center">
            What clients say
          </h2>
          <div className="w-full">
            <div className="testimonial__slider swiper h-[400px]">
              <div className="swiper-wrapper">
                {/**slide 1 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/01.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">Nattasha Mith</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse adipisci totam expedita quis similique.
                    </p>
                  </div>
                </div>
                {/**slide 2 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/02.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">John Doe 1</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse adipisci totam expedita quis similique.
                    </p>
                  </div>
                </div>
                {/**slide 3 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/03.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">John Doe 2</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse adipisci totam expedita quis similique.
                    </p>
                  </div>
                </div>
                {/**slide 4 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                    <div className="flex gap-4 mb-6">
                      <Image
                        src="/testimonials/04.png"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div>
                        <h3 className="h3">John Doe 3</h3>
                        <div className="h3">Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse adipisci totam expedita quis similique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/**Swiper pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
