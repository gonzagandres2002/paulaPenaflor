import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from 'next-intl';

function Testimonial() {

  const t = useTranslations();

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
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] xl:px-24">
        {/**slider */}
        <div className="flex flex-col items-center pt-[40px]">
          <h2 className="testimonial__title h2 mb-9 text-center w-screen">
            {t("clientReviews")}
          </h2>
          <div className="w-full">
            <div className="testimonial__slider swiper xl:h-[400px] h-auto mb-10">
              <div className="swiper-wrapper">
                {/**slide 1 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] xl:h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
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
                      {t("client1")}
                    </p>
                  </div>
                </div>
                {/**slide 2 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] xl:h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
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
                    {t("client2")}
                    </p>
                  </div>
                </div>
                {/**slide 3 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] xl:h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
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
                    {t("client3")}
                    </p>
                  </div>
                </div>
                {/**slide 4 */}
                <div className="swiper-slide">
                  {/**item */}
                  <div className="testimonial__item w-full max-w-[400px] xl:h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
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
                    {t("client4")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/** swiper buttons */}
              <div className="swiper-button-prev xl:pl-5"></div>
              <div className="swiper-button-next xl:pr-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
