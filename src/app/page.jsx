"use client";
import { useEffect } from "react";
import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import Steps from "./steps/steps";
import About from "./about/about";
import Testimonial from "./testimonial/testimonial";
import Work from "./work/work";
import Stats from "./stats/stats";
import News from "./news/news";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;

        const sr = ScrollReveal({
          origin: "bottom",
          distance: "30px",
          duration: 300,
          reset: true,
        });

        //hero
        sr.reveal(".hero__text", { origin: "top" });

        //steps
        sr.reveal(".steps__step", { distance: "100px" });

        //about
        sr.reveal(".about__text", { origin: "left" });
        sr.reveal(".about__img", { origin: "right" });

        //testimonial
        sr.reveal(".testimonial__bg");
        sr.reveal(".testimonial__title");
        sr.reveal(".testimonial__slider");

        //work
        sr.reveal(".work__title");
        sr.reveal(".work__subtitle");
        sr.reveal(".work__grid");

        //stats
        sr.reveal(".stats");
        sr.reveal(".stats__item", {
          distance: "100px",
          interval: 100,
        });

        //news
        sr.reveal(".news__title");
        sr.reveal(".news__subtitle");
        sr.reveal(".new__item", {
          distance: "100px",
          interval: 100,
          delay: 100,
        });

        //contact
        sr.reveal(".contact__container");
        sr.reveal(".contact__text", { delay: 100 });

        //footer
        sr.reveal(".footer__item", {
          distance: "100px",
          interval: 100,
          delay: 100,
        });
        sr.reveal(".footer__copyright");
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden ">
        <div>
          <Hero />
          <Steps />
          <About />
          <Testimonial />
          <Work />
          <Stats />
          <News />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
