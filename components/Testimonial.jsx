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
      slidesPerView: 1,
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
                  <div className="testimonial__item w-full md:h-[440px] bg-white rounded-[30px] flex flex-col justify-center px-9 mx-auto items-center">
                    <div className="flex gap-4 mb-6 justify-center items-center">
                      <Image
                        src="/testimonials/01.jpg"
                        width="200"
                        height="200"
                        alt="Portrait of Mirella Galván, a satisfied client of Paula Peñaflor"
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="h3">Mirella Galván</h3>
                        <a href="https://g.co/kgs/Ehpjj1D" target="_blanck"><div>Read Full Review</div></a>
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
                  <div className="testimonial__item w-full md:h-[440px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto items-center">
                    <div className="flex gap-4 mb-6 justify-center items-center">
                      <Image
                        src="/testimonials/02.jpg"
                        width="200"
                        height="200"
                        alt="Portrait of Yoryina Caicedo, a happy homeowner thanks to Paula Peñaflor"
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="h3">Yoryina Caicedo</h3>
                        <a href="https://maps.app.goo.gl/n5wH56xNeJdiztuP9" target="_blanck"><div>Read Full Review</div></a>
                      </div>
                    </div>
                    <p>
                      {t("client2")}
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
